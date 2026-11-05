import styled from "styled-components";

export const MessageContainer = styled.section`
  width: min(500px, calc(100% - 40px));
  box-sizing: border-box;
  margin: 60px auto;
  padding: 40px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: #ffffff;
  border: 1px solid #eadcf5;
  border-radius: 20px;
  box-shadow: 0 8px 25px rgba(80, 40, 100, 0.08);
  font-family: "Nunito", sans-serif;
`;

export const MessageTitle = styled.h2`
  margin: 0 0 12px;
  color: #252033;
  font-size: 28px;
  font-weight: 800;
`;

export const MessageText = styled.p`
  margin: 0 0 25px;
  color: #6b6475;
  font-size: 16px;
  line-height: 1.7;
`;

export const LoginButton = styled.button`
  padding: 13px 28px;
  border: none;
  border-radius: 10px;
  background: #9333ea;
  color: #ffffff;
  font-family: inherit;
  font-size: 16px;
  font-weight: 800;
  cursor: pointer;
  transition:
    background 0.2s,
    transform 0.2s;

  &:hover {
    background: #7e22ce;
    transform: translateY(-2px);
  }
`;
