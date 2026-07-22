import { useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoSparklesOutline } from "react-icons/io5";
import { PiSnowflakeThin } from "react-icons/pi";
import { GiFlame } from "react-icons/gi";

import {
  Container,
  BackLink,
  Title,
  Text,
  Input,
  Button,
  Result,
  Attempts,
} from "./GuessNumberPage.styled.js";

function GuessNumberPage() {
  const [randomNumber, setRandomNumber] = useState(
    Math.floor(Math.random() * 100) + 1,
  );
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");
  const [attempts, setAttempts] = useState(0);

  const checkNumber = () => {
    if (!guess) return;

    const number = Number(guess);

    setAttempts((prev) => prev + 1);

    if (number === randomNumber) {
      setMessage(
        <>
          You are correct! <IoSparklesOutline />
        </>,
      );
    } else if (number < randomNumber) {
      setMessage(
        <>
          The number is too low! <PiSnowflakeThin />
        </>,
      );
    } else {
      setMessage(
        <>
          The number is too high! <GiFlame />
        </>,
      );
    }

    setGuess("");
  };

  const restartGame = () => {
    setRandomNumber(Math.floor(Math.random() * 100) + 1);
    setGuess("");
    setMessage("");
    setAttempts(0);
  };

  return (
    <Container>
      <BackLink to="/games">
        <IoIosArrowRoundBack />
        Games
      </BackLink>

      <Title>Guess the Number</Title>

      <Text>
        The computer has chosen a number between <b>1</b> and <b>100</b>. <br />
        Can you guess it?
      </Text>

      <Input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        placeholder="Enter a number"
      />

      <Button onClick={checkNumber}>Guess</Button>

      {message && <Result>{message}</Result>}

      <Attempts>Attempts: {attempts}</Attempts>

      <Button onClick={restartGame}>New Game</Button>
    </Container>
  );
}

export default GuessNumberPage;
