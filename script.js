// First I assign the fixed options. The [] is used
// because the options are strings

const options = (["rock","paper","scissors"]);

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

// Now this next function will play a round of the game
// using the playerTurn and compTurn parameters

function playRound(playerTurn, computerSelection) {

    if (playerTurn === computerSelection) {
        return "It's a tie!";
    } else if (playerTurn === "rock" && computerSelection === "scissors" || playerTurn === "scissors" && computerSelection === "paper" || playerTurn === "paper" && computerSelection === "rock") {
        return "You win!";
    } else {
        return "You lose!";
    }
}

let computerSelection = getComputerChoice(options);
let playerTurn = "rock";
console.log(playRound(playerSelection, compTurn));