import 'react-native-gesture-handler';
import React from 'react';
import {SignIn, SplashScreen} from './pages';
import Router from './router';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      {/* <SplashScreen /> */}
      {/* <SignIn /> */}
      <Router />
    </NavigationContainer>
  );
};

export default App;
