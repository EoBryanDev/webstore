import { useState } from 'react';
import { SafeAreaView } from 'react-native';

import Login from './modules/login';
import Modal from './shared/components/Modal';

const App = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  return (
    <SafeAreaView>
      <Modal
        onCloseModal={() => setIsVisible(false)}
        visible={isVisible}
        text={`
        hey there whats up
        hi
        hi 2
      `}
        title="Title"
      />
      <Login />
    </SafeAreaView>
  );
};

export default App;
