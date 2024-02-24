import { TouchableOpacityProps } from 'react-native';

import { theme } from '../../themes/theme';
import { Text } from '../Text';
import { ButtonContainer } from './button.style';

interface IButtonProps extends TouchableOpacityProps {
  title: string;
  margin?: string;
}

const Button = ({ title, margin, ...props }: IButtonProps) => {
  return (
    <ButtonContainer margin={margin} {...props}>
      <Text color={theme.colors.neutralTheme.white}>{title}</Text>
    </ButtonContainer>
  );
};
export default Button;
