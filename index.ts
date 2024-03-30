

import inquirer from "inquirer"

const randomNumber:number = Math.floor(Math.random() * 5 + 1 );
const answer = await inquirer.prompt([{
name: "numberGuess",
Type: "number",
message: "Please guess a number between 1 to 5",
},]);

if (answer.numberGuess == randomNumber){
    console.log("You guess the correct number");
}
else {
    console.log("You guess the wrong number")
};
