import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import DrawerContainer from './DrawerContainer';

const Stack = createStackNavigator();

const RootStack = () => {
   return (
      <Stack.Navigator
         initialRouteName={"Drawer"}
      >
         <Stack.Screen name="Drawer" component={DrawerContainer} options={{ headerShown: false }} />
      </Stack.Navigator>
   )
}

export default RootStack
