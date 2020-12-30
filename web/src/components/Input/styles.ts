import styled from "styled-components";

export const Container = styled.div`
  & + div {
    margin-top: 8px;
  }

  border-radius: 10px;
  padding: 16px;
  display: flex;
  width: 100%;
  // guarda espaço pra borda vermelha de erro
  border: 2px solid transparent;
  background-color: #232129;
  input {
    background-color: #232129;
    border: none;
    color: white;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
    color: #666360;
  }
`;
