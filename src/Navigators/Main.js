import React from 'react';
import { View, Text } from 'react-native';
import { FontAwesome, AntDesign } from '@expo/vector-icons';

import ScoresNavigator from './ScoresNavigator';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();

const Main = () => {
   return (
      <Tab.Navigator
         initialRouteName="Scores"
         tabBarOptions={{
            keyboardHidesTabBar: true,
            showLabel: false,
            activeTintColor: "#e91e63",
         }}
      >
         <Tab.Screen
            name="Scores"
            component={ScoresNavigator}
            options={{
               tabBarIcon: ({ color }) => (
                  <FontAwesome name="soccer-ball-o" color={color} size={30} />
               ),
            }}
         />

         {/* <Tab.Screen
            name="Favourites"
            component={ScoresNavigator}
            options={{
               tabBarIcon: ({ color }) => (
                  <AntDesign name="staro" size={30} color={color} />
               ),
            }}
         /> */}

         {/* <Tab.Screen
            name="News"
            component={ScoresNavigator}
            options={{
               tabBarIcon: ({ color }) => (
                  <FontAwesome5 name="newspaper" size={30} color={color} />
               ),
            }}
         /> */}

      </Tab.Navigator>
   )
}

export default Main
