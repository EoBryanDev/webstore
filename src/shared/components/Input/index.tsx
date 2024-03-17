import { useState } from 'react';
import { TextInputProps, View } from 'react-native';

import { theme } from '../../themes/theme';
import { DisplayFlexColumn } from '../globalStyles/globalView.style';
import { Text } from '../Text';
import { textTypes } from '../Text/textTypes';
import { ContainerInput, IconEye } from './input.style';

interface IInputProps extends TextInputProps {
  title?: string;
  errorMessage?: string;
  secureTextEntry?: boolean;
  margin?: string;
}
const Input = ({ margin, secureTextEntry, title, errorMessage, ...props }: IInputProps) => {
  const [currentSecurity, setCurrentSecurity] = useState<boolean>(!!secureTextEntry);

  const handleOnPressEye = () => {
    setCurrentSecurity(!currentSecurity);
  };
  return (
    <DisplayFlexColumn customMargin={margin}>
      {title && (
        <Text
          margin="0px 0px 4px 8px"
          type={textTypes.PARAGRAPH_BOLD}
          color={theme.colors.grayTheme.gray100}
        >
          {title}
        </Text>
      )}
      <View>
        <ContainerInput
          hasSecureTextEntry={secureTextEntry}
          secureTextEntry={currentSecurity}
          isError={!!errorMessage}
          {...props}
        />
        {secureTextEntry && (
          <IconEye
            name={currentSecurity ? 'eye' : 'eye-blocked'}
            color="#000"
            size={20}
            onPress={handleOnPressEye}
          />
        )}
      </View>
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
