/* eslint-disable no-undef */
import { $ } from "zx/core";
import Cache from "../db/query.js";

let cache = new Cache()

export default async function curl(day, year, cookie) {
    // part 1: validating parameteres and handling caching
    const keyIsValid = cache.validate(cookie)

    if (!keyIsValid) return; // key not provided and not found in cache
    console.log("Some cookie recieved, not sure if its correct, starting the downloading process")
    cache.create(cookie)

    await spinner(() => $`curl --request GET \
    --url 'https://adventofcode.com/20${year}/day/${day}/input' \
    --header ${cookie} -o input.txt`)

    // console.log(cookie)

}
