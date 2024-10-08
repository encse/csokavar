import gm from 'gm';
import path, { ParsedPath } from 'path';
import { v5 as uuidv5 } from 'uuid';
import { assertNever } from './util';
import fs from 'fs';

type AssetKind = "imageAsset" | "jsAsset" | "cssAsset" | "fileAsset";
type AssetOf<T extends AssetKind> = Asset & { kind: T };

export type DstPath = string & {dstPath: undefined};
export function mkDstPath(st: string) { return st as DstPath;}

export class ImageAsset {
    readonly kind: "imageAsset" = "imageAsset";
    constructor(
        readonly srcPath: string,
        readonly dstPath: DstPath,
        readonly width: number,
        readonly height: number,
        readonly dominantColor: string
    ) {
    }

    static async create(fpat: string, dstPath: DstPath): Promise<ImageAsset> {
        return new Promise((resolve, reject) => {
            gm(fpat).size((error, dim) => {
                if (error != null) {
                    reject(new Error(`cannot create asset from ${fpat}\n` + error.message));
                } else {
                            
                    gm(fpat)
                        .resize(10, 10)
                        .colors(1)
                        .toBuffer('RGB', function (error, buffer) {
                            if (error != null) {
                                reject(new Error(`cannot create asset from ${fpat}\n` + error.message));
                            } else {
                                const color = `rgb(${buffer[0]}, ${buffer[1]}, ${buffer[2]})`;
                                resolve(new ImageAsset(fpat, dstPath, dim.width, dim.height, color))
                            }
                        });
                }
            });
        })

    }
}

export class JsAsset {
    readonly kind: "jsAsset" = "jsAsset";
    constructor(
        readonly srcPath: string,
        readonly dstPath: DstPath
    ) {
    }
}


export class CssAsset {
    readonly kind: "cssAsset" = "cssAsset";
    constructor(
        readonly srcPath: string,
        readonly dstPath: DstPath
    ) {
    }
}

export class FileAsset {
    readonly kind: "fileAsset" = "fileAsset";
    constructor(
        readonly srcPath: string,
        readonly dstPath: DstPath
    ) {
    }
}

export type Asset = ImageAsset | JsAsset | FileAsset | CssAsset;

type MediaDb = {
    readonly version: string;
    readonly items: ReadonlyArray<{
        readonly srcPath: string;
        readonly dstPath: DstPath;
        readonly width: number;
        readonly height: number;
        readonly dominantColor: string;
    }>
};

const MediaDb = {
    version: "0.3"
};

export class AssetManager {

    #assets: Asset[] = [];

    private static namespace = 'efd20c5e-528e-42c9-b5fa-2ad7487f0510';
    constructor(private readonly rootPath: DstPath, private readonly mediaDbDir: string) {
        this.loadMediaDb();
        this.saveMediaDb();
    }

