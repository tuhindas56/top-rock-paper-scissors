"use strict";
function getPlayerChoice() {
    const playerChoice = prompt("Rock/Paper/Scissors?", "");
    if (playerChoice == "") {
        return "Field cannot be empty!";
    }
    else if (playerChoice == null) {
        return "Cancelled.";
    }
    else if (!(playerChoice.toUpperCase() == "ROCK" ||
        playerChoice.toUpperCase() == "PAPER" ||
        playerChoice.toUpperCase() == "SCISSORS")) {
        return "Invalid!";
    }
    else {
        return playerChoice.toUpperCase();
    }
}
function getComputerChoice() {
    const validOutcomes = ["ROCK", "PAPER", "SCISSORS"];
    const computerChoice = validOutcomes[Math.floor(Math.random() * validOutcomes.length)];
    return computerChoice;
}
function evaluateRounds() {
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
    if ((playerChoice == "ROCK" && computerChoice == "SCISSORS") ||
        (playerChoice == "PAPER" && computerChoice == "ROCK") ||
        (playerChoice == "SCISSORS" && computerChoice == "PAPER")) {
        alert(`You chose ${playerChoice} and computer chose ${computerChoice}, you win!`);
        return "win";
    }
    else if ((playerChoice == "SCISSORS" && computerChoice == "ROCK") ||
        (playerChoice == "ROCK" && computerChoice == "PAPER") ||
        (playerChoice == "PAPER" && computerChoice == "SCISSORS")) {
        alert(`You chose ${playerChoice} and computer chose ${computerChoice}, you lose!`);
        return "lose";
    }
    else if (playerChoice == computerChoice) {
        alert(`You chose ${playerChoice} and computer chose ${computerChoice}, it's a draw!`);
        return "draw";
    }
    else {
        return;
    }
}
function evaluateScore(playerScore, computerScore, draws) {
    if (playerScore > computerScore) {
        alert(`You scored ${playerScore} points and computer scored ${computerScore} points, you win!`);
    }
    else if (playerScore < computerScore) {
        alert(`You scored ${playerScore} points and computer scored ${computerScore} points, you lost!`);
    }
    else {
        alert(`You scored ${playerScore} points and computer scored ${computerScore} points. Total draws are ${draws}. It's a draw!`);
    }
}
function playRps() {
    let playerScore = 0;
    let computerScore = 0;
    let draws = 0;
    for (let i = 0; i < 5; i++) {
        const result = evaluateRounds();
        if (result == "win") {
            playerScore++;
        }
        else if (result == "lose") {
            computerScore++;
        }
        else if (result == "draw") {
            draws++;
        }
        else {
            return;
        }
    }
    evaluateScore(playerScore, computerScore, draws);
}
playRps();
