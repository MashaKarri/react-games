import {
  Container,
  Title,
  Text,
  Subtitle,
  List,
  Item,
  Button,
} from "./HomePage.styled.js";

function HomePage() {
  return (
    <Container>
      <Title>Mini Games</Title>

      <Text>
        Welcome to Mini Games! This project was created using React and React
        Router
      </Text>

      <Subtitle>Games Included</Subtitle>

      <List>
        <Item>Guess Number</Item>
        <Item>Tic Tac Toe</Item>
        <Item>Memory Game</Item>
        <Item>Rock Paper Scissors</Item>
        <Item>Hangman</Item>
        <Item>Simon Says</Item>
      </List>

      <Button to="/games">Go to Games</Button>
    </Container>
  );
}

export default HomePage;
