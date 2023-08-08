
/* eslint-disable no-undef */

// TODOS:
// get cookie/sessionID for command from command [done]
// option to use cached cookie [done]
// add spinner [done]
// fix caching [done]

// move away from zx (unfortunately i couldnt ship this with zx to npm)
// so here am, doing a near rebuild 

import fetch from "./src/fetch"
import getInput from "./src/input"
import Cache from "./db/query"

const cache = new Cache()

// input: ts-node index.ts balls bars
// output: ['balls', 'bars']


let args = process.argv.slice(2)

if (args[0] === undefined) {
    console.log("Please provide a date \nFor example d1y21 which is day 1 of AOC 2021")
    process.exit(1);
}

let date = args[0]

// console.log({ args, date })

let day = date.split('y')[0].replace('d', '')
let year = date.split('y')[1]

// console.log({ day, year })

// a little hacky implementation cause im not paid
// it takes d1y21 turns it into [d1, 21]
// the replace is there to make it [1, 21]

async function bootstrap() {

    let cookieExists: boolean = await cache.exists();

    if (args[2] === "--no-cache") { cookieExists = false }
    if (args[2] === "--clear-cache") { cache.destroy() }


    // Im doing this childish looking if else cause i dont wanna deal with
    // no fucking truthy falsy shit
    // plus its just readable and simple cry me a fucking river i wont do "else"

    if (cookieExists === true) {

        // console.log("Cookie found in cache")
        fetch(day, year, await cache.get());
    }

    if (cookieExists === false) {
        
        console.log("No cookie found in cache")
        
        // inquirer thing
        let cookie = await getInput() // retrieve from cache

        // cache the cookie
        cache.create(cookie) 
        
        // do the main thing / fetching the input.txt from URL
        fetch(day, year, cookie);
    }
}

bootstrap();