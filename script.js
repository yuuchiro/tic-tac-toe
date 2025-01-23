let gameBoard = [
  ["-", "-", "-"],
  ["-", "-", "-"],
  ["-", "-", "-"],
];
let winner = null;
let currentPlayer = "X";
let moveCouner = 0;

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

const checkColumn = (i) =>
  gameBoard[0][i] !== "-" &&
  gameBoard[0][i] == gameBoard[1][i] &&
  gameBoard[1][i] == gameBoard[2][i];

const checkRow = (i) =>
  gameBoard[i][1] !== "-" &&
  gameBoard[i][0] == gameBoard[i][1] &&
  gameBoard[i][1] == gameBoard[i][2];

const checkDiagonals = () =>
  (gameBoard[1][1] !== "-" &&
    gameBoard[0][0] == gameBoard[1][1] &&
    gameBoard[1][1] == gameBoard[2][2]) ||
  (gameBoard[1][1] !== "-" &&
    gameBoard[2][0] == gameBoard[1][1] &&
    gameBoard[1][1] == gameBoard[0][2]);

const checkWinner = () => {
  for (let i = 0; i < 3; i++) {
    if (checkColumn(i)) winner = currentPlayer;

    if (checkRow(i)) winner = currentPlayer;
  }

  if (checkDiagonals()) winner = currentPlayer;

  //checking for tie
  if (moveCouner == 9 && !winner) {
    winner = "Tie";
    console.log(winner);
    return;
  }
  if (winner) console.log(`The winner is ${winner}!`);
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
  moveCouner++;
  logGameBoard();
  checkWinner();
  changePlayer();
}
