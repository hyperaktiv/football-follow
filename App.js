import React from 'react';
import { LogBox } from 'react-native';

// Navigation
import { NavigationContainer } from '@react-navigation/native';

import DrawerNavigator from './src/Navigators/DrawerContainer';
// import LikeNavigator from './src/Navigators/LikeNavigator';

export default function App() {
  return (
    // <SafeAreaView style={{ flex: 1 }} forceInset={{ top: 'always', horizontal: 'never' }}>


    <NavigationContainer>
      <DrawerNavigator />
      {/* <LikeNavigator /> */}
    </NavigationContainer>

  );
}
