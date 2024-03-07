import { TextInputProps } from 'react-native';

import { theme } from '../../themes/theme';
import { DisplayFlexColumn } from '../globalStyles/globalView.style';
import { Text } from '../Text';
import { textTypes } from '../Text/textTypes';
import { ContainerInput } from './input.style';

interface IInputProps extends TextInputProps {
  title?: string;
  errorMessage?: string;
}
const Input = ({ title, errorMessage, ...props }: IInputProps) => {
  return (
    <DisplayFlexColumn>
      {title && (
        <Text
          margin="0px 0px 4px 8px"
          type={textTypes.PARAGRAPH_BOLD}
          color={theme.colors.grayTheme.gray100}
        >
          {title}
        </Text>
      )}
      <ContainerInput isError={!!errorMessage} {...props} />
      {errorMessage && (
        <Text
          margin="0px 0px 0px 8px"
          type={textTypes.PARAGRAPH_BOLD}
          color={theme.colors.orangeTheme.orange80}
        >
          {errorMessage}
        </Text>
      )}
    </DisplayFlexColumn>
  );
};

export default Input;
