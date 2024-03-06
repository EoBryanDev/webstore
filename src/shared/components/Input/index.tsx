import { TextInputProps } from 'react-native';

import { theme } from '../../themes/theme';
import { DisplayFlexColumn } from '../globalStyles/globalView.style';
import { Text } from '../Text';
import { textTypes } from '../Text/textTypes';
import { ContainerInput } from './input.style';

interface IInputProps extends TextInputProps {
  title?: string;
}
const Input = ({ title, ...props }: IInputProps) => {
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
      <ContainerInput {...props} />
    </DisplayFlexColumn>
  );
};

export default Input;
