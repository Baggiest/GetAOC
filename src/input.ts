import { input } from "@inquirer/prompts"

export default async function getInput() {
    const cookie = await input({ message: "Input your AOC cookie -> " })
    return cookie;
};
