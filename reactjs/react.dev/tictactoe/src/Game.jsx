import { useState } from "react";
import Board from "./Board";

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[currentMove];
  const xIsNext = currentMove >= 9 ? -1 : currentMove % 2;
  const [ascending, setAscending] = useState(true);

  function calculatePosition() {
    const len = history.length;
    if (len > 1) {
      return history[len - 1].findIndex((element, index) => {
        if (element !== history[len - 2][index]) {
          return true;
        }
      });
    }
    return null;
  }

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }
  const position = calculatePosition();
  const posStr =
    position === null
      ? " "
      : " (" +
        (Math.floor(position / 3) + 1) +
        ", " +
        ((position % 3) + 1) +
        ")";

  const moves = history.map((_s, move) => {
    let description;
    const index = ascending ? move : history.length - move - 1;

    if (index > 0) {
      description = "Go to move #" + index + posStr;
    } else {
      description = "Go to game start";
    }
    return (
      <li key={index}>
        {index === currentMove ? (
          <span className="current-move">
            You are at move #{index}
            {posStr}
          </span>
        ) : (
          <button onClick={() => jumpTo(index)}>{description}</button>
        )}
      </li>
    );
  });
  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <button onClick={() => setAscending(!ascending)}>
          {!ascending ? "Descending" : "Ascending"}
        </button>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}
