import { readFileSync } from "node:fs";

const lines = readFileSync("day2.txt", { encoding: "utf-8" }) 
  .replace(/\r/g, "") 
  .trim() 
  .split("\n") 
  .map((line) => line.split(" ")); 

const moves = {
  rock: 1,
  paper: 2,
  scissors: 3,
};

const mapInput = {
  A: moves.rock,
  B: moves.paper,
  C: moves.scissors,
  X: moves.rock,
  Y: moves.paper,
  Z: moves.scissors,
};

function score(opponentMove, ourMove) {
  if (opponentMove === ourMove) {
    return ourMove + 3;
  }
  if (
    (opponentMove === moves.rock && ourMove === moves.paper) ||
    (opponentMove === moves.paper && ourMove === moves.scissors) ||
    (opponentMove === moves.scissors && ourMove === moves.rock)
  ) {
   
  return ourMove + 6;
  }

  return ourMove;
}

function part1() {
  const outcomes = lines.map((line) => {
    const opponentMove = mapInput[line[0]];
    const ourMove = mapInput[line[1]];
    return score(opponentMove, ourMove);
  });
  console.log(outcomes.reduce((a, b) => a + b, 0));
}

const solution = {
  A: {
    X: moves.scissors, 
    Y: moves.rock, 
    Z: moves.paper, 
  },
  B: {
    X: moves.rock,
    Y: moves.paper,
    Z: moves.scissors,
  },
  C: {
    X: moves.paper,
    Y: moves.scissors,
    Z: moves.rock,
  },
};

function part2() {
  const outcomes = lines.map((line) => {
    const opponentMove = mapInput[line[0]];

    const ourMove = solution[line[0]][line[1]];

    return score(opponentMove, ourMove);
  });
  console.log(outcomes.reduce((a, b) => a + b, 0));
}

part1();
part2();