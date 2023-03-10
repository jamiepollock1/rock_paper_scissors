// First I assign the fixed options. The [] is used
// because the options are strings

const options = (["rock","paper","scissors"]);
const playerTurn = "rock";

// This function below will have the computer generate
// a random choice for use in each round

function getComputerChoice(options) {
    let randomIndex = Math.floor(Math.random() * options.length);
    let computerSelection = options[randomIndex];
    return computerSelection;
}
// Now this next function will play a round of the game
// using the playerTurn and compTurn parameters

function playRound(playerTurn, computerSelection) {
return (checkWinner(playerTurn,computerSelection));
}

// This function checks who wins a round
function checkWinner(playerTurn,computerSelection) {
    if (playerTurn === computerSelection) {
        //console.log("It's a tie!");
        return "tie";
    } else if (playerTurn === "rock" && computerSelection === "scissors" || playerTurn === "scissors" && computerSelection === "paper" || playerTurn === "paper" && computerSelection === "rock") {
        //console.log(`You win! ${playerTurn} beats ${computerSelection}`);
        return "player";
    } else {
        //console.log(`You lose! ${computerSelection} beats ${playerTurn}`);
        return "computer";
    }
}

// Next call a game function that plays rounds
// and keeps track of score

function getPlayerChoice() {
    let validatedInput = false;

    while (validatedInput == false) {
        const choice = prompt("Rock Paper Scissors");
        if (choice == null) {
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if (options.includes(choiceInLower)) {
            validatedInput = true;
            return choiceInLower;
        }
    }


}

function game() {

    let playerScore = 0;
    let computerScore = 0;


    for (let i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice(options);
        const playerTurn = getPlayerChoice();

        console.log(playerTurn);
        console.log(computerSelection);
        console.log(playRound(playerTurn,computerSelection));
        console.log("------------");

        if (checkWinner(playerTurn,computerSelection) == "player") {
            playerScore++;
        }
        else if (checkWinner(playerTurn,computerSelection) == "computer") {
            computerScore++;
        }
        else if (checkWinner(playerTurn,computerSelection) == "tie") {
            playerScore++;
            computerScore++;
        }
}

console.log("Game Over, The Results Are In...");

if (playerScore > computerScore) {
    console.log("Player Wins!");
}
else if (playerScore == computerScore) {
    console.log("Tie! Go Again!");
}
else if (playerScore < computerScore) {
    console.Log("You Lose! Unlucky...");
}

}

game()