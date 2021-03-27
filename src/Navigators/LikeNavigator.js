import React from 'react'
import LikeScreen from '../Screen/Likes/LikeScreen';
// import LeagueDetails from '../Screen/Scores/LeagueDetails/LeagueDetails';
import { createStackNavigator } from '@react-navigation/stack';
import Header from '../Shared/Header';
import GameDetails from '../Screen/Scores/GameDetails';
const Stack = createStackNavigator();

const LikeNavigator = () => {
   return (
      <Stack.Navigator>
         <Stack.Screen
            name="LikeScreen"
            component={LikeScreen}
            options={{
               header: (props) => (<Header title={props.scene.route.name} />)
            }} />
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

export default LikeNavigator;
