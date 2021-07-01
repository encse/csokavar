import { execSync } from "child_process"
import fs from "fs"
import path from "path"
import { files } from "./util"

export function convertToWebp(fpatRoot: string){
    for (let parsedPath of files(fpatRoot)){
        try {
            const fpatIn = path.join(parsedPath.root, parsedPath.dir, parsedPath.base);
            const fpatOut = path.join(parsedPath.root, parsedPath.dir, parsedPath.name + '.webp');
            if (parsedPath.ext === '.png' || parsedPath.ext === '.jpg') {
                execSync(`cwebp ${fpatIn} -o ${fpatOut}`)
                console.log(`${(fs.statSync(fpatOut).size / fs.statSync(fpatIn).size) * 100}% ${fpatOut}`);
                // fs.unlinkSync(fpatIn);
            }
        } catch (error) {
            console.log(error);
        }
       
    }
}