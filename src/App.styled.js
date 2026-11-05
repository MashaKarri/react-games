import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.header`
  box-sizing: border-box;
  width: 100%;
  background-color: #ffffff;
  padding: 20px 40px;
  font-family: "Nunito", sans-serif;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 40px;
`;

export const NavLink = styled(Link)`
  color: #000000;
  text-decoration: none;
  font-size: 20px;
  font-weight: 700;
  transition: color 0.3s;

  &:hover {
    color: #c026d3;
  }
`;
