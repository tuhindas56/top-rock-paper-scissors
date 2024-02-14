"use strict";
function getComputerChoice() {
    const allOutcomes = ["ROCK", "PAPER", "SCISSORS"];
    const outcome = allOutcomes[Math.floor(Math.random() * allOutcomes.length)];
    return outcome;
}
function rockPaperScissors(playerSelection, computerSelection) {
    if ((playerSelection == "PAPER" && computerSelection == "ROCK") || (playerSelection == "SCISSORS" && computerSelection == "PAPER") || (playerSelection == "ROCK" && computerSelection == "SCISSORS")) {
        return `Player chose ${playerSelection} and Computer chose ${computerSelection}, so Player wins!`;
    }
    else if (playerSelection == computerSelection) {
        return `Player chose ${playerSelection} and Computer chose ${computerSelection}, so its a Draw!`;
    }
    else {
        return `Player chose ${playerSelection} and Computer chose ${computerSelection}, so Computer wins!`;
    }
}
const playerSelection = "papEr";
const computerSelection = getComputerChoice();
console.log(rockPaperScissors(playerSelection.toUpperCase(), computerSelection));
