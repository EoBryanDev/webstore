import axios from 'axios';
import { View } from 'react-native';

import Button from '../../../shared/components/Button';
import Input from '../../../shared/components/Input';
import { theme } from '../../../shared/themes/theme';
import { ContainerLogin, ImageLogo } from '../styles/login.style';

const Login = () => {
  const handleOnPress = async () => {
    // console.log('clicked');
    try {
      // testando axios no projeto
      const testBD = await axios.get('http://192.168.0.17:8080/correios/01029-010');
      console.log(testBD.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View>
      <ContainerLogin>
        <ImageLogo resizeMode="center" source={require('../../../assets/images/logo.png')} />
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
