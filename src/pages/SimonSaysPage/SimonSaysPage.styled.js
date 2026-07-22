import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.main`
  position: relative;
  max-width: 700px;
  margin: 0 auto;
  padding: 50px 20px 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  color: #000;
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
  font-size: 58px;
  font-weight: 600;
  color: #0f766e;
  margin-bottom: 12px;
`;

export const Level = styled.p`
  font-size: 25px;
  font-weight: 700;
  margin-bottom: 40px;
`;

export const Board = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 180px);
  gap: 28px;
  margin-bottom: 40px;
`;

export const ColorButton = styled.button`
  width: 180px;
  height: 180px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.2s;

  ${({ $color }) =>
    $color === "green" &&
    css`
      background: #16da4aff;
    `}

  ${({ $color }) =>
    $color === "red" &&
    css`
      background: #e62323ff;
    `}

  ${({ $color }) =>
    $color === "yellow" &&
    css`
      background: #f5cc26ff;
    `}

  ${({ $color }) =>
    $color === "blue" &&
    css`
      background: #04b0efff;
    `}

  ${({ $active }) =>
    $active &&
    css`
      transform: scale(1.08);
      box-shadow: 0 0 28px rgba(255, 255, 255, 0.9);
    `}

  &:hover:not(:disabled) {
    transform: scale(1.05);
  }

  &:disabled {
    cursor: default;
  }
`;

export const StartButton = styled.button`
  padding: 12px 36px;
  border: none;
  border-radius: 12px;
  background: #14b8a6;
  color: white;
  font-family: "Nunito", sans-serif;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: #10a291ff;
  }
`;

export const Message = styled.h2`
  margin-bottom: 35px;
  font-size: 26px;
  color: #dc0707ff;
  text-align: center;
`;
