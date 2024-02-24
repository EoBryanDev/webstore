import { View } from 'react-native';

import Button from '../../../shared/components/Button';
import Input from '../../../shared/components/Input';
import { ContainerLogin } from '../styles/login.style';

const Login = () => {
  const handleOnPress = () => {
    console.log('clicked');
  };
  return (
    <View>
      <ContainerLogin>
        <Input
          onChange={(e) => {
            console.log(e.nativeEvent.text);
          }}
        />
        <Button title="Sign in" margin="16px" onPress={handleOnPress} />
      </ContainerLogin>
    </View>
  );
};
export default Login;
