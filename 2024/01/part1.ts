import { processInput } from './utils.ts';

const filePath = "./input.txt";
const input = await Deno.readTextFile(filePath);
const { list1, list2 } = processInput(input);
list1.sort();
list2.sort();

let dist = 0;
for (let index = 0; index < list1.length; index++) {
    dist += Math.abs(list1[index] - list2[index])
}

console.log(dist); //2378066
