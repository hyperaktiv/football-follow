import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import PhoneAuthScreen from './PhoneAuth';
import HomeScreen from './HomeScreen';

const Stack = createStackNavigator();
const Navigator = () => {
   return (
      <Stack.Navigator>
         <Stack.Screen name={'PhoneAuthScreen'} component={PhoneAuthScreen} />
         <Stack.Screen name={'HomeScreen'} component={HomeScreen} />
      </Stack.Navigator>
   )
}

export default Navigator
