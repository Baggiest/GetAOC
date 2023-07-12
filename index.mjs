#!/usr/bin/env zx
/* eslint-disable no-undef */

// TODOS:
// get cookie/sessionID for command from command [done]
// option to use cached cookie [done]
// add spinner [done]
// fix caching

import { argv } from "zx"
import curl from "./src/curl.js"

// import Cache from "./db/query.js"
// const cache = new Cache()

// input: ./index.mjs balls
// output: ['index.mjs', 'balls']


let args = argv._.slice(1)
let date = args[0]

console.log({ args, date })


let day = date.split('y')[0].replace('d', '')
let year = date.split('y')[1]

console.log({ day, year })

// a little hacky implementation cause im not paid
// it takes d1y21 turns it into [d1, 21]
// the replace is there to make it [1, 21]


// example input without cached creds
// zx index.mjs d1y21 asldkfjei2304851ecmnxaoiewfcep
// with cache
// zx index.mjs d1y21 

// after parsing it becomes [date, sessionID]

switch (args[1]) { //check for sessionID (second argument)

    case undefined:
        // no sessionID provided
        await curl(day, year, null)
        break;

    default:
        // sessionID is provided
        let cookieValue = args[1].replace("'", "")
        console.log(cookieValue)
        

        await curl(day, year, "Cookie: " + cookieValue)
        break;
}