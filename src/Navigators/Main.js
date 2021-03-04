import React from 'react';
import { FontAwesome, AntDesign, FontAwesome5 } from '@expo/vector-icons';
// import TabItem from './TabItem';

import ScoresNavigator from './ScoresNavigator';
import LikeNavigator from './LikeNavigator';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();

const Main = () => {
   return (
      <Tab.Navigator
         initialRouteName="Scores"
         tabBarOptions={{
            keyboardHidesTabBar: true,
            showLabel: true,
            activeTintColor: "#e91e63",
            animationEnabled: true,
         }}
      >
         <Tab.Screen
            name="Scores"
            component={ScoresNavigator}
            options={{
               tabBarLabel: 'Scores',
               tabBarIcon: ({ color }) => (
                  // <TabItem screen="Scores"  >
                  <FontAwesome name="soccer-ball-o" color={color} size={26} />
                  // </TabItem>
               ),
            }}
         />

         <Tab.Screen
            name="Likes"
            component={LikeNavigator}
            options={{
               tabBarIcon: ({ color }) => (
                  // <TabItem screen="Favourites">
                  <AntDesign name="staro" size={30} color={color} />
                  // </TabItem>
               ),
            }}
         />

         <Tab.Screen
            name="News"
            component={ScoresNavigator}
            options={{
               tabBarIcon: ({ color }) => (
                  // <TabItem screen="News">
                  <FontAwesome5 name="newspaper" size={30} color={color} />
                  // </TabItem>
               ),
            }}
         />

      </Tab.Navigator>
   )
}

export default Main
