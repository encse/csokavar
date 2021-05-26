import sizeOf from 'image-size';
import path, { ParsedPath } from 'path';
import { v4 as uuidv4 } from 'uuid';

type AssetKind = "imageAsset" | "jsAsset";
type AssetOf<T extends AssetKind> = Asset & {kind: T};

export class ImageAsset {
    kind: "imageAsset" = "imageAsset";
    #width: number | null;
    #height: number | null;
    constructor(public readonly path: string, public readonly url: URL) {
    }

    get caption(): string {
        return "";
    }

    get width(): number {
        this.ensureSize();
        return this.#width;
    }

    get height(): number {
        this.ensureSize();
        return this.#height;
    }

    private ensureSize() {
        if (this.#width == null) {
            const size = sizeOf(this.path);
            this.#width = size.width;
            this.#height = size.height;
        }
    }
}

export class JsAsset {
    kind: "jsAsset" = "jsAsset";

    constructor(public readonly path: string, public readonly url: URL) {
    }
}

export type Asset = ImageAsset | JsAsset;

export class AssetManager {
    #assets: Asset[] = [];

    constructor(private readonly cdnUri: string) {
    }

    get assets(): Asset[]{
        return [...this.#assets];
    }

    register(parsedPath: ParsedPath){
        const uuid = uuidv4();
        const fpat = path.join(parsedPath.root, parsedPath.dir, parsedPath.base);
        const uri = new URL(path.join('assets', uuid + parsedPath.ext), this.cdnUri);

        const asset = 
            parsedPath.ext == '.js' ? new JsAsset(fpat, uri) :
            new ImageAsset(fpat, uri);

        this.#assets.push(asset);
    }

    lookup<T extends AssetKind>(fpat: string, assetKind: T): AssetOf<T> {
        
        for (const item of this.#assets) {
            if (item.path === fpat) {
                if (item.kind === assetKind){
                    return item as AssetOf<T>;
                }
            }
        }

        throw new Error(`Cannot find asset '${fpat}'`);
    }
}

