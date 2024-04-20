import { useState } from 'react';
import { SafeAreaView } from 'react-native';

import Login from './modules/login';
import Modal from './shared/components/Modal';
import store from './store';
import { Provider } from 'react-redux';

const App = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  return (
    <Provider store={store}>
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
    </Provider>
  );
};

export default App;
