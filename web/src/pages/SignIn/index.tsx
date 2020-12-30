import React from "react";
import { Background, Container, Content } from "./styles";
import logoImg from "../../assets/images/Logo.svg";
import { FiLogIn } from "react-icons/fi";

const SignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="" />
        <form>
          <h1>Faça seu login</h1>
          <input type="text" placeholder="E-mail" />
          <input type="password" placeholder="Senha" />
          <button type="submit">Entrar</button>
          <a href="bla">  Esqueci minha senha</a>
        </form>
        <a href="bla"><FiLogIn/> Criar conta</a>
      </Content>

      <Background />
    </Container>
  );
};

export default SignIn;
