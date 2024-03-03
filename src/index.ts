const choices = document.querySelector("#choices") as HTMLElement;
const replay = document.querySelector("#replay") as HTMLElement;
const result = document.querySelector("#result") as HTMLElement;
const playerScore = document.querySelector("#playerScore") as HTMLElement;
const computerScore = document.querySelector("#computerScore") as HTMLElement;
const draws = document.querySelector("#draws") as HTMLElement;

replay.style.display = "none";
replay.addEventListener("click", () => {
  result.textContent = "First to 5 points wins!";
  playerScore.textContent = "0";
  computerScore.textContent = "0";
  draws.textContent = "0";
  replay.style.display = "none";
  choices.style.display = "flex";
});

choices.addEventListener("click", (event) => {
  let target = event.target as HTMLElement;
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

function getPlayerChoice(playerChoice: string) {
  return playRound(playerChoice);
}

function getComputerChoice() {
  const validOutcomes: string[] = ["ROCK", "PAPER", "SCISSORS"];
  const computerChoice =
    validOutcomes[Math.floor(Math.random() * validOutcomes.length)];
  return computerChoice;
}

function playRound(playerChoice: string) {
  const computerChoice = getComputerChoice();
  if (playerChoice === computerChoice) {
    result.textContent = `You chose ${playerChoice} and computer chose ${computerChoice}, it's a draw!`;
    draws.textContent = +draws.textContent! + 1 + "";
  } else if (
    (playerChoice === "ROCK" && computerChoice === "SCISSORS") ||
    (playerChoice === "PAPER" && computerChoice === "ROCK") ||
    (playerChoice === "SCISSORS" && computerChoice === "PAPER")
  ) {
    result!.textContent = `You chose ${playerChoice} and computer chose ${computerChoice}, you win!`;
    playerScore.textContent = +playerScore.textContent! + 1 + "";
  } else {
    result!.textContent = `You chose ${playerChoice} and computer chose ${computerChoice}, you lose!`;
    computerScore.textContent = +computerScore.textContent! + 1 + "";
  }
  evaluateScore();
}

function evaluateScore() {
  if (playerScore.textContent == "5") {
    result.textContent = `You scored ${playerScore.textContent} points and computer scored ${computerScore.textContent} points, you win!`;
    replay.style.display = "inline";
    choices.style.display = "none";
  } else if (computerScore.textContent == "5") {
    result.textContent = `You scored ${playerScore.textContent} points and computer scored ${computerScore.textContent} points, you lost!`;
    replay.style.display = "inline";
    choices.style.display = "none";
  } else {
    return;
  }
}
