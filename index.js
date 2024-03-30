import inquirer from "inquirer";
for (let a = 0; a <= 20; a++) {
    const randomNumber = Math.floor(Math.random() * 5 + 1);
    const answer = await inquirer.prompt([{
            name: "numberGuess",
            Type: "number",
            message: "Please guess a number between 1 to 5",
        },]);
    if (answer.numberGuess == randomNumber) {
        console.log("You guess the correct number");
    }
    else {
        console.log("You guess the wrong number");
    }
    ;
    const again = await inquirer.prompt([{
            name: "againGuess",
            message: "Do you want more chance",
            type: "list",
            choices: ["Yes", "No"]
        }]);
    if (again.choices === "Yes") {
        continue;
    }
    else {
        console.log("Thanks for play");
        break;
    }
}
