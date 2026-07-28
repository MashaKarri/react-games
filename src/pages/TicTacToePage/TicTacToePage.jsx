import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { FaRegCircle } from "react-icons/fa6";

import {
  Container,
  BackLink,
  Title,
  Status,
  Board,
  Cell,
  RestartButton,
} from "./TicTacToePage.styled.js";

function TicTacToePage() {
  const navigate = useNavigate();

  const [board, setBoard] = useState(Array(9).fill(""));

  const winner = calculateWinner(board);
  const isTie = !winner && board.every((cell) => cell !== "");

  const handleClick = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = "X";

    if (calculateWinner(newBoard)) {
      setBoard(newBoard);
      return;
    }

    const emptyCells = newBoard
      .map((cell, index) => (cell === "" ? index : null))
      .filter((cell) => cell !== null);

    if (emptyCells.length > 0) {
      const randomIndex =
        emptyCells[Math.floor(Math.random() * emptyCells.length)];

      newBoard[randomIndex] = "O";
    }

    setBoard(newBoard);
  };

  const restartGame = () => {
    setBoard(Array(9).fill(""));
  };

  return (
    <Container>
      <BackLink onClick={() => navigate(-1)}>
        <IoIosArrowRoundBack />
        Games
      </BackLink>

      <Title>Tic Tac Toe</Title>

      <Status>
        {winner
          ? winner === "X"
            ? "You Win!"
            : "Computer Wins!"
          : isTie
            ? "Tie!"
            : "Your Turn"}
      </Status>

      <Board>
        {board.map((cell, index) => (
          <Cell key={index} onClick={() => handleClick(index)}>
            {cell === "X" ? <RxCross1 /> : cell === "O" ? <FaRegCircle /> : ""}
          </Cell>
        ))}
      </Board>

      <RestartButton onClick={restartGame}>New Game</RestartButton>
    </Container>
  );
}

function calculateWinner(board) {
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

  for (const [a, b, c] of lines) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }

  return null;
}

export default TicTacToePage;
