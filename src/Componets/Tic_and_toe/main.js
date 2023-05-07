import React, { useState } from "react";
import Board from "./Board";
import Reset from "./Reset";
import Score from "./Score";

const Main = () => {
  const WIN_CONDITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const [xPlaying, setXPlaying] = useState(true);
  const [board, setBoard] = useState(Array(9).fill(null));
  const [scores, setScores] = useState({ xScore: 0, oScore: 0 });
  const [gameOver, setGameOver] = useState(false);
  // const [color, setColor] = useState([])
  const handleBoxClick = (boxIdx) => {
    // Step 1: Update the board
    const updatedBoard = board.map((value, idx) => {
      if (idx === boxIdx) {
        return xPlaying ? "X" : "O";
      } else {
        return value;
      }
    });

    setBoard(updatedBoard);

    // Step 2: Check if either player has won the game
    const winner = checkWinner(updatedBoard);

    if (winner) {
      if (winner === "O") {
        let { oScore } = scores;
        oScore += 1;
        setScores({ ...scores, oScore });
      } else {
        let { xScore } = scores;
        xScore += 1;
        setScores({ ...scores, xScore });
      }
    }

    // Step 3: Change active player
    setXPlaying(!xPlaying);
  };

  const checkWinner = (board) => {
    for (let i = 0; i < WIN_CONDITIONS.length; i++) {
      const [x, y, z] = WIN_CONDITIONS[i];

      // Iterate through win conditions and check if either player satisfies them
      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        const u = [x, y, z];

        u.forEach((z) => {
          document.getElementById(z).style.background = "aqua";
        });

        setGameOver(true);

        return board[x];
      }
    }
  };

  const ResectGame = () => {
    setGameOver(false);
    for (let i = 0; i <= 8; i++) {
      document.getElementById(i).style.backgroundColor = "white";
    }
    setBoard(Array(9).fill(null));
  };
  return (
    <>

      <Score scores={scores} xPlaying={xPlaying} />
      <Board
        board={board}
        onClick={gameOver ? ResectGame : handleBoxClick}
        ResectGame={ResectGame}
      />
      <Reset ResectGame={ResectGame} board={board} />
    </>
  );
};

export default Main;
