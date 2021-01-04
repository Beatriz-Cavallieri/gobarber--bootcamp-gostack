import React, { useCallback, useRef } from "react";
import { Background, Container, Content } from "./styles";
import logoImg from "../../assets/images/Logo.svg";
// ícones svg
import { FiUser, FiMail, FiLock, FiArrowLeft } from "react-icons/fi";
// componentes do projeto
import Button from "../../components/Button";
import Input from "../../components/Button/Input";
// lidar com form
import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";
// validação
import * as Yup from "yup";
import getValidationErrors from "../../utils/getValidationErrors";

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {
    try {

      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required("Nome obrigatório"),
        email: Yup.string()
          .required("Email obrigatório")
          .email("Digite um e-mail válido"),
        password: Yup.string().min(6, "No mínimo 6 dígitos"),
      });

      await schema.validate(data, { abortEarly: false });
    } catch (error) {
      const errors = getValidationErrors(error);

      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <Container>
      <Background />
      <Content>
        <img src={logoImg} alt="" />
        <Form ref={formRef} onSubmit={handleSubmit}>
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
