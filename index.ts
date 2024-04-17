#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let loop = true;

console.log(
  chalk.yellow(`\n\t\t==============================================`)
);
console.log(
  chalk.green.italic.bold(`\t\t     " WELLCOME TO WORD OR LETTER COUNTER: "`)
);
console.log(
  chalk.yellow(`\t\t==============================================\n`)
);
while (loop) {
  let userInput = await inquirer.prompt([
    {
      name: "choice",
      type: "list",
      choices: ["WORD COUNTER:", "LETTER COUNTER:", "EXIT PROGRAM:"],
      message: "WHAT THING WILL YOU CHOOSE ?",
    },
  ]);
  if (userInput.choice === "WORD COUNTER:") {
    let wordContinue = true;
    while (wordContinue) {
      let wordCountInput = await inquirer.prompt([
        {
          name: "word",
          type: "input",
          message: "TYPE YOUR LIST OR ANYTHING.",
        },
      ]);
      let wordCount = wordCountInput.word.trim().split(" ");
      let wordLength = wordCount.length;
      console.log(
        chalk.red(`\n\t\t==============================================`)
      );
      console.log(
        chalk.yellow(`\t\t      YOU WRITE: `) +
          chalk.greenBright.bold.italic(`" ${wordLength} "`) +
          chalk.yellow(` WORDS IN INPUT.`)
      );
      console.log(
        chalk.red(`\t\t==============================================\n`)
      );
      let wantToContinue = await inquirer.prompt([
        {
          name: "wantToCont",
          type: "confirm",
          message: "DO YOU WANT TO CONTINUE WORD COUNTER ?",
        },
      ]);
      if (wantToContinue.wantToCont !== wordContinue) {
        break;
      }
    }
  } else if (userInput.choice === "LETTER COUNTER:") {
    let letterContinue = true;
    while (letterContinue) {
      let letterCountInput = await inquirer.prompt([
        {
          name: "letter",
          type: "input",
          message: "TYPE YOUR LIST OR ANYTHING.",
        },
      ]);
      let letterCount = letterCountInput.letter.trim();
      let letterLength = letterCount.length;
      console.log(
        chalk.yellow(`\n\t\t==============================================`)
      );
      console.log(
        chalk.green.italic.bold(`\t\t     YOU WRITE: `) +
          chalk.red.bold.italic(`" ${letterLength} "`) +
          chalk.green.italic.bold(` LETTERS IN INPUT.`)
      );
      console.log(
        chalk.yellow(`\t\t==============================================\n`)
      );
      let wantToContinue2 = await inquirer.prompt([
        {
          name: "wantToCont2",
          type: "confirm",
          message: "DO YOU WANT TO CONTINUE WORD COUNTER ?",
        },
      ]);
      if (wantToContinue2.wantToCont2 !== letterContinue) {
        break;
      }
    }
  } else if (userInput.choice === "EXIT PROGRAM:") {
    console.log(
      chalk.green(`\n\t\t==============================================`)
    );
    console.log(
      chalk.yellow.italic.bold`\t\t\t  THANKS FOR USING: "GOOD BYE!!"`
    );
    console.log(
      chalk.red.italic.bold(
        `\t\t\t   CREATOR BYE :` + chalk.blue(` "RAHEEM VEER"`)
      )
    );
    console.log(
      chalk.green(`\t\t==============================================\n`)
    );
    break;
  }
}
