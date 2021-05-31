function canPlace(board, row, col) {
  for (let i = 0; i < board.length; i++) {
    if (board[row][i] === "R") {
      return false;
    }
    if (board[i][col] === "R") {
      return false;
    }
  }

  let j;
  for (i = row, j = col; i >= 0 && j >= 0; i--, j--) {
    if (board[i][j] === "R") {
      return false;
    }
  }

  for (i = row, j = col; i < board.length && j < board.length; i++, j++) {
    if (board[i][j] === "R") {
      return false;
    }
  }

  for (i = row, j = col; i >= 0 && j < board.length; i--, j++) {
    if (board[i][j] === "R") {
      return false;
    }
  }

  for (i = row, j = col; i < board.length && j >= 0; i++, j--) {
    if (board[i][j] === "R") {
      return false;
    }
  }

  return true;
}

function findFirst(board, col) {
  if (col === board.length) {
    console.log(`Primeira Solução`);
    console.table(board);
    return process.exit(22);
  }

  for (let i = 0; i < board.length; i++) {
    if (canPlace(board, i, col)) {
      board[i][col] = "R";
      findFirst(board, col + 1);
      board[i][col] = " ";
    }
  }
}

let counter = 0;
function findAll(board, col) {
  if (col === board.length) {
    counter++;
    console.log(`Solução ${counter}`);
    console.table(board);
    return;
  }

  for (let i = 0; i < board.length; i++) {
    if (canPlace(board, i, col)) {
      board[i][col] = "R";
      findAll(board, col + 1);
      board[i][col] = " ";
    }
  }
}

function start() {
  let n = process.argv[2];
  let mode = process.argv[3] || "TODOS";
  let board = [];
  for (let i = 0; i < n; i++) {
    board.push(Array.from(" ".repeat(n)));
  }
  if (mode === "PRIMEIRA") {
    findFirst(board, 0);
  } else {
    findAll(board, 0);
  }
}
start();

// RODAR COM O COMANDO ABAIXO
// node NRainhas.js <Valor de N> <PRIMEIRA(acha apenas primeira resposta, caso contrario, imprime todas as possibilidades)>

// Exemplo
// node NRainhas.js 4 TODOS
