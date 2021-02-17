import React from 'react'
import ScoresContainer from '../Screen/Scores/ScoresContainer';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

const ScoresNavigator = () => {
   return (
      <Stack.Navigator>
         <Stack.Screen
            name="Scores"
            component={ScoresContainer}
            options={{
               headerShown: false
            }} />
         {/* <Stack.Screen
            name=""
            component={ }
            options={{
               headerShown: false
            }} /> */}
      </Stack.Navigator>
   )
}

export default ScoresNavigator
