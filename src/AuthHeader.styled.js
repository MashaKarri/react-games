import styled from "styled-components";

export const AuthActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  margin-left: auto;
`;

export const AuthButton = styled.button`
  padding: 10px 16px;
  border: 1px solid ${({ $primary }) => ($primary ? "#7c3aed" : "#d8c8f5")};
  border-radius: 10px;
  background: ${({ $primary }) => ($primary ? "#7c3aed" : "transparent")};
  color: ${({ $primary }) => ($primary ? "#ffffff" : "inherit")};
  font-size: 14px;
  font-weight: 700;
  white-space: nowrap;
  cursor: pointer;
  transition:
    background 0.2s,
    color 0.2s;

  &:hover {
    background: ${({ $primary }) => ($primary ? "#6d28d9" : "#f1eaff")};
    color: ${({ $primary }) => ($primary ? "#ffffff" : "#6d28d9")};
  }
`;

export const UserName = styled.span`
  max-width: 160px;
  overflow: hidden;
  color: inherit;
  font-size: 14px;
  font-weight: 700;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
