import { View } from 'react-native';
import { useNavigation } from '../../../../react-navigation';
import Button from '../../../shared/components/Button';
import { Text } from '../../../shared/components/Text';
import { logout } from '../../../shared/functions/connection/auth';

const Home = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Home</Text>

      <Button title="Sair" onPress={() => logout(navigation)} />
    </View>
  );
};
export default Home;
