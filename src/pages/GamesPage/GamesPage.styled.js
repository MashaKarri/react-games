import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 35px 20px;
  font-family: "Nunito", sans-serif;
`;

export const Title = styled.h1`
  text-align: center;
  font-family: "Geomini", sans-serif;
  font-size: 48px;
  font-weight: 600;
  color: #c026d3;
  margin-bottom: 50px;
`;

export const GamesList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 300px);
  justify-content: center;
  gap: 30px;
  list-style: none;
  padding: 0;
`;

export const GameItem = styled.li`
  border-radius: 18px;
  padding: 35px 20px;
  text-align: center;
  color: white;
  transition: 0.3s;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.18);
  }

  &:nth-child(1) {
    background: linear-gradient(135deg, #b43cff, #8b2cf5);
  }

  &:nth-child(2) {
    background: linear-gradient(135deg, #43c7ff, #2b95ff);
  }

  &:nth-child(3) {
    background: linear-gradient(135deg, #31d16b, #18a84f);
  }

  &:nth-child(4) {
    background: linear-gradient(135deg, #ff9b2f, #ff6b00);
  }

  &:nth-child(5) {
    background: linear-gradient(135deg, #ff4d6d, #d90429);
  }

  &:nth-child(6) {
    background: linear-gradient(135deg, #14b8a6, #0f766e);
  }
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    font-size: 60px;
    color: white;
  }
`;

export const GameTitle = styled.h2`
  margin: 20px 0;
  font-family: "Geomini", sans-serif;
  font-size: 22px;
  font-weight: 500;
  color: white;
`;

export const GameLink = styled(Link)`
  display: inline-block;
  padding: 10px 28px;
  margin-top: 5px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  text-decoration: none;
  border-radius: 999px;
  font-size: 17px;
  font-weight: 600;
  transition: 0.3s;

  &:hover {
    background: white;
    color: #000;
  }
`;
