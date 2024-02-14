function getComputerChoice(): string {
  const allOutcomes: string[] = ["ROCK", "PAPER", "SCISSORS"];
  const outcome = allOutcomes[Math.floor(Math.random() * allOutcomes.length)];
  return outcome!;
}

function playGame() {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Rock, Paper or Scissors?", "");
    if (playerSelection == null) {
      return alert("Cancelled!");
    } else if (playerSelection == "") {
      return alert("Field cannot be empty!");
    } else {
      const computerSelection = getComputerChoice();
      function rockPaperScissors(playerSelection: string, computerSelection: string): string {
        if ((playerSelection == "PAPER" && computerSelection == "ROCK") || (playerSelection == "SCISSORS" && computerSelection == "PAPER") || (playerSelection == "ROCK" && computerSelection == "SCISSORS")) {
          playerScore += 1;
          return `You chose ${playerSelection} and Computer chose ${computerSelection}, you win!`;
        } else if (playerSelection == computerSelection) {
          return `You chose ${playerSelection} and Computer chose ${computerSelection}, its a draw!`;
        } else {
          computerScore += 1;
          return `You chose ${playerSelection} and Computer chose ${computerSelection}, computer wins!`;
        }
      }
      console.log(rockPaperScissors(playerSelection.toUpperCase(), computerSelection));
    }
  }
  if (playerScore > computerScore) {
    console.log(`You win with a score of ${playerScore}`);
  } else if (playerScore == computerScore) {
    console.log("It's a draw!");
  } else {
    console.log(`Computer wins with a score of ${computerScore}`);
  }
}

playGame();
