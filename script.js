let gameBoard = [
  ["-", "-", "-"],
  ["-", "-", "-"],
  ["-", "-", "-"],
];
let winner = null;
let currentPlayer = "X";

const changePlayer = () => {
  if (currentPlayer == "X") currentPlayer = "O";
  else currentPlayer = "X";
};

const logGameBoard = () => {
  let board = "";
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      board += gameBoard[i][j];
    }
    board += "\n";
  }
  console.log(board);
};

const checkWinner = () => {
  let tieCouner = 0;
  for (let i = 0; i < 3; i++) {
    if (
      gameBoard[0][i] !== "-" &&
      gameBoard[0][i] == gameBoard[1][i] &&
      gameBoard[1][i] == gameBoard[2][i]
    )
      winner = gameBoard[0][i];

    if (
      gameBoard[i][1] !== "-" &&
      gameBoard[i][0] == gameBoard[i][1] &&
      gameBoard[i][1] == gameBoard[i][2]
    )
      winner = gameBoard[i][0];
    if (
      (gameBoard[1][1] !== "-" &&
        gameBoard[0][0] == gameBoard[1][1] &&
        gameBoard[1][1] == gameBoard[2][2]) ||
      (gameBoard[1][1] !== "-" &&
        gameBoard[2][0] == gameBoard[1][1] &&
        gameBoard[1][1] == gameBoard[0][2])
    )
      winner = gameBoard[1][1];

    for (let j = 0; j < 3; j++) {
      if (gameBoard[i][j] == "-") tieCouner++;
    }
  }
  if (tieCouner == 0) {
    winner = "Tie";
    console.log(winner);
    return;
  }
  if (winner) console.log(`The winner is ${currentPlayer}!`);
  else console.log("Next turn");
};

while (!winner) {
  let nextMove = prompt(`Next move for ${currentPlayer}:`);
  while (gameBoard[+nextMove[0]][+nextMove[1]] !== "-") {
    nextMove = prompt(
      `This place is already taken by ${
        gameBoard[+nextMove[0]][+nextMove[1]]
      }, choose something else:`
    );
  }
  gameBoard[+nextMove[0]][+nextMove[1]] = currentPlayer;
  logGameBoard();
  checkWinner();
  changePlayer();
}
