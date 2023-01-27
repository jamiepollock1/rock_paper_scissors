const options = (["Rock","Paper","Scissors"]);

function getComputerChoice(options) {
    let randomIndex = Math.floor(Math.random() * options.length);
    let computerSelection = options[randomIndex];
    console.log(computerSelection);
    return computerSelection;
}