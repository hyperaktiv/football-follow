import React from 'react';
import { LogBox } from 'react-native';

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './src/Navigators/DrawerContainer';

import HighlightNavigator from './src/Navigators/HighlightNavigator';


// REDUX
import { Provider as StateProvider } from 'react-redux';
import store from './src/Redux/store';


// LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
// ogBox.ignoreAllLogs();//Ignore all log notifications

export default function App() {
  return (
    <StateProvider store={store}>
      <NavigationContainer>
        <DrawerNavigator />
        {/* <HighlightNavigator /> */}
      </NavigationContainer>
    </StateProvider>
  );
}
