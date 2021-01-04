import styled, { css } from "styled-components";
import Tooltip from "../../Tooltip";

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  hasError: boolean;
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

    ${(props) =>
    (props.hasError && !props.isFocused) &&
    css`
      color: #c53030;
      border-color: #c53030;
      svg {
        color: #c53030;
      }
    `}
`;

export const Error = styled(Tooltip)`
  height: 20px; //tamanho do ícone
  margin-left: 16px;
  svg {
    margin: 0;
  }
`;
