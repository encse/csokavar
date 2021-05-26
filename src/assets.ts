import sizeOf from 'image-size';
import path, { ParsedPath } from 'path';
import { v4 as uuidv4, v5 as uuidv5 } from 'uuid';

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

    private static namespace = 'efd20c5e-528e-42c9-b5fa-2ad7487f0510';
    constructor(private readonly cdnUri: string) {
    }

    get assets(): Asset[]{
        return [...this.#assets];
    }

    register(parsedPath: ParsedPath){
        const isImage = parsedPath.ext !== '.js';

        const uuid = isImage ? 
            uuidv5(path.join(parsedPath.dir, parsedPath.base), AssetManager.namespace) : 
            uuidv4();

        const fpat = path.join(parsedPath.root, parsedPath.dir, parsedPath.base);
        const uri = new URL(path.join('assets', uuid + parsedPath.ext), this.cdnUri);

        const asset = isImage ? new ImageAsset(fpat, uri) : new JsAsset(fpat, uri);

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

