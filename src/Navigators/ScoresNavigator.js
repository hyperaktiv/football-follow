import React from 'react'
import ScoresContainer from '../Screen/Scores/ScoresContainer';
import LeagueDetails from '../Screen/Scores/LeagueDetails/LeagueDetails';

import SearchScreen from '../Screen/Search/SearchScreen';
import ClubScreen from '../Screen/Search/ClubScreen';

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

         <Stack.Screen
            name="SearchScreen"
            component={SearchScreen}
            options={{
               headerShown: false
            }}
         />
         <Stack.Screen
            name="ClubScreen"
            component={ClubScreen}
            options={{
               headerShown: false
            }}
         />
      </Stack.Navigator>
   )
}

export default ScoresNavigator
