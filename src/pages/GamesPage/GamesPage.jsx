import { GoNumber } from "react-icons/go";
import { TbTicTac } from "react-icons/tb";
import { LuBrain } from "react-icons/lu";
import { FaRegHandRock } from "react-icons/fa";
import { BsAlphabetUppercase } from "react-icons/bs";
import { BsGrid3X3GapFill } from "react-icons/bs";

import {
  Container,
  Title,
  GamesList,
  GameItem,
  GameTitle,
  GameLink,
  Icon,
} from "./GamesPage.styled.js";

function GamesPage() {
  return (
    <Container>
      <Title>Choose a Game</Title>

      <GamesList>
        <GameItem>
          <Icon>
            <GoNumber />
          </Icon>
          <GameTitle>Guess Number</GameTitle>
          <GameLink to="/games/guess-number">Play</GameLink>
        </GameItem>

        <GameItem>
          <Icon>
            <TbTicTac />
          </Icon>
          <GameTitle>Tic Tac Toe</GameTitle>
          <GameLink to="/games/tic-tac-toe">Play</GameLink>
        </GameItem>

        <GameItem>
          <Icon>
            <LuBrain />
          </Icon>
          <GameTitle>Memory Game</GameTitle>
          <GameLink to="/games/memory-game">Play</GameLink>
        </GameItem>

        <GameItem>
          <Icon>
            <FaRegHandRock />
          </Icon>
          <GameTitle>Rock Paper Scissors</GameTitle>
          <GameLink to="/games/rock-paper-scissors">Play</GameLink>
        </GameItem>

        <GameItem>
          <Icon>
            <BsAlphabetUppercase />
          </Icon>
          <GameTitle>Hangman</GameTitle>
          <GameLink to="/games/hangman">Play</GameLink>
        </GameItem>

        <GameItem>
          <Icon>
            <BsGrid3X3GapFill />
          </Icon>
          <GameTitle>Simon Says</GameTitle>
          <GameLink to="/games/simon-says">Play</GameLink>
        </GameItem>
      </GamesList>
    </Container>
  );
}

export default GamesPage;
