function getComputerChoice() {
  let choice = ["rock", "paper", "scissors"];
  let result = Math.floor(Math.random() * choice.length);

  return choice[result];
}

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return "Computer loses!";
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    return "Player loses!";
  } else {
    return "It's a draw!";
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt(
      "Select: rock, paper, or scissors"
    ).toLowerCase();
    const computerSelection = getComputerChoice();

    console.log(`Player's selection is: ${playerSelection}`);
    console.log(`Computer's selection is: ${computerSelection}`);

    const roundResult = playRound(playerSelection, computerSelection);
    console.log(roundResult);

    if (roundResult === "Computer loses!") {
      console.log("Player gets 1 point!");
      playerScore++;
    } else if (roundResult === "Player loses!") {
      console.log("Computer gets 1 point!");
      computerScore++;
    } else {
      console.log("No one gets a point.");
    }
  }

  console.log(
    `Final score: Player - ${playerScore}, Computer - ${computerScore}`
  );

  if (playerScore > computerScore) {
    console.log("Player wins the game!");
  } else if (playerScore < computerScore) {
    console.log("Computer wins the game!");
  } else {
    console.log("It's a tie!");
  }
}

game();
