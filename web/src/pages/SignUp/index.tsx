import React from "react";
import { Background, Container, Content } from "./styles";
import logoImg from "../../assets/images/Logo.svg";
import { FiUser, FiMail, FiLock, FiArrowLeft } from "react-icons/fi";
import Button from "../../components/Button";
import Input from "../../components/Button/Input";
import { Form } from "@unform/web";

const SignUp: React.FC = () => {
  function handleSubmit() {}

  return (
    <Container>
      <Background />
      <Content>
        <img src={logoImg} alt="" />
        <Form onSubmit={handleSubmit}>
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
        </Form>
        <a href="bla">
          <FiArrowLeft /> Voltar para o login
        </a>
      </Content>
    </Container>
  );
};

export default SignUp;
