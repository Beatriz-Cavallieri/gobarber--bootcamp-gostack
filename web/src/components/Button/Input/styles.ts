import { toColorString } from "polished";
import styled, { css } from "styled-components";

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
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
  ${(props) =>
    props.isFocused &&
    css`
      border-color: #ff9000;
      color: #ff9000;
      svg {
        color: #ff9000;
      }
    `}
    ${(props) =>
    props.isFilled &&
    css`
      svg {
        color: #ff9000;
      }
    `}
`;
