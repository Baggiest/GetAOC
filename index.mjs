#!/usr/bin/env zx 

// get cookie for command from command 
// option to use cached cookie 

console.log('hello cli')

let flags = [
    '--cache',
]
await $`neofetch`