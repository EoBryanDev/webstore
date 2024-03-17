import { View } from 'react-native';

import Button from '../../../shared/components/Button';
import Input from '../../../shared/components/Input';
import { theme } from '../../../shared/themes/theme';
import { ContainerLogin } from '../styles/login.style';

const Login = () => {
  const handleOnPress = () => {
    // console.log('clicked');
    null;
  };
  return (
    <View>
      <ContainerLogin>
        <Input
          margin="0px 0px 8px 0px"
          title="E-mail:"
          placeholder="Type your e-mail"
          placeholderTextColor={theme.colors.grayTheme.gray80}
          onChange={(e) => {
            console.log(e.nativeEvent.text);
          }}
          // errorMessage="E-mail or password invalid !"
        />
        <Input
          secureTextEntry
          title="Password:"
          placeholder="Type yourPassword"
          placeholderTextColor={theme.colors.grayTheme.gray80}
          onChange={(e) => {
            console.log(e.nativeEvent.text);
          }}
          // errorMessage="E-mail or password invalid !"
        />
        <Button
          type={theme.buttons.buttonsTheme.primary}
          title="Sign in"
          margin="16px"
          onPress={handleOnPress}
          // loading={true}
          // disabled
        />
      </ContainerLogin>
    </View>
  );
};
export default Login;
