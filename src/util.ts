import fs from 'fs';
import path, { ParsedPath }  from 'path';

export function* files(root: string, dir: string = ''): Iterable<ParsedPath> {
    for (let file of fs.readdirSync(path.resolve(root, dir))) {
        const fpat = path.join(dir, file);
        if (fs.statSync(path.resolve(root, fpat)).isDirectory()) {
            yield* files(root, fpat);
        } else {
            const parsed = path.parse(fpat);
            parsed.root = root;
            yield parsed;
        }
    }
};

export function assertNever(x: never): never {
    throw new Error(x);
}

export function snakeToCamel(snake: string) {
    return (
        snake
            .split("-")
            .map(
                (part, i) => i == 0 ?
                    part :
                    part[0].toUpperCase() + part.substring(1))
            .join('')
    );
}

let seed = 0;
export function pick<T>(items: T[]): T {
    let x = Math.sin(seed++) * 10000;
    x = x - Math.floor(x);
    return items[Math.floor(x * items.length)];
}

export function removeAccents(st: string){
   return st
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}

export function slugify(st: string) {
    return removeAccents(st)
        .replace(/[^a-zA-Z0-9_\-]/g, "-")
        .replace(/--+/g, "-")
        .toLowerCase();
}


export function formatDate(date: Date) {
    const months = "január február március április május június július augusztus szeptember október november december".split(' ');
    return `${date.getFullYear()}. ${months[date.getMonth()]} ${date.getDate()}.`;
}


export function zeroPad(num: number, places: number): string {
    const zero = places - num.toString().length + 1;
    return Array(+(zero > 0 && zero)).join("0") + num;
}

export function* chunks<T>(items: T[], chunkSize: number): Iterable<T[]> {
    let i = 0;
    while (i < items.length) {
        yield items.slice(i, i + chunkSize);
        i += chunkSize;
    }
}
