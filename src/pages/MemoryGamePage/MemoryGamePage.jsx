import { useEffect, useState } from "react";

import { IoIosArrowRoundBack } from "react-icons/io";
import { BsPatchQuestion } from "react-icons/bs";

import bunny from "../../images/memory-game/bunny.jpg";
import capybara from "../../images/memory-game/capybara.jpg";
import cat from "../../images/memory-game/cat.jpg";
import dog from "../../images/memory-game/dog.jpg";
import duck from "../../images/memory-game/duck.jpg";
import fennec from "../../images/memory-game/fennec.jpg";
import hamster from "../../images/memory-game/hamster.jpg";
import raccoon from "../../images/memory-game/raccoon.jpg";

import {
  Container,
  Title,
  Info,
  Grid,
  Card,
  RestartButton,
  WinText,
  BackLink,
} from "./MemoryGamePage.styled.js";

const animals = [
  { id: 1, name: "Bunny", image: bunny },
  { id: 2, name: "Capybara", image: capybara },
  { id: 3, name: "Cat", image: cat },
  { id: 4, name: "Dog", image: dog },
  { id: 5, name: "Duck", image: duck },
  { id: 6, name: "Fennec", image: fennec },
  { id: 7, name: "Hamster", image: hamster },
  { id: 8, name: "Raccoon", image: raccoon },
];

const shuffleCards = () => {
  return [...animals, ...animals]
    .map((card, index) => ({
      ...card,
      uniqueId: index,
      flipped: false,
      matched: false,
    }))
    .sort(() => Math.random() - 0.5);
};

function MemoryGamePage() {
  const [cards, setCards] = useState(shuffleCards());
  const [selected, setSelected] = useState([]);
  const [moves, setMoves] = useState(0);

  const restartGame = () => {
    setCards(shuffleCards());
    setSelected([]);
    setMoves(0);
  };

  const handleClick = (card) => {
    if (card.flipped || card.matched || selected.length === 2) {
      return;
    }

    setCards((prev) =>
      prev.map((c) =>
        c.uniqueId === card.uniqueId ? { ...c, flipped: true } : c,
      ),
    );

    setSelected((prev) => [...prev, card]);
  };

  useEffect(() => {
    if (selected.length !== 2) return;

    setMoves((prev) => prev + 1);

    const [first, second] = selected;

    if (first.name === second.name) {
      setCards((prev) =>
        prev.map((card) =>
          card.name === first.name ? { ...card, matched: true } : card,
        ),
      );

      setSelected([]);
    } else {
      const timer = setTimeout(() => {
        setCards((prev) =>
          prev.map((card) =>
            card.uniqueId === first.uniqueId ||
            card.uniqueId === second.uniqueId
              ? { ...card, flipped: false }
              : card,
          ),
        );

        setSelected([]);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [selected]);

  const isWin = cards.every((card) => card.matched);

  return (
    <Container>
      <BackLink to="/games">
        <IoIosArrowRoundBack />
        Games
      </BackLink>

      <Title>Memory Game</Title>

      <Info>Moves: {moves}</Info>

      {isWin && <WinText>You Win!</WinText>}

      <Grid>
        {cards.map((card) => (
          <Card key={card.uniqueId} onClick={() => handleClick(card)}>
            {card.flipped || card.matched ? (
              <img src={card.image} alt={card.name} />
            ) : (
              <BsPatchQuestion />
            )}
          </Card>
        ))}
      </Grid>

      <RestartButton onClick={restartGame}>Restart Game</RestartButton>
    </Container>
  );
}

export default MemoryGamePage;
