import React, { ButtonHTMLAttributes } from "react";
import { Container } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <Container>
    {/* type está definido pois é obrigatório mas se for passado um valor, irá
    sobrescrever */}
    <button type="button" {...rest}>
      {children}
    </button>
  </Container>
);

export default Button;
