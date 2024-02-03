import {
  SafeAreaView,
  StyleSheet,
  // View
} from 'react-native';
import styled from 'styled-components/native';

const NewText = styled.Text`
  font-size: 32px;
  color: white;
`;
const App = () => {
  return (
    <SafeAreaView>
      <NewText style={styles.container}>Teste</NewText>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    padding: 4,
    margin: 10,
  },
});

export default App;
