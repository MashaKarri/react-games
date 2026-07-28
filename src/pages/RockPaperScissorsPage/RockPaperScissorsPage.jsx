import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import {
  FaRegHandRock,
  FaRegHandPaper,
  FaRegHandScissors,
} from "react-icons/fa";

import {
  Container,
  BackLink,
  Title,
  Choices,
  ChoiceButton,
  Result,
  Score,
  RestartButton,
} from "./RockPaperScissorsPage.styled.js";

const options = [
  {
    name: "Rock",
    icon: <FaRegHandRock />,
  },
  {
    name: "Paper",
    icon: <FaRegHandPaper />,
  },
  {
    name: "Scissors",
    icon: <FaRegHandScissors />,
  },
];

function RockPaperScissorsPage() {
  const navigate = useNavigate();

  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState("");
  const [score, setScore] = useState({
    player: 0,
    computer: 0,
  });

  const playGame = (choice) => {
    const computer = options[Math.floor(Math.random() * options.length)];

    setPlayerChoice(choice);
    setComputerChoice(computer);

    if (choice.name === computer.name) {
      setResult("It is a tie!");
      return;
    }

    const playerWins =
      (choice.name === "Rock" && computer.name === "Scissors") ||
      (choice.name === "Paper" && computer.name === "Rock") ||
      (choice.name === "Scissors" && computer.name === "Paper");

    if (playerWins) {
      setResult("You Win!");
      setScore((prev) => ({
        ...prev,
        player: prev.player + 1,
      }));
    } else {
      setResult("Computer Wins!");
      setScore((prev) => ({
        ...prev,
        computer: prev.computer + 1,
      }));
    }
  };

  const restartGame = () => {
    setPlayerChoice(null);
    setComputerChoice(null);
    setResult("");
    setScore({
      player: 0,
      computer: 0,
    });
  };

  return (
    <Container>
      <BackLink onClick={() => navigate(-1)}>
        <IoIosArrowRoundBack />
        Games
      </BackLink>

      <Title>Rock Paper Scissors</Title>

      <Choices>
        {options.map((option) => (
          <ChoiceButton key={option.name} onClick={() => playGame(option)}>
            {option.icon}
            <span>{option.name}</span>
          </ChoiceButton>
        ))}
      </Choices>

      {playerChoice && (
        <Result>
          <p>
            <b>You:</b> {playerChoice.name}
          </p>

          <p>
            <b>Computer:</b> {computerChoice.name}
          </p>

          <h2>{result}</h2>
        </Result>
      )}

      <Score>
        You: {score.player} | Computer: {score.computer}
      </Score>

      <RestartButton onClick={restartGame}>New Game</RestartButton>
    </Container>
  );
}

export default RockPaperScissorsPage;
