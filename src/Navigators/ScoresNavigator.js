import React from 'react'
import ScoresContainer from '../Screen/Scores/ScoresContainer';
import LeagueDetails from '../Screen/Scores/LeagueDetails/LeagueDetails';

import { createStackNavigator } from '@react-navigation/stack';
import Header from '../Shared/Header';
import GameDetails from '../Screen/Scores/GameDetails';


const Stack = createStackNavigator();

const ScoresNavigator = () => {
   return (
      <Stack.Navigator>
         <Stack.Screen
            name="Scores"
            component={ScoresContainer}
            options={{
               // headerShown: false
               header: (props) => (<Header title={props.scene.route.name} />)
            }} />
         <Stack.Screen
            name="LeagueDetails"
            component={LeagueDetails}
            options={{
               header: (props) => (<Header title={props.scene.route.name} backAction={true} />)
            }}
         />

         <Stack.Screen
            name="GameDetails"
            component={GameDetails}
            options={{
               header: (props) => (<Header title={props.scene.route.name} backAction={true} />)
            }}
         />

      </Stack.Navigator>
   )
}

export default ScoresNavigator
