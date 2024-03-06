import { TouchableOpacityProps } from 'react-native';

import { theme } from '../../themes/theme';
import { Text } from '../Text';
import { textTypes } from '../Text/textTypes';
import {
  ActivityIndicatorSpinner,
  ButtonContainer,
  ButtonDisabled,
  ButtonGradient,
  ButtonSecondary,
} from './button.style';

interface IButtonProps extends TouchableOpacityProps {
  title: string;
  margin?: string;
  type?: string;
  disabled?: boolean;
  loading?: boolean;
  onPress?: () => void;
}

const Button = ({ title, margin, type, disabled, loading, onPress, ...props }: IButtonProps) => {
  const handleOnPress = () => {
    if (!loading && !disabled && onPress) {
      onPress();
    }
  };
  const renderText = (color: string) => (
    <>
      {loading ? (
        <ActivityIndicatorSpinner color={theme.colors.neutralTheme.white} />
      ) : (
        <Text type={textTypes.BUTTON_BOLD} color={color}>
          {title}
        </Text>
      )}
    </>
  );

  if (disabled) {
    return (
      <ButtonDisabled {...props} margin={margin}>
        {renderText(theme.colors.neutralTheme.white)}
      </ButtonDisabled>
    );
  }
  switch (type) {
    case theme.buttons.buttonsTheme.secondary:
      return (
        <ButtonSecondary {...props} margin={margin} onPress={handleOnPress}>
          {renderText(theme.colors.mainTheme.primary)}
        </ButtonSecondary>
      );
    case theme.buttons.buttonsTheme.primary:
    default:
      return (
        <ButtonContainer {...props} margin={margin} onPress={handleOnPress}>
          <ButtonGradient
            start={{ x: 0.0, y: 0.0 }}
            end={{ x: 1.0, y: 1.0 }}
            colors={[theme.colors.purpleTheme.purple80, theme.colors.pinkTheme.pink80]}
          >
            {renderText(theme.colors.neutralTheme.white)}
          </ButtonGradient>
        </ButtonContainer>
      );
  }
};
export default Button;
