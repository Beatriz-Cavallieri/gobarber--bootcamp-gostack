import React from "react";
import { Background, Container, Content } from "./styles";
import logoImg from "../../assets/images/Logo.svg";
import { FiLogIn, FiMail, FiLock } from "react-icons/fi";
import Button from "../../components/Button";
import Input from "../../components/Input";

const SignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="" />
        <form>
          <h1>Faça seu login</h1>
          <Input name="email" type="text" placeholder="E-mail" icon={FiMail} />
          <Input name="password" type="password" placeholder="Senha" icon={FiLock} />
          <Button type="submit">Entrar</Button>
          <a href="bla"> Esqueci minha senha</a>
        </form>
        <a href="bla">
          <FiLogIn /> Criar conta
        </a>
      </Content>

      <Background />
    </Container>
  );
};

export default SignIn;
