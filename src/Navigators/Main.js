import React from 'react';
import CustomTabBar from './CustomTab/CustomTabBar';
import { GAME_COLOR, MAIN_COLOR } from '../Shared/Theme';

import ScoresNavigator from './ScoresNavigator';
import LikeNavigator from './LikeNavigator';
import HighlightNavigator from './HighlightNavigator';
import NewsNavigator from './NewsNavigator';

// redux
import { useSelector } from 'react-redux';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { THEMES } from '../Redux/Reducers/theme';
const Tab = createBottomTabNavigator();

const Main = () => {
   const likeItems = useSelector(state => state.likeItems);
   const theme = useSelector(state => state.theme);
   const bg_color = THEMES[theme].bg_color;
   const iconColor = THEMES[theme].iconColor;
   const gameColor = THEMES[theme].gameColor;
   const divide_color = THEMES[theme].divide_color;

   return (
      <Tab.Navigator
         initialRouteName="Scores"
         tabBarOptions={{
            keyboardHidesTabBar: true,
            showLabel: false,
            activeTintColor: MAIN_COLOR,
            inactiveTintColor: iconColor,
            animationEnabled: true,
            activeBackgroundColor: theme == "dark" ? gameColor : '#CCD0D5',
            tabStyle: {
               backgroundColor: bg_color,
               borderTopWidth: 1,
               borderTopColor: divide_color,
            },
         }}
         tabBar={(props) => <CustomTabBar {...props} />}
      >
         <Tab.Screen name="Scores" component={ScoresNavigator} />
         <Tab.Screen name="Likes" component={LikeNavigator}
            options={{
               tabBarBadge: likeItems.length !== 0 ? likeItems.length : null,
            }}
         />
         <Tab.Screen name="Hightlights" component={HighlightNavigator} />
         <Tab.Screen name="News" component={NewsNavigator} />
      </Tab.Navigator>
   )
}

export default Main
