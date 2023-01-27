// First I assign the fixed options. The [] is used
// because the options are strings

const options = (["Rock","Paper","Scissors"]);
const playerTurn = ("Rock")

// This function below will have the computer generate
// a random choice for use in each round

function getComputerChoice(options) {
    let randomIndex = Math.floor(Math.random() * options.length);
    let computerSelection = options[randomIndex];
    console.log(computerSelection);
    return computerSelection;
}

// Now carry the result of getComputerChoice over and
// assign it to compTurn for use in the game

let compTurn = getComputerChoice(options);
console.log(compTurn);

// Now this next function will play a round of the game
// using the playerTurn and compTurn parameters