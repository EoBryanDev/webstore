import { TextInputProps } from 'react-native';

import { ContainerInput } from './input.style';

type IInputProps = TextInputProps;
const Input = ({ ...props }: IInputProps) => {
  return <ContainerInput {...props} />;
};

export default Input;
