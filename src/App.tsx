import { useState } from 'react';
import { SafeAreaView } from 'react-native';

import Login from './modules/login';
import store from './store';
import { Provider } from 'react-redux';
import GlobalModal from './shared/components/Modal/GlobalModal';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <GlobalModal />
        <Login />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
