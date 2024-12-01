import { processInput } from "./utils.ts";

const filePath = "./input.txt";
const inputPart2 = await Deno.readTextFile(filePath);
const { list1, list2 } = processInput(inputPart2);
const map = new Map<number, number>();
for (const num of list2) {
    map.set(num, (map.get(num) || 0) + 1);
}

let dist2 = 0;
for (const num of list1) {
    const occurrences = map.get(num) || 0;
    dist2 += num * occurrences;
}

console.log(dist2); //18934359
