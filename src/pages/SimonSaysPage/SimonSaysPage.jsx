import { useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";

import {
  Container,
  BackLink,
  Title,
  Level,
  Board,
  ColorButton,
  StartButton,
  Message,
} from "./SimonSaysPage.styled.js";

const colors = ["green", "red", "yellow", "blue"];

function SimonSaysPage() {
  const [sequence, setSequence] = useState([]);
  const [playerSequence, setPlayerSequence] = useState([]);
  const [activeColor, setActiveColor] = useState(null);
  const [level, setLevel] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [canClick, setCanClick] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const flashColor = (color, delay) => {
    setTimeout(() => {
      setActiveColor(color);

      setTimeout(() => {
        setActiveColor(null);
      }, 400);
    }, delay);
  };

  const playSequence = (sequenceToPlay) => {
    setCanClick(false);

    sequenceToPlay.forEach((color, index) => {
      flashColor(color, index * 700);
    });

    setTimeout(() => {
      setCanClick(true);
    }, sequenceToPlay.length * 700);
  };

  const nextRound = (currentSequence) => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    const newSequence = [...currentSequence, randomColor];

    setSequence(newSequence);
    setPlayerSequence([]);
    setLevel(newSequence.length);

    playSequence(newSequence);
  };

  const startGame = () => {
    setSequence([]);
    setPlayerSequence([]);
    setLevel(0);
    setGameOver(false);
    setIsPlaying(true);

    nextRound([]);
  };

  const handleClick = (color) => {
    if (!canClick || gameOver) return;

    setActiveColor(color);

    setTimeout(() => {
      setActiveColor(null);
    }, 200);

    const newPlayerSequence = [...playerSequence, color];

    setPlayerSequence(newPlayerSequence);

    const currentIndex = newPlayerSequence.length - 1;

    if (newPlayerSequence[currentIndex] !== sequence[currentIndex]) {
      setGameOver(true);
      setIsPlaying(false);
      setCanClick(false);
      return;
    }

    if (newPlayerSequence.length === sequence.length) {
      setCanClick(false);

      setTimeout(() => {
        nextRound(sequence);
      }, 1000);
    }
  };

  return (
    <Container>
      <BackLink to="/games">
        <IoIosArrowRoundBack />
        Games
      </BackLink>

      <Title>Simon Says</Title>

      <Level>Level: {level}</Level>

      <Board>
        {colors.map((color) => (
          <ColorButton
            key={color}
            $color={color}
            $active={activeColor === color}
            disabled={!canClick}
            onClick={() => handleClick(color)}
          />
        ))}
      </Board>

      {!isPlaying && !gameOver && (
        <StartButton onClick={startGame}>Start Game</StartButton>
      )}

      {gameOver && (
        <>
          <Message>Game Over! You reached level {level}</Message>

          <StartButton onClick={startGame}>Play Again</StartButton>
        </>
      )}
    </Container>
  );
}

export default SimonSaysPage;