    get assets(): Asset[] {
        return [...this.#assets];
    }

    async register(parsedPath: ParsedPath) {

        
        const fpat = path.join(parsedPath.root, parsedPath.dir, parsedPath.base);
        const assetKind: AssetKind = 
            parsedPath.ext === '.js' ? "jsAsset" : 
            ['.jpg', '.jpeg', '.gif', '.png', '.svg', '.webp'].includes(parsedPath.ext) ? "imageAsset" :
            ['.css'].includes(parsedPath.ext) ? "cssAsset" :
            "fileAsset";

        if (this.tryLookup(fpat, assetKind) != null) {
            return
        }


        if (!fs.existsSync(fpat)){
            throw new Error(`${fpat} does not exist`);
        }

        let locationBase =
            assetKind == "imageAsset" ? uuidv5(path.join(parsedPath.dir, parsedPath.base), AssetManager.namespace) :
            assetKind == "jsAsset" ?  this.hash(path.join(parsedPath.root, parsedPath.dir, parsedPath.name + parsedPath.ext)) :
            assetKind == "cssAsset" ?  this.hash(path.join(parsedPath.root, parsedPath.dir, parsedPath.name + parsedPath.ext)) :
            assetKind == "fileAsset" ? path.join(parsedPath.dir, parsedPath.name) :
            assertNever(assetKind)
        
        const location = mkDstPath(path.join(this.rootPath, 'assets', locationBase + parsedPath.ext));

        if (assetKind == "imageAsset") {
            try {
                const imageAsset = await ImageAsset.create(fpat, location);
                this.#assets.push(imageAsset);
                this.saveMediaDb();
            } catch(e) {
                console.log(e)
            }
        } else if (assetKind == 'jsAsset') {
            const jsAsset = new JsAsset(fpat, location);
            this.#assets.push(jsAsset);
        } else if (assetKind == 'cssAsset') {
            const cssAsset = new CssAsset(fpat, location);
            this.#assets.push(cssAsset);
        } else if (assetKind == 'fileAsset') {
            const fileAsset = new FileAsset(fpat, location);
            this.#assets.push(fileAsset);
        } else {
            assertNever(assetKind);
        }
    }

    lookup<T extends AssetKind>(fpat: string, assetKind: T): AssetOf<T> {

        const res = this.tryLookup(fpat, assetKind);
        if (res != null) {
            return res;
        }

        throw new Error(`Cannot find asset '${fpat}'`);
    }

    lookupAll<T extends AssetKind>(fpat: string, assetKind: T): AssetOf<T>[] {
        let res: AssetOf<T>[] = [];
        for (const item of this.#assets) {
            if (item.srcPath.startsWith(fpat) && item.kind == assetKind) {
                res.push(item as AssetOf<T>);
            }
        }
        return res;
    }

    lookupAsset(fpat: string): Asset {
        const res = this.tryLookupAsset(fpat);
        if (res != null) {
            return res;
        }

        throw new Error(`Cannot find asset '${fpat}'`);
    }

    private hash(fpat: string): string {
        const crypto = require('crypto');
        const fs = require('fs');

        const fileBuffer = fs.readFileSync(fpat);
        const hashSum = crypto.createHash('sha256');
        hashSum.update(fileBuffer);

        return hashSum.digest('hex');
    }

    private tryLookup<T extends AssetKind>(fpat: string, assetKind: T | null): AssetOf<T> | null {
        const asset = this.tryLookupAsset(fpat);
        return asset?.kind == assetKind ? (asset as AssetOf<T>) : null;
    }


    private tryLookupAsset(fpat: string): Asset | null {

        for (const item of this.#assets) {
            if (item.srcPath === fpat) {
                return item;
            }
        }
        return null;
    }


    private getMediaDbPath(): string {
        return path.resolve(this.mediaDbDir, 'media.db');
    }

    private loadMediaDb() {
        const mediaDbPath = this.getMediaDbPath();

        if (fs.existsSync(mediaDbPath)) {
            try {
                const db = JSON.parse(fs.readFileSync(mediaDbPath, 'utf-8')) as MediaDb;
                if (db.version === MediaDb.version) {
                    for (let item of db.items) {
                        if (fs.existsSync(item.srcPath)) {
                            this.#assets.push(
                                new ImageAsset(
                                    item.srcPath,
                                    item.dstPath,
                                    item.width,
                                    item.height,
                                    item.dominantColor
                                ));
                        }
                    }
                }
            } catch(e){
                console.warn('media db corrupted:' + e);
            }
        }
    }

    private saveMediaDb() {
        const mediaDbPath = this.getMediaDbPath();

        let db: MediaDb = {
            version: MediaDb.version,
            items: this.#assets.filter(isImageAsset).map(imageAsset => {
                return {
                    dstPath: imageAsset.dstPath,
                    dominantColor: imageAsset.dominantColor,
                    height: imageAsset.height,
                    width: imageAsset.width,
                    srcPath: imageAsset.srcPath
                }
            })

        }

        fs.mkdirSync(this.mediaDbDir, { recursive: true });
        fs.writeFileSync(mediaDbPath, JSON.stringify(db, undefined, "\t"));
    }

}


function isImageAsset(asset: Asset): asset is ImageAsset {
    return asset.kind == "imageAsset";
}

