import React from "react";
import { TextInputProps } from "react-native";
// import Icon from "react-native-vector-icons/Feather";
import { Container, TextInput } from "./styles";

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
}

const Input: React.FC<InputProps> = ({ name, icon, ...rest }) => {
  return (
    <Container>
      {/* <Icon size={20} name={icon} color="#666360" /> */}
      <TextInput
        placeholderTextColor="#666360"
        keyboardAppearance="dark"
        {...rest}
      />
    </Container>
  );
};

export default Input;
