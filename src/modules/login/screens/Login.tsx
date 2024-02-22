import { Text, View } from 'react-native';

import Input from '../../../shared/components/Input';
import { ContainerLogin } from '../styles/login.style';

const Login = () => {
  return (
    <View>
      <ContainerLogin>
        <Text>Login</Text>
        <Input
          onChange={(e) => {
            console.log(e.nativeEvent.text);
          }}
        />
      </ContainerLogin>
    </View>
  );
};
export default Login;
