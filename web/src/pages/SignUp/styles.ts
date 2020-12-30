import styled from "styled-components";
import signUpBackgroundImage from "../../assets/images/bg-signup.png";
import { shade } from "polished";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  // alinhamento dos itens ao longo do eixo perpendicular ocupa toda a tela
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 700px;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;
    align-items: center;

    h1 {
      margin-bottom: 24px;
    }
  }
  > a {
    text-decoration: none;
    color: #f4ede8;
    transition: color 0.2s;
    display: flex;
    align-items: center;

    &:hover {
      color: ${shade(0.2, "#f4ede8")};
    }

    svg {
      margin-right: 16px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signUpBackgroundImage}) no-repeat center;
  // cobrir completamente, sem espaços vazios
  background-size: cover;
`;
