import React from 'react'
import LikeScreen from '../Screen/Likes/LikeScreen';
// import LeagueDetails from '../Screen/Scores/LeagueDetails/LeagueDetails';
import { createStackNavigator } from '@react-navigation/stack';
import Header from '../Shared/Header';
const Stack = createStackNavigator();

const LikeNavigator = () => {
   return (
      <Stack.Navigator>
         <Stack.Screen
            name="LikeScreen"
            component={LikeScreen}
            options={{
               // headerShown: false
               header: (props) => (<Header title={props.scene.route.name} />)
            }} />
         {/* <Stack.Screen
            name="LeagueDetails"
            component={LeagueDetails}
            options={{
               headerShown: false
            }}
         /> */}
      </Stack.Navigator>
   )
}

export default LikeNavigator;
