import { useState } from "react";

function Square({ value, onSquareClick, win = false }) {
  return (
    <button className={win ? "square win" : "square"} onClick={onSquareClick}>
      {value}
    </button>
  );
}
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], line: lines[i] };
    }
  }
  return null;
}

function Board({ xIsNext, squares, onPlay }) {
  const result = calculateWinner(squares);

  let status;
  if (result) {
    status = "Winner: " + result.winner;
  } else {
    if (xIsNext === 1) {
      status = "Next player: X";
    } else if (xIsNext === 0) {
      status = "Next player: O";
    } else {
      status = "Draw";
    }
  }

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }

    const nextSquares = squares.slice();
    if (xIsNext === 1) {
      nextSquares[i] = "X";
    } else if (xIsNext === 0) {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }
  const number = [0, 1, 2];
  return (
    <>
      <div className="status">{status}</div>
      {number.map((i) => {
        return (
          <div key={i} className="board-row">
            {number.map((j) => {
              return result &&
                result.line &&
                result.line.includes(i * 3 + j) ? (
                <Square
                  key={i * 3 + j}
                  value={squares[i * 3 + j]}
                  onSquareClick={() => handleClick(i * 3 + j)}
                  win={true}
                />
              ) : (
                <Square
                  key={i * 3 + j}
                  value={squares[i * 3 + j]}
                  onSquareClick={() => handleClick(i * 3 + j)}
                />
              );
            })}
          </div>
        );
      })}
    </>
  );
}

export default Board;
