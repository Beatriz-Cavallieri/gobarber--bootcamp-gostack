import React, { useCallback, useRef } from "react";
import { Background, Container, Content } from "./styles";
import logoImg from "../../assets/images/Logo.svg";
import { FiLogIn, FiMail, FiLock } from "react-icons/fi";
import Button from "../../components/Button";
import Input from "../../components/Button/Input";
import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";
import * as Yup from "yup";
import getValidationErrors from "../../utils/getValidationErrors";

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .required("Email obrigatório")
          .email("Digite um e-mail válido"),
        password: Yup.string().required("Senha obrigatória"),
      });

      await schema.validate(data, { abortEarly: false });
    } catch (error) {
      const errors = getValidationErrors(error);

      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="" />
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu login</h1>
          <Input name="email" type="text" placeholder="E-mail" icon={FiMail} />
          <Input
            name="password"
            type="password"
            placeholder="Senha"
            icon={FiLock}
          />
          <Button type="submit">Entrar</Button>
          <a href="bla"> Esqueci minha senha</a>
        </Form>
        <a href="bla">
          <FiLogIn /> Criar conta
        </a>
      </Content>

      <Background />
    </Container>
  );
};

export default SignIn;
