import { useState } from 'react';
import { SafeAreaView } from 'react-native';

import Login from './modules/login';
import store from './store';
import { Provider } from 'react-redux';
import GlobalModal from './shared/components/Modal/GlobalModal';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './modules/home';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <GlobalModal />
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} options={{ title: 'Home' }} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
};

export default App;
