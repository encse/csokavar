import gm from 'gm';
import path, { ParsedPath } from 'path';
import { v4 as uuidv4, v5 as uuidv5 } from 'uuid';
import { assertNever } from './util';
import fs from 'fs';

type AssetKind = "imageAsset" | "jsAsset" | "fileAsset";
type AssetOf<T extends AssetKind> = Asset & { kind: T };

export class ImageAsset {
    readonly kind: "imageAsset" = "imageAsset";
    constructor(
        readonly srcPath: string,
        readonly url: URL,
        readonly width: number,
        readonly height: number,
        readonly dominantColor: string
    ) {

    }

    static async create(fpat: string, url: URL): Promise<ImageAsset> {
        return new Promise((resolve, reject) => {
            gm(fpat).size((error, dim) => {
                if (error != null) {
                    reject(error);
                } else {
                    gm(fpat)
                        .resize(10, 10)
                        .colors(1)
                        .toBuffer('RGB', function (error, buffer) {
                            if (error != null) {
                                reject(error);
                            } else {
                                const color = `rgb(${buffer[0]}, ${buffer[1]}, ${buffer[2]})`;
                                resolve(new ImageAsset(fpat, url, dim.width, dim.height, color))
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
        readonly url: URL
    ) {

    }
}


export class FileAsset {
    readonly kind: "fileAsset" = "fileAsset";
    constructor(
        readonly srcPath: string,
        readonly url: URL
    ) {

    }
}

export type Asset = ImageAsset | JsAsset | FileAsset;

type MediaDb = {
    readonly version: string;
    readonly items: ReadonlyArray<{
        readonly srcPath: string;
        readonly cdnPath: string;
        readonly width: number;
        readonly height: number;
        readonly dominantColor: string;
    }>
};

const MediaDb = {
    version: "0.2"
};

export class AssetManager {

    #assets: Asset[] = [];

    private static namespace = 'efd20c5e-528e-42c9-b5fa-2ad7487f0510';
    constructor(private readonly dev: boolean, private readonly cdnUri: string, private readonly mediaDbDir: string) {
        this.loadMediaDb();
    }

    get assets(): Asset[] {
        return [...this.#assets];
    }

    async register(parsedPath: ParsedPath) {

        const fpat = path.join(parsedPath.root, parsedPath.dir, parsedPath.base);
        const assetKind: AssetKind = 
            parsedPath.ext === '.js' ? "jsAsset" : 
            ['.jpg', '.jpeg', '.gif', '.png', '.svg'].includes(parsedPath.ext) ? "imageAsset" :
            "fileAsset";

        if (this.tryLookup(fpat, assetKind) != null) {
            return
        }

        let location =
            assetKind == "imageAsset" ? uuidv5(path.join(parsedPath.dir, parsedPath.base), AssetManager.namespace) :
            assetKind == "jsAsset" ?  (this.dev ? path.join(parsedPath.dir, parsedPath.name) :  uuidv4()) :
            assetKind == "fileAsset" ? path.join(parsedPath.dir, parsedPath.name) :
            assertNever(assetKind)
        
        location = path.join('assets', location + parsedPath.ext);

        const uri = new URL(location, this.cdnUri);

        if (assetKind == "imageAsset") {
            const imageAsset = await ImageAsset.create(fpat, uri);
            this.#assets.push(imageAsset);
            this.saveMediaDb();
        } else if (assetKind == 'jsAsset') {
            const jsAsset = new JsAsset(fpat, uri);
            this.#assets.push(jsAsset);
        } else if (assetKind == 'fileAsset') {
            const fileAsset = new FileAsset(fpat, uri);
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

    lookupAsset<T extends AssetKind>(fpat: string): Asset {
        const res = this.tryLookupAsset(fpat);
        if (res != null) {
            return res;
        }

        throw new Error(`Cannot find asset '${fpat}'`);
    }

    private tryLookup<T extends AssetKind>(fpat: string, assetKind: T | null): AssetOf<T> | null {
        const asset = this.tryLookupAsset(fpat);
        return asset?.kind == assetKind ? (asset as AssetOf<T>) : null;
    }


    private tryLookupAsset(fpat: string): Asset {

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
                        this.#assets.push(
                            new ImageAsset(
                                item.srcPath,
                                new URL(item.cdnPath, this.cdnUri),
                                item.width,
                                item.height,
                                item.dominantColor
                            ));
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
                    cdnPath: imageAsset.url.pathname,
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

