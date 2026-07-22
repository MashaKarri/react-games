import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.main`
  position: relative;
  max-width: 800px;
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
  font-weight: 600;
  color: #1cb153ff;
  margin-bottom: 15px;
`;

export const Info = styled.p`
  font-size: 22px;
  margin-bottom: 25px;
`;

export const WinText = styled.h2`
  color: #11ba4fff;
  font-size: 28px;
  margin-bottom: 28px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 125px);
  justify-content: center;
  gap: 20px;
`;

export const Card = styled.button`
  width: 125px;
  height: 125px;
  padding: 0;
  border: none;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  background: linear-gradient(135deg, #34d399, #22c55e);
  display: flex;
  justify-content: center;
  align-items: center;
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;

  box-shadow: 0 6px 15px rgba(34, 197, 94, 0.25);

  &:hover {
    box-shadow: 0 12px 25px rgba(34, 197, 94, 0.5);
  }

  svg {
    font-size: 40px;
    color: white;
    transition: transform 0.25s ease;
  }

  &:hover svg {
    transform: rotate(10deg) scale(1.1);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    animation: showImage 0.25s ease;
  }

  @keyframes showImage {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`;

export const RestartButton = styled.button`
  margin-top: 35px;
  padding: 10px 30px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background: #125c2dff;
  font-family: "Nunito", sans-serif;
  color: white;
  font-size: 19px;
  font-weight: 500;
  transition: all 0.25s ease;

  &:hover {
    background: #0a431fff;
    transform: translateY(-2px);
  }
`;
