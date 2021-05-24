import { slugify } from "./util";

export class Tag {
    public readonly uri;
    constructor(
        public readonly name: string, 
    ) {
        this.uri = `/blog/tag/${slugify(name)}`;
    }
}