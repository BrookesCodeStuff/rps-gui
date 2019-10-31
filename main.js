const options = ["rock", "paper", "scissors"];
let points = {};
let playerScore = document.getElementById('player-score');
let computerScore = document.getElementById('computer-score');
let round = document.getElementById('round');

function init() {
  points.player = 0;
  points.computer = 0;
  playerScore.textContent = `${points.player}`;
  computerScore.textContent = `${points.computer}`;
  round.textContent = "Choose Your Weapon";
  document.getElementById('play-again').setAttribute('hidden', '');
  document.querySelectorAll('input').forEach((item) => item.removeAttribute('disabled'));
}

function computerPlay() {
  return options[Math.floor(Math.random() * options.length)]
}

function playRound() {
  playerChoice = event.target.id;
  let computerSelection = computerPlay();
  if (playerChoice === computerSelection) {
    round.textContent = "Player and Computer choose " + playerChoice +  ". It's a tie! No points!";
  } else if ((playerChoice === "rock" && computerSelection === "scissors") || (playerChoice === "paper" && computerSelection === "rock") || (playerChoice === "scissors" && computerSelection === "paper")) {
    round.textContent = "Player chooses " + playerChoice + ". Computer chooses " + computerSelection + ". Player wins!";
    score("player");
  } else {
    round.textContent = "Player chooses " + playerChoice + ". Computer chooses " + computerSelection + ". Computer wins!";
    score("computer");
  }
}

function score(winner) {
  winner == "player" ? points.player++ : points.computer++;
  playerScore.textContent = `${points.player}`;
  computerScore.textContent = `${points.computer}`;
  if (points.player >= 5 || points.computer >= 5) {
    points.player == 5 ? round.textContent = "Game over. Player wins!" : round.textContent = "Game over. Computer wins!";
    document.getElementById('play-again').removeAttribute('hidden');
    document.querySelectorAll('input').forEach((item) => item.setAttribute('disabled', 'true'));
  }
}

function game() {
  // do while score <= 5
  // offer to reset at 5 points
  do {
    playRound();
  } while (!(points.player >= 5 || points.computer >= 5))
  points.player == 5 ? console.log("Game over. Player wins!") : console.log("Game over. Computer wins!")
}

init();