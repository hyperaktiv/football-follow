import React from 'react'

import HighlightScreen from '../Screen/Highlight/HighlightScreen';
import HighlightPage from '../Screen/Highlight/HighlightPage';

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

const HighlightNavigator = () => {
   return (
      <Stack.Navigator>
         <Stack.Screen
            name="HighlightScreen"
            component={HighlightScreen}
            options={{
               headerShown: false
            }} />
         <Stack.Screen
            name="HighlightPage"
            component={HighlightPage}
            options={{
               headerShown: false
            }}
         />
      </Stack.Navigator>
   )
}

export default HighlightNavigator
