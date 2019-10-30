const options = ["rock", "paper", "scissors"];
    let points = {player: 0, computer: 0};
    
    function computerPlay() {
      return options[Math.floor(Math.random() * options.length)]
    }

    function playerSelection() {
      let ans = prompt("Choose one: rock, paper, or scissors");
      return options.includes(ans.toLowerCase()) ? ans : playerSelection();
    }

    function playRound(playerChoice, computerSelection) {
      playerChoice = playerSelection();
      computerSelection = computerPlay();
      
      console.log("Player chooses " + playerChoice + " and Computer chooses " + computerSelection + "!");
      switch (playerChoice) {
        case "rock":
          if (computerSelection === "paper") {
            score("computer");
          } else if (computerSelection === "scissors") {
            score("player");
          } else {
            console.log("It's a tie! No points awarded.");
          };
          break;
        case "paper":
          if (computerSelection === "scissors") {
            score("computer");
          } else if (computerSelection === "rock") {
            score("player");
          } else {
            console.log("It's a tie! No points awarded.");
          };
          break;
        case "scissors":
          if (computerSelection === "rock") {
            score("computer");
          } else if (computerSelection === "paper") {
            score("player");
          } else {
            console.log("It's a tie! No points awarded.");
          };
          break;          
      }
    }

    function score(winner) {
      winner == "player" ? points.player++ : points.computer++;
      console.log("Player: " + points.player + "\nComputer: " + points.computer)
    }

    function game() {
      // do while score <= 5
      // offer to reset at 5 points
      do {
        playRound();
      } while (!(points.player >= 5 || points.computer >= 5))
      points.player == 5 ? console.log("Game over! Player wins!") : console.log("Game over! Computer wins!")
    }

    game();