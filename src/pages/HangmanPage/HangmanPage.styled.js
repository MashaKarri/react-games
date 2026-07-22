import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.main`
  position: relative;
  max-width: 1100px;
  margin: 0 auto;
  padding: 20px 20px 70px;
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
  font-size: 58px;
  font-weight: 600;
  color: #d90429;
  margin-bottom: 48px;
`;

export const Word = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
  margin: 40px 0 25px;
`;

export const Letter = styled.div`
  width: 48px;
  height: 60px;
  border-bottom: 4px solid #d90429;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 36px;
  font-weight: 700;
  text-transform: uppercase;
`;

export const WrongLetters = styled.p`
  font-size: 24px;
  margin-bottom: 35px;
`;

export const Keyboard = styled.div`
  max-width: 760px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 12px;
  margin-bottom: 40px;
`;

export const Key = styled.button`
  width: 65px;
  height: 55px;
  border: none;
  border-radius: 8px;
  background: #f72a50ff;
  color: white;
  font-size: 23px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.25s;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
  }

  &:disabled {
    background: #d9d9d9;
    color: #000000ff;
    cursor: default;
  }
`;

export const Message = styled.h2`
  font-size: 28px;
  margin-bottom: 30px;

  ${({ $win }) =>
    $win &&
    css`
      color: #0c9a40ff;
    `}

  ${({ $lose }) =>
    $lose &&
    css`
      color: #d90429;
    `}
`;

export const RestartButton = styled.button`
  padding: 12px 34px;
  border: none;
  border-radius: 8px;
  background: #f72a50ff;
  color: white;
  font-family: "Nunito", sans-serif;
  font-size: 22px;
  font-weight: 500;
  cursor: pointer;
  transition: 0.25s;

  &:hover {
    background: #e32447ff;
  }
`;

export const Hangman = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const Gallows = styled.div`
  position: relative;
  width: 220px;
  height: 320px;
`;

export const Pole = styled.div`
  position: absolute;
  left: 25px;
  bottom: 0;
  width: 8px;
  height: 315px;
  background: #000000ff;
`;

export const Beam = styled.div`
  position: absolute;
  left: 25px;
  top: 0;
  width: 120px;
  height: 8px;
  background: #000000ff;

  &::after {
    content: "";
    position: absolute;
    right: 0;
    top: 8px;
    width: 8px;
    height: 35px;
    background: #000000ff;
  }
`;

export const Rope = styled.div`
  position: absolute;
  left: 140px;
  top: 40px;
  width: 3px;
  height: 22px;
  background: #000000ff;
`;

export const Head = styled.div`
  position: absolute;
  top: 60px;
  left: 123px;
  width: 36px;
  height: 36px;
  border: 4px solid #000000ff;
  border-radius: 50%;
`;

export const Body = styled.div`
  position: absolute;
  top: 100px;
  left: 141px;
  width: 4px;
  height: 75px;
  background: #000000ff;
`;

export const LeftArm = styled.div`
  position: absolute;
  top: 118px;
  left: 110px;
  width: 34px;
  height: 4px;
  background: #000000ff;
  transform: rotate(-35deg);
  transform-origin: right center;
`;

export const RightArm = styled.div`
  position: absolute;
  top: 118px;
  left: 142px;
  width: 34px;
  height: 4px;
  background: #000000ff;
  transform: rotate(35deg);
  transform-origin: left center;
`;

export const LeftLeg = styled.div`
  position: absolute;
  top: 173px;
  left: 106px;
  width: 38px;
  height: 4px;
  background: #000000ff;
  transform: rotate(-135deg);
  transform-origin: right center;
`;

export const RightLeg = styled.div`
  position: absolute;
  top: 173px;
  left: 144px;
  width: 38px;
  height: 4px;
  background: #000000ff;
  transform: rotate(-225deg);
  transform-origin: left center;
`;

export const Base = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 120px;
  height: 8px;
  background: #000000ff;
`;
