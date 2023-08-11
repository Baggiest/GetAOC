/* eslint-disable no-undef */
import axios from "axios"
import output from "./output";

export default async function fetch(day: string, year: string, cookie: string) {

    axios({
        method: "get",
        headers: { 'Cookie': cookie },
        url: `https://adventofcode.com/20${year}/day/${day}/input`,
        responseType: "text"
    }).then(async (res) => {

        let result = res.data;
        await output(result).then(() => {
            console.clear()
            console.log("Done :3 Look in input.txt")
        })
    })
}

// fetch("1", "21")
