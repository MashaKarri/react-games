import {
  MessageContainer,
  MessageTitle,
  MessageText,
  LoginButton,
} from "./AccessMessage.styled.js";

function AccessMessage({ onLogin }) {
  return (
    <MessageContainer>
      <MessageTitle>Games are locked!</MessageTitle>

      <MessageText>
        You need to log in to your account before you can play
      </MessageText>

      <LoginButton type="button" onClick={onLogin}>
        Log In to Play
      </LoginButton>
    </MessageContainer>
  );
}

export default AccessMessage;
