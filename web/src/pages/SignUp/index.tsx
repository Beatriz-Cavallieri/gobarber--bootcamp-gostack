import React, { useCallback, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
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
import api from "../../services/api";
import { useToast } from "../../hooks/toast";

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(async (data: SignUpFormData) => {
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

      await api.post("/users", data);

      history.push("/");

      addToast({
        type: "success",
        title: "Cadastro realizado!",
        description: "Você já pode fazer seu logon no GoBarber!",
      });
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errors = getValidationErrors(error);

        formRef.current?.setErrors(errors);
      }

      addToast({
        type: "error",
        title: "Erro no cadastro",
        description: "Ocorreu um erro ao fazer cadastro, tente novamente.",
      });
    }
  }, [addToast, history]);

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
        <Link to="/">
          <FiArrowLeft /> Voltar para o login
        </Link>
      </Content>
    </Container>
  );
};

export default SignUp;
