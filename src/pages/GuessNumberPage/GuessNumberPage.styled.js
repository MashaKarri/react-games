import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.main`
  position: relative;
  max-width: 700px;
  margin: 0 auto;
  padding: 60px 20px;
  text-align: center;
  font-family: "Nunito", sans-serif;
`;

export const BackLink = styled(Link)`
  position: absolute;
  top: 30px;
  left: 30px;
  display: flex;
  align-items: center;
  gap: 6px;
  text-decoration: none;
  color: #000000ff;
  font-size: 20px;
  font-weight: 600;
  transition: 0.2s;

  &:hover {
    transform: translateX(-3px);
  }

  svg {
    font-size: 38px;
  }
`;

export const Title = styled.h1`
  font-family: "Geomini", sans-serif;
  color: #8b5cf6;
  font-size: 48px;
  font-weight: 600;
  margin-bottom: 25px;
`;

export const Text = styled.p`
  font-size: 22px;
  margin-bottom: 30px;
`;

export const Input = styled.input`
  width: 250px;
  padding: 14px;
  border: 2px solid #c4b5fd;
  border-radius: 8px;
  font-family: "Nunito", sans-serif;
  font-size: 20px;
  text-align: center;
  outline: none;

  &:focus {
    border-color: #8b5cf6;
  }
`;

export const Button = styled.button`
  display: block;
  margin: 25px auto;
  padding: 12px 30px;
  border: none;
  border-radius: 8px;
  background: linear-gradient(135deg, #c084fc, #8b5cf6);
  color: white;
  font-family: "Nunito", sans-serif;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  transition: 0.25s;

  &:hover {
    box-shadow: 0 8px 20px rgba(139, 92, 246, 0.35);
  }
`;

export const Result = styled.h2`
  margin-top: 25px;
  color: #6d28d9;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  svg {
    font-size: 30px;
  }
`;

export const Attempts = styled.p`
  margin-top: 15px;
  font-size: 20px;
`;
