import React from 'react';
import { FontAwesome, AntDesign, FontAwesome5, Entypo } from '@expo/vector-icons';
// import TabItem from './TabItem';
import { MAIN_COLOR } from '../Shared/Theme';

import ScoresNavigator from './ScoresNavigator';
import LikeNavigator from './LikeNavigator';
import HighlightNavigator from './HighlightNavigator';
import NewsScreen from '../Screen/News/NewsScreen';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();

const Main = () => {
   return (
      <Tab.Navigator
         initialRouteName="Scores"
         tabBarOptions={{
            keyboardHidesTabBar: true,
            showLabel: true,
            activeTintColor: MAIN_COLOR,
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
                  <AntDesign name="star" size={30} color={color} />
                  // </TabItem>
               ),
            }}
         />

         <Tab.Screen
            name="Hightlights"
            component={HighlightNavigator}
            options={{
               tabBarIcon: ({ color }) => (
                  // <TabItem screen="News">
                  <Entypo name="folder-video" size={30} color={color} />
                  // </TabItem>
               ),
            }}
         />

         <Tab.Screen
            name="News"
            component={NewsScreen}
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
