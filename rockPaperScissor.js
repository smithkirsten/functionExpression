function rockPaperScissors() {

  const playerOptions = ["rock", "paper", "scissor"];

  //randomly assigns a move to player1
  let index = Math.floor(Math.random() * 3);
  const player1 = playerOptions[index];

  //randomly assigns a move to player 2
  index = Math.floor(Math.random() * 3);
  const player2 = playerOptions[index];

  //print moves
  const printPlay = (player1, player2) => console.log(`Player 1: ${player1}\nPlayer 2: ${player2}`);

  if (player1 === player2) {
    printPlay(player1, player2);
    console.log("DRAW! Play again!\n");
    return true;
  } else if (player1 === "rock") {
      if (player2 === "paper") {
        printPlay(player1, player2);
        console.log("Player 2 Wins!\n");
        return false;
      } else {
        printPlay(player1, player2);
        console.log("Player 1 Wins!\n");
        return false;
      }
  } else if (player1 === "scissor") {
    if (player2 === "rock") {
      printPlay(player1, player2);
      console.log ("Player 2 Wins!\n");
      return false;
    } else if (player2 === "paper") {
      printPlay(player1, player2);
      console.log("Player 1 Wins!\n");
      return false;
    }
  }
}

//run the function. If it returns true, continue to run the function until it returns false
//if it returns false, break the loop and declare the winner
do {
  console.log(rockPaperScissors()); //console log added for debugging purposes
} while (rockPaperScissors());
