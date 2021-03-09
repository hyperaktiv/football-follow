import React from 'react';
import { LogBox } from 'react-native';

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './src/Navigators/DrawerContainer';

import HighlightNavigator from './src/Navigators/HighlightNavigator'


// LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
// ogBox.ignoreAllLogs();//Ignore all log notifications

export default function App() {
  return (

    <NavigationContainer>
      <DrawerNavigator />
      {/* <HighlightNavigator /> */}
    </NavigationContainer>

  );
}
