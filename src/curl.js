/* eslint-disable no-undef */
import { $ } from "zx/core";
import Cache from "../db/query.js";

let cache = new Cache()

export default async function curl(day, year, cookie) {

    if (cookie != null) {
        console.log("Some cookie recieved, not sure if its correct, starting the downloading process")
        cache.create(cookie)

        await spinner(() => $`curl --request GET \
    --url 'https://adventofcode.com/20${year}/day/${day}/input' \
    --header ${cookie} -o input.txt`)
        process.exit(1);
    }

    if (cookie === null) {
        
        console.log("cookie not provided, using cache")
        let cachedCookie = await cache.get()

        if (cachedCookie === false) {
            console.log('cookie not given and not found in cache, aborting process')
            process.exit(0)
        }

        else {
            await spinner(() => $`curl --request GET \
    --url 'https://adventofcode.com/20${year}/day/${day}/input' \
    --header ${cachedCookie} -o input.txt`)
        }

    }
}
