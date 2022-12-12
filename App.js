import 'react-native-gesture-handler';

import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import AuthNavigator from './src/navigations/AuthNavigator';

//import store from "./src
import store from './src/redux/store';
//import Provider
import {Provider} from 'react-redux';

export default function App() {
  const RootApp = () => {
    return (
      <NavigationContainer>
        <AuthNavigator />
      </NavigationContainer>
    );
  };
  return (
    <Provider store={store}>
      <RootApp />
    </Provider>
  );
}
