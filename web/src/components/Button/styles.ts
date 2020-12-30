import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.div`
  button {
    border-radius: 10px;
    padding: 16px;
    display: block;
    width: 100%;

    margin-top: 24px;
    height: 56px;
    border: none;

    font-weight: 500;

    background-color: #ff9000;
    transition: background-color 0.2s;
    color: #312e38;

    &:hover {
      background-color: ${shade(0.2, "#ff9000")};
    }
  }
`;
