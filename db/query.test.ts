import { test, expect } from "vitest"
import Cache from "./query.js";

let cache = new Cache()
let testValue = "balls"
let oldValue: string;

async function setValues() { oldValue = await cache.get() }

setValues()

test("Creating a cache record", async () => {
    expect(await cache.create(testValue)).toBe(true);
})

test("Getting the recoreded cache", async () => {
    expect(await cache.get()).toBe(testValue)
    cache.create(oldValue)
})


// we take the old value, set the new test value, do the testing and set the old one back

// basically non-destructive testing 
// getAOC 1 OceanGate 0