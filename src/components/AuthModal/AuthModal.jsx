import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { fakeAuth } from "../../auth/fakeAuth.js";

import {
  Overlay,
  Modal,
  CloseButton,
  Title,
  Form,
  Label,
  Input,
  SubmitButton,
  ErrorMessage,
} from "./AuthModal.styled.js";

function AuthModal({ isOpen, onClose, onAuth }) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      setLogin("");
      setPassword("");
      setError("");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");

    try {
      const user = fakeAuth.signIn(login.trim(), password);
      onAuth(user);
      onClose();
    } catch {
      setError("Incorrect login or password");
    }
  };

  return createPortal(
    <Overlay onClick={onClose}>
      <Modal onClick={(event) => event.stopPropagation()}>
        <CloseButton type="button" onClick={onClose} aria-label="Close">
          ×
        </CloseButton>

        <Title>Log In</Title>

        <Form onSubmit={handleSubmit}>
          <Label>
            Login
            <Input
              type="text"
              value={login}
              onChange={(event) => setLogin(event.target.value)}
              placeholder="Enter your login"
              autoComplete="username"
              required
            />
          </Label>

          <Label>
            Password
            <Input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter your password"
              autoComplete="current-password"
              required
            />
          </Label>

          {error && <ErrorMessage role="alert">{error}</ErrorMessage>}

          <SubmitButton type="submit">Log In</SubmitButton>
        </Form>
      </Modal>
    </Overlay>,
    document.body,
  );
}

export default AuthModal;
