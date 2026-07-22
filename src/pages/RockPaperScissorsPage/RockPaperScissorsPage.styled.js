import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.main`
  position: relative;
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 20px;
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
  font-size: 46px;
  color: #ff6b00;
  margin: 50px 0;
`;

export const Choices = styled.div`
  display: flex;
  justify-content: center;
  gap: 25px;
  flex-wrap: wrap;
`;

export const ChoiceButton = styled.button`
  width: 160px;
  height: 160px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  background: linear-gradient(135deg, #ffb347, #ff8c00);
  color: white;
  transition: 0.25s;
  box-shadow: 0 8px 18px rgba(255, 140, 0, 0.3);

  &:hover {
    box-shadow: 0 12px 20px rgba(255, 140, 0, 0.45);
  }

  svg {
    font-size: 60px;
  }

  span {
    font-size: 22px;
    font-weight: 500;
  }
`;

export const Result = styled.div`
  margin-top: 45px;

  p {
    font-size: 22px;
    margin-bottom: 10px;
  }

  h2 {
    margin-top: 20px;
    color: #ffa02cff;
    font-size: 34px;
    font-family: "Geomini", sans-serif;
  }
`;

export const Score = styled.h3`
  margin-top: 35px;
  font-size: 28px;
  color: #944c00ff;
  font-weight: 600;
`;

export const RestartButton = styled.button`
  margin-top: 20px;
  padding: 12px 30px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background: transparent;
  border: solid 1px #ffa02cff;
  color: #000000ff;
  font-size: 20px;
  font-weight: 600;
  font-family: "Nunito", sans-serif;
  transition: 0.25s;

  &:hover {
    transform: translateY(-2px);
  }
`;
