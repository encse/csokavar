import { execSync } from "child_process"
import fs from "fs"
import path from "path"
import { files } from "./util"

export function convertToWebp(fpatRoot: string): boolean {
    let success = true;
    for (let parsedPath of [...files(fpatRoot)]){
        const fpatIn = path.join(parsedPath.root, parsedPath.dir, parsedPath.base);
        try {
            if (parsedPath.ext === '.png' || parsedPath.ext === '.jpg') {
                const fpatOut = path.join(parsedPath.root, parsedPath.dir, parsedPath.name + '.webp');

                execSync(`cwebp ${fpatIn} -o ${fpatOut}`)
                const ratio = ((fs.statSync(fpatOut).size / fs.statSync(fpatIn).size) * 100);
                if (ratio < 100) {
                    console.log(`converted ${fpatOut}, size to original ratio: ${ratio.toFixed(2)}%`);
                    fs.unlinkSync(fpatIn);
                } else {
                    fs.unlinkSync(fpatOut);
                }
            }
        } catch (error) {
            console.log(fpatIn);
            console.log(error);
            success = false;
        }
    }
    return success;
}