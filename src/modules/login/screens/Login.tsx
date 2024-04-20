import { NativeSyntheticEvent, TextInputChangeEventData, View } from 'react-native';

import Button from '../../../shared/components/Button';
import Input from '../../../shared/components/Input';
import { theme } from '../../../shared/themes/theme';
import { useLogin } from '../hooks/useLogin';
import { ContainerLogin, ImageLogo } from '../styles/login.style';

const Login = () => {
  const {
    email,
    password,
    loading,
    errorMessage,
    handleOnPress,
    setEmail,
    setPassword,
    setErrorMessage,
  } = useLogin();


  return (
    <View>
      <ContainerLogin>
        <ImageLogo resizeMode="center" source={require('../../../assets/images/logo.png')} />
        <Input
          value={email}
          margin="0px 0px 8px 0px"
          title="E-mail:"
          placeholder="Type your e-mail"
          placeholderTextColor={theme.colors.grayTheme.gray80}
          onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) => {
            setErrorMessage('');
            setEmail(e.nativeEvent.text);
          }}
          errorMessage={errorMessage}
        />
        <Input
          value={password}
          secureTextEntry
          title="Password:"
          placeholder="Type yourPassword"
          placeholderTextColor={theme.colors.grayTheme.gray80}
          onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) => {
            setErrorMessage('');
            setPassword(e.nativeEvent.text);
          }}
          errorMessage={errorMessage}
        />
        <Button
          type={theme.buttons.buttonsTheme.primary}
          title="Sign in"
          margin="16px"
          onPress={handleOnPress}
          loading={loading}
          // disabled
        />
      </ContainerLogin>
    </View>
  );
};
export default Login;
