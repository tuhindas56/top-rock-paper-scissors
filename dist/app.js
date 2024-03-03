var choices = document.querySelector("#choices");
var replay = document.querySelector("#replay");
var result = document.querySelector("#result");
var playerScore = document.querySelector("#playerScore");
var computerScore = document.querySelector("#computerScore");
var draws = document.querySelector("#draws");
replay.style.display = "none";
replay.addEventListener("click", function () {
    result.textContent = "First to 5 points wins!";
    playerScore.textContent = "0";
    computerScore.textContent = "0";
    draws.textContent = "0";
    replay.style.display = "none";
    choices.style.display = "flex";
});
choices.addEventListener("click", function (event) {
    var target = event.target;
    switch (target.id) {
        case "rock":
            return getPlayerChoice("ROCK");
        case "paper":
            return getPlayerChoice("PAPER");
        case "scissors":
            return getPlayerChoice("SCISSORS");
        default:
            return;
    }
});
function getPlayerChoice(playerChoice) {
    return playRound(playerChoice);
}
function getComputerChoice() {
    var validOutcomes = ["ROCK", "PAPER", "SCISSORS"];
    var computerChoice = validOutcomes[Math.floor(Math.random() * validOutcomes.length)];
    return computerChoice;
}
function playRound(playerChoice) {
    var computerChoice = getComputerChoice();
    if (playerChoice === computerChoice) {
        result.textContent = "You chose ".concat(playerChoice, " and computer chose ").concat(computerChoice, ", it's a draw!");
        draws.textContent = +draws.textContent + 1 + "";
    }
    else if ((playerChoice === "ROCK" && computerChoice === "SCISSORS") ||
        (playerChoice === "PAPER" && computerChoice === "ROCK") ||
        (playerChoice === "SCISSORS" && computerChoice === "PAPER")) {
        result.textContent = "You chose ".concat(playerChoice, " and computer chose ").concat(computerChoice, ", you win!");
        playerScore.textContent = +playerScore.textContent + 1 + "";
    }
    else {
        result.textContent = "You chose ".concat(playerChoice, " and computer chose ").concat(computerChoice, ", you lose!");
        computerScore.textContent = +computerScore.textContent + 1 + "";
    }
    evaluateScore();
}
function evaluateScore() {
    if (playerScore.textContent == "5") {
        result.textContent = "You scored ".concat(playerScore.textContent, " points and computer scored ").concat(computerScore.textContent, " points, you win!");
        replay.style.display = "inline";
        choices.style.display = "none";
    }
    else if (computerScore.textContent == "5") {
        result.textContent = "You scored ".concat(playerScore.textContent, " points and computer scored ").concat(computerScore.textContent, " points, you lost!");
        replay.style.display = "inline";
        choices.style.display = "none";
    }
    else {
        return;
    }
}
