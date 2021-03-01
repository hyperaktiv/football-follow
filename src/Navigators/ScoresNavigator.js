import React from 'react'
import ScoresContainer from '../Screen/Scores/ScoresContainer';
import LeagueDetails from '../Screen/Scores/LeagueDetails/LeagueDetails';
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
         <Stack.Screen
            name="LeagueDetails"
            component={LeagueDetails}
            options={{
               headerShown: false
            }}
         />
      </Stack.Navigator>
   )
}

export default ScoresNavigator
