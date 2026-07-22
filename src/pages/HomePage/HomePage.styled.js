import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.main`
  max-width: 900px;
  margin: 0 auto;
  padding: 50px 20px;
  text-align: center;
  font-family: "Nunito", sans-serif;
`;

export const Title = styled.h1`
  font-family: "Geomini", sans-serif;
  font-size: 64px;
  color: #c026d3;
  margin-bottom: 20px;
`;

export const Text = styled.p`
  font-size: 22px;
  color: #5b6472;
  line-height: 1.7;
  margin-bottom: 35px;
`;

export const Subtitle = styled.h2`
  font-size: 34px;
  color: #333;
  margin-bottom: 20px;
`;

export const List = styled.ul`
  width: fit-content;
  margin: 15px auto 30px;
  padding-left: 24px;
  text-align: left;
  list-style: none;
`;

export const Item = styled.li`
  font-size: 22px;
  line-height: 2;
  color: #555;
`;

export const Button = styled(Link)`
  display: block;
  width: fit-content;
  margin: 0 auto;
  padding: 15px 36px;
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
