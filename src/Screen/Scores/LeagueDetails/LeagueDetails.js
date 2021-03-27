import React from 'react';
import { View } from 'react-native';
import { pgHorizontal, MAIN_COLOR } from '../../../Shared/Theme';
import LeagueContainer from '../LeagueContainer';
import Standings from './StandingsTable/Standings';
import ScoresStanding from './ScoresTable/ScoresStandings';

// redux
import { useSelector } from 'react-redux';
import { THEMES } from '../../../Redux/Reducers/theme';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const TopTab = createMaterialTopTabNavigator();

const LeagueDetails = ({ navigation, route }) => {
   const theme = useSelector(state => state.theme);
   const bg_color = THEMES[theme].bg_color;

   const { leagueCode, name, country, flagImg } = route.params;

   return (
      <View style={{
         flex: 1,
         backgroundColor: bg_color,
         paddingHorizontal: pgHorizontal
      }}>
         <LeagueContainer
            name={name}
            country={country}
            leagueCode={leagueCode}
            flagImg={flagImg}
            turnIn={false}
            navigation={navigation}
         />

         <>
            <TopTab.Navigator
               lazy={true}
               tabBarOptions={{
                  labelStyle: { fontSize: 12, color: MAIN_COLOR },
                  style: { backgroundColor: bg_color },
                  indicatorStyle: {
                     backgroundColor: MAIN_COLOR
                  }
               }}>
               <TopTab.Screen name="Standings">
                  {() => <Standings leagueCode={leagueCode} name={name} country={country} />}
               </TopTab.Screen>
               <TopTab.Screen name="PlayerStanding">
                  {() => <ScoresStanding leagueCode={leagueCode} name={name} country={country} />}
               </TopTab.Screen>
            </TopTab.Navigator>
         </>

      </View>
   )
}

export default LeagueDetails
