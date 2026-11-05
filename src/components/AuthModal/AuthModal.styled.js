import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: rgba(15, 10, 35, 0.7);
  backdrop-filter: blur(5px);
`;

export const Modal = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  max-width: 420px;
  max-height: calc(100vh - 40px);
  overflow-y: auto;
  padding: 40px 32px;
  border-radius: 24px;
  background: #ffffff;
  color: #28213d;
  font-family: "Nunito", sans-serif;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  display: grid;
  place-items: center;
  width: 36px;
  height: 36px;
  border: none;
  border-radius: 50%;
  background: #f3efff;
  color: #6d28d9;
  font-size: 24px;
  cursor: pointer;

  &:hover {
    background: #e4d8ff;
  }
`;

export const Title = styled.h2`
  margin: 0 0 10px;
  padding-right: 20px;
  color: #6319da;
  font-size: 30px;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: #38304d;
  font-size: 14px;
  font-weight: 700;
`;

export const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: 13px 15px;
  border: 1px solid #e3dfee;
  border-radius: 12px;
  outline: none;
  background: #fcfbff;
  color: #28213d;
  font: inherit;
  font-weight: 400;

  &::placeholder {
    color: #aaa4b8;
  }

  &:focus {
    border-color: #8b5cf6;
    box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.15);
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  margin-top: 4px;
  padding: 14px;
  border: none;
  border-radius: 12px;
  background: linear-gradient(135deg, #9333ea, #6d28d9);
  color: #ffffff;
  font-family: inherit;
  font-size: 16px;
  font-weight: 800;
  cursor: pointer;

  &:hover {
    background: linear-gradient(135deg, #7e22ce, #5b21b6);
  }
`;

export const ErrorMessage = styled.p`
  margin: 0;
  padding: 11px 12px;
  border-radius: 10px;
  background: #fff0f0;
  color: #c62828;
  font-size: 13px;
  line-height: 1.5;
`;
