import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.main`
  position: relative;
  max-width: 700px;
  margin: auto;
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
  font-size: 42px;
  color: #2b95ff;
  margin-bottom: 20px;
`;

export const Status = styled.h2`
  font-size: 24px;
  margin-bottom: 30px;
  color: #28ace5ff;
`;

export const Board = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 120px);
  justify-content: center;
  gap: 12px;
`;

export const Cell = styled.button`
  width: 120px;
  height: 120px;
  border: none;
  border-radius: 8px;
  background: linear-gradient(135deg, #43c7ff, #2b95ff);
  color: white;
  font-size: 52px;
  cursor: pointer;

  transition: 0.25s;

  box-shadow: 0 6px 15px rgba(14, 165, 233, 0.25);

  &:hover {
    box-shadow: 0 12px 25px rgba(14, 165, 233, 0.45);
  }
`;

export const RestartButton = styled.button`
  margin-top: 35px;
  padding: 12px 28px;
  border: none;
  border-radius: 8px;
  background: #8cb2c2ff;
  font-family: "Nunito", sans-serif;
  color: white;
  font-size: 20px;
  cursor: pointer;
  font-weight: 600;
  transition: 0.25s;

  &:hover {
    background: #7ca6b8ff;
  }
`;
