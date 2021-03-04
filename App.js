import React from 'react';
import { LogBox } from 'react-native';

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import Main from './src/Navigators/Main';

// import LikeNavigator from './src/Navigators/LikeNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <Main />
      {/* <LikeNavigator /> */}
    </NavigationContainer>

  );
}
