import { JsonDB, Config } from "node-json-db";

let db = new JsonDB(new Config("cache", true, false, "/"))

export default class Cache {

    async get() {

        try {
            let value = await db.getData("/cache")
            return value
        }

        catch {
            console.log("no value found in cache")
            return false
        }
    }

    async destroy() {
        await db.delete("/cache");
        console.log("cache cleared successfully")
    }

    async create(value: string) {
        await db.push("/cache", value)
        console.log("Cookie successfully cached locally")
        return true;
    }

    // async check(value) {
    //     return await db.exists(`/cache/${value}`)
    // }

    async exists() {
        return await db.exists('/cache')
    }

    async reload() {
        db.reload()
    }
}