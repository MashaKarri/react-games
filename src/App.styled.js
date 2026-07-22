import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.header`
  background-color: #ffffff;
  padding: 20px 40px;
  font-family: "Nunito", sans-serif;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 40px;
`;

export const NavLink = styled(Link)`
  color: #000000ff;
  text-decoration: none;
  font-size: 20px;
  font-weight: 700;
  transition: 0.3s;

  &:hover {
    color: #c026d3;
  }
`;
