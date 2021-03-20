import React from 'react'
import ScoresContainer from '../Screen/Scores/ScoresContainer';
import LeagueDetails from '../Screen/Scores/LeagueDetails/LeagueDetails';

import SearchScreen from '../Screen/Search/SearchScreen';
import ClubScreen from '../Screen/Search/ClubScreen';

import { createStackNavigator } from '@react-navigation/stack';
import Header from '../Shared/Header';
import LoginScreen from '../Auth/Email/LoginScreen';
import RegisterScreen from '../Auth/Email/RegisterScreen';


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
            name="SearchScreen"
            component={SearchScreen}
            options={{
               header: (props) => (<Header title={props.scene.route.name} backAction={true} />)
            }}
         />
         <Stack.Screen
            name="ClubScreen"
            component={ClubScreen}
            options={{
               header: (props) => (<Header title={props.scene.route.name} backAction={true} />)
            }}
         />

         <Stack.Screen
            name="EmailLogin"
            component={LoginScreen}
            options={{
               // headerShown: false
            }}
         />

         <Stack.Screen
            name="EmailRegister"
            component={RegisterScreen}
            options={{
               // headerShown: false
            }}
         />

      </Stack.Navigator>
   )
}

export default ScoresNavigator
