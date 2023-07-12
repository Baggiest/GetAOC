import { test, expect } from "vitest"
import Cache from "./query.js";

let cache = new Cache()
let value = "balls";

test("Creating a cache record", async () => {
    console.log("ran")
    expect(await cache.create(value)).toBe(true);
})

test("Getting the recoreded cache", async () => {
    expect(await cache.get()).toBe(value)
})