import { readFileSync } from "node:fs";

const elves = readFileSync("day01.txt", { encoding: "utf-8" }) 
  .replace(/\r/g, "") 
  .trim() 
  .split("\n\n"); 

function part1() {
  const calories = elves.map((elf) => {
    const calories = elf.split("\n").map(Number);
    return calories.reduce((previous, current) => previous + current, 0);
  });

  console.log(Math.max(...calories));
}

function part2() {
  const calories = elves.map((elf) => {
    const calories = elf.split("\n").map(Number);
    return calories.reduce((previous, current) => previous + current, 0);
  });

  calories.sort((a, b) => b - a);

  console.log(
    calories.slice(0, 3).reduce((previous, current) => previous + current, 0)
  );
}

part1();
part2();