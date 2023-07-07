import { JsonDB, Config } from "node-json-db";

let db = new JsonDB(new Config("cache", true, false, "/"))

export default class Cache {

    async get() {
        let value = await db.getData("/cache")
        return value;
    }

    async create(value) {
        await db.push("/cache", value);
        console.log("session ID successfully cached locally")
    }

    async validate(value) {
        if (value === null) {
            console.log("session id not provided")
        }
        else {
            console.log("session id provided")
            return true
        }
    }

}