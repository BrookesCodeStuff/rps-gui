const options = ["rock", "paper", "scissors"];
let points = {player: 0, computer: 0};
let playerScore = document.getElementById('player-score');
let computerScore = document.getElementById('computer-score');

function init() {
  playerScore.textContent = `${points.player}`
  computerScore.textContent = `${points.computer}`
}

function computerPlay() {
  return options[Math.floor(Math.random() * options.length)]
}

//function playerSelection() {
//  let ans = prompt("Choose one: rock, paper, or scissors");
// return options.includes(ans.toLowerCase()) ? ans : playerSelection();
//}

function playRound() {
  playerChoice = event.target.id;
  let computerSelection = computerPlay();
  if (playerChoice === computerSelection) {
    score("tie");
  } else if ((playerChoice === "rock" && computerSelection === "scissors") || (playerChoice === "paper" && computerSelection === "rock") || (playerChoice === "scissors" && computerSelection === "paper")) {
    score("player");
  } else {
    score("computer");
  }
}

function score(winner) {
  winner == "player" ? points.player++ : points.computer++;
  playerScore.textContent = `${points.player}`
  computerScore.textContent = `${points.computer}`
}

function game() {
  // do while score <= 5
  // offer to reset at 5 points
  do {
    playRound();
  } while (!(points.player >= 5 || points.computer >= 5))
  points.player == 5 ? console.log("Game over! Player wins!") : console.log("Game over! Computer wins!")
}

init();