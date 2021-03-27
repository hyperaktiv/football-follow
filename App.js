import React from 'react';
import { LogBox } from 'react-native';

// message
import Toast from 'react-native-toast-message';

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './src/Navigators/RootStack';
import DrawerContainer from './src/Navigators/DrawerContainer';

// REDUX
import { Provider as StateProvider } from 'react-redux';
import store from './src/Redux/store';


// LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
// ogBox.ignoreAllLogs();//Ignore all log notifications

export default function App() {
  return (
    <StateProvider store={store}>
      <NavigationContainer>
        <DrawerContainer />
        {/* <RootStack /> */}
        <Toast ref={(ref) => Toast.setRef(ref)} />
      </NavigationContainer>
    </StateProvider>
  );
}
