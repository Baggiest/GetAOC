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

    async create(value) {
        await db.push("/cache", value)
        console.log("session ID successfully cached locally")
        return true;
    }

    async check(value) {
        return await db.exists(`cache/${value}`)
    }

    async reload() {
        db.reload()
    }
}