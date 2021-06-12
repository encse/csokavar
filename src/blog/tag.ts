import { AssetManager, ImageAsset } from "../assets";
import { slugify } from "../util";

export class Tag {
    public readonly uri;
    public readonly backgrounds: readonly ImageAsset[];
    constructor(
        public readonly name: string, 
        private assetManager: AssetManager
    ) {
        let slug = slugify(name);
        this.uri = `/blog/tag/${slug}`;
        this.backgrounds = assetManager.lookupAll(`site/assets/backgrounds/${slug}/`, 'imageAsset');
    }
}