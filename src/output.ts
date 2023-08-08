import fs from "node:fs"
import path from "node:path"

export default async function output(data: string) {

    const file = path.join(process.cwd(), "input.txt");
    
    fs.writeFile(file, data, { encoding: "utf-8" }, (err) => {
        if (err) {
            console.log("ion fuckin know we fucked up somewhere")
        }
    })
};

