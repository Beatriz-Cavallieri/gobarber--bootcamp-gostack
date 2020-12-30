import React from "react";
import { Background, Container, Content } from "./styles";
import logoImg from "../../assets/images/Logo.svg";
import { FiUser, FiMail, FiLock, FiArrowLeft } from "react-icons/fi";
import Button from "../../components/Button";
import Input from "../../components/Button/Input";

const SignUp: React.FC = () => {
  return (
    <Container>
      <Background />
      <Content>
        <img src={logoImg} alt="" />
        <form>
          <h1>Faça seu cadastro</h1>
          <Input name="name" type="text" placeholder="Nome" icon={FiUser} />
          <Input name="email" type="text" placeholder="E-mail" icon={FiMail} />
          <Input
            name="password"
            type="password"
            placeholder="Senha"
            icon={FiLock}
          />
          <Button type="submit">Cadastrar</Button>
        </form>
        <a href="bla">
          <FiArrowLeft /> Voltar para o login
        </a>
      </Content>
    </Container>
  );
};

export default SignUp;
