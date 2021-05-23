import sizeOf from 'image-size';
import path, { ParsedPath } from 'path';

export class ImageAsset {
    kind: "imageAsset" = "imageAsset";
    #width: number | null;
    #height: number | null;
    constructor(public readonly path: string, public readonly uri: string) {
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

export type Asset = ImageAsset;

export class AssetManager {
    private assets: Asset[];
    constructor(public readonly paths: readonly ParsedPath[], baseUri: string) {
        this.assets = paths.map(item => new ImageAsset(
            path.join(item.root, item.dir, item.base),
            path.join(baseUri, item.dir, item.base)
        ))
    }

    lookup(path: string): Asset {
        for (const item of this.assets) {
            if (item.path.endsWith(path)) {
                return item;
            }
        }
        throw new Error(`Cannot find asset '${path}'`);
    }
}

