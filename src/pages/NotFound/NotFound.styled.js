import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  text-align: center;
  font-family: "Nunito", sans-serif;
`;

export const Title = styled.h1`
  font-size: 90px;
  color: #c026d3;
  margin-bottom: 10px;
  font-family: "Geomini", sans-serif;
`;

export const Text = styled.p`
  font-size: 22px;
  color: #555;
  margin-bottom: 35px;
`;

export const Image = styled.img`
  width: 300px;
  max-width: 100%;
  border-radius: 8px;
  margin-bottom: 30px;
`;

export const Button = styled(Link)`
  padding: 14px 34px;
  background: #c026d3;
  color: white;
  text-decoration: none;
  border-radius: 12px;
  font-size: 18px;
  font-weight: 700;
  transition: 0.3s;

  &:hover {
    background: #a21caf;
  }
`;
