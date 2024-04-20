import { SafeAreaView } from 'react-native';

import store from './store';
import { Provider } from 'react-redux';
import GlobalModal from './shared/components/Modal/GlobalModal';

import Navigation from './Navigation';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <GlobalModal />
        <Navigation />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
