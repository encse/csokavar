import sizeOf from 'image-size';
import path, { ParsedPath } from 'path';
import { Url } from 'url';
import { v5 as uuidv5 } from 'uuid';

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

export type Asset = ImageAsset;

export class AssetManager {
    #assets: Asset[] = [];
    static namespace = 'efd20c5e-528e-42c9-b5fa-2ad7487f0510';

    constructor(private readonly cdnUri: string) {
    }

    get assets(): Asset[]{
        return [...this.#assets];
    }

    register(parsedPath: ParsedPath){
        const uuid = uuidv5(path.join(parsedPath.dir, parsedPath.base), AssetManager.namespace);
        this.#assets.push(
            new ImageAsset(
                path.join(parsedPath.root, parsedPath.dir, parsedPath.base),
                new URL(path.join('assets', uuid + parsedPath.ext), this.cdnUri)
            )
        );
    }

    lookup(fpat: string): Asset {
        
        for (const item of this.#assets) {
            if (item.path == fpat) {
                return item;
            }
        }
        throw new Error(`Cannot find asset '${fpat}'`);
    }
}

