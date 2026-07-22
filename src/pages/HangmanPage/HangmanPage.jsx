import { useEffect, useState } from "react";
import words from "../../data/words";
import { IoIosArrowRoundBack } from "react-icons/io";

import {
  Container,
  BackLink,
  Title,
  Word,
  Letter,
  Keyboard,
  Key,
  WrongLetters,
  Message,
  RestartButton,
  Hangman,
  Head,
  Body,
  LeftArm,
  RightArm,
  LeftLeg,
  RightLeg,
  Gallows,
  Pole,
  Beam,
  Rope,
  Base,
} from "./HangmanPage.styled.js";

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

function HangmanPage() {
  const [word, setWord] = useState("");
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);

  const startNewGame = () => {
    const randomWord = words[Math.floor(Math.random() * words.length)];

    setWord(randomWord.toLowerCase());
    setGuessedLetters([]);
    setWrongLetters([]);
  };

  useEffect(() => {
    startNewGame();
  }, []);

  const guessLetter = (letter) => {
    if (
      guessedLetters.includes(letter) ||
      wrongLetters.includes(letter) ||
      isWinner ||
      isLoser
    ) {
      return;
    }

    if (word.includes(letter)) {
      setGuessedLetters((prev) => [...prev, letter]);
    } else {
      setWrongLetters((prev) => [...prev, letter]);
    }
  };

  const isWinner =
    word && word.split("").every((letter) => guessedLetters.includes(letter));

  const isLoser = wrongLetters.length >= 6;

  return (
    <Container>
      <BackLink to="/games">
        <IoIosArrowRoundBack />
        Games
      </BackLink>

      <Title>Hangman</Title>

      <Hangman>
        <Gallows>
          <Pole />
          <Beam />
          <Rope />
          <Base />

          {wrongLetters.length >= 1 && <Head />}
          {wrongLetters.length >= 2 && <Body />}
          {wrongLetters.length >= 3 && <LeftArm />}
          {wrongLetters.length >= 4 && <RightArm />}
          {wrongLetters.length >= 5 && <LeftLeg />}
          {wrongLetters.length >= 6 && <RightLeg />}
        </Gallows>
      </Hangman>

      <Word>
        {word.split("").map((letter, index) => (
          <Letter key={index}>
            {guessedLetters.includes(letter) || isLoser
              ? letter.toUpperCase()
              : ""}
          </Letter>
        ))}
      </Word>

      <WrongLetters>
        Wrong letters:{" "}
        {wrongLetters.length ? wrongLetters.join(", ").toUpperCase() : "None"}
      </WrongLetters>

      <Keyboard>
        {alphabet.map((letter) => (
          <Key
            key={letter}
            disabled={
              guessedLetters.includes(letter) ||
              wrongLetters.includes(letter) ||
              isWinner ||
              isLoser
            }
            onClick={() => guessLetter(letter)}
          >
            {letter.toUpperCase()}
          </Key>
        ))}
      </Keyboard>

      {isWinner && (
        <>
          <Message $win>You won!</Message>
          <RestartButton onClick={startNewGame}>Play Again</RestartButton>
        </>
      )}

      {isLoser && (
        <>
          <Message $lose>
            You lost! The word was <strong>{word.toUpperCase()}</strong>
          </Message>

          <RestartButton onClick={startNewGame}>Try Again</RestartButton>
        </>
      )}
    </Container>
  );
}

export default HangmanPage;
