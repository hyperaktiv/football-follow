import React from 'react';
import { LogBox } from 'react-native';

// message
import Toast from 'react-native-toast-message';

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './src/Navigators/DrawerContainer';

// REDUX
import { Provider as StateProvider } from 'react-redux';
import store from './src/Redux/store';

// Context
import Auth from './src/Context/store/Auth';


// LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
// ogBox.ignoreAllLogs();//Ignore all log notifications

export default function App() {
  return (
    <Auth>
      <StateProvider store={store}>
        <NavigationContainer>
          <DrawerNavigator />
          <Toast ref={(ref) => Toast.setRef(ref)} />
        </NavigationContainer>
      </StateProvider>
    </Auth>

  );
}
