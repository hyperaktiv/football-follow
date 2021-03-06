import React from 'react';
import { LogBox, StatusBar } from 'react-native';

// Navigation
import { NavigationContainer } from '@react-navigation/native';

import DrawerNavigator from './src/Navigators/DrawerContainer';
// import LikeNavigator from './src/Navigators/LikeNavigator';

export default function App() {
  return (
    <NavigationContainer>
      {/* <StatusBar
        animated={true}
        backgroundColor="#61dafb"
        barStyle={'white'}
        showHideTransition={'slide'}
        hidden={false} /> */}
      <DrawerNavigator />
      {/* <LikeNavigator /> */}
    </NavigationContainer>

  );
}
