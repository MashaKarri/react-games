import { Container, Image, Title, Text, Button } from "./NotFound.styled.js";

import notFoundImg from "../../images/not-found.jpg";

function NotFound() {
  return (
    <Container>
      <Title>404</Title>

      <Text>Oops! The page you are looking for doesn't exist</Text>

      <Image src={notFoundImg} alt="404 Not Found" />

      <Button to="/">Back to Home</Button>
    </Container>
  );
}

export default NotFound;
