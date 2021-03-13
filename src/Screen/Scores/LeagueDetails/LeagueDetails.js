import React from 'react';
import { View } from 'react-native';
import { GRAY, pgHorizontal } from '../../../Shared/Theme';
import Header from '../../../Shared/Header';
import LeagueContainer from '../LeagueContainer';
import Standings from './StandingsTable/Standings';
import ScoresStanding from './ScoresTable/ScoresStandings';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useSelector } from 'react-redux';
import { THEMES } from '../../../Redux/Reducers/theme';
const TopTab = createMaterialTopTabNavigator();

const LeagueDetails = ({ navigation, route }) => {
   const theme = useSelector(state => state.theme);
   const bg_color = THEMES[theme].bg_color;

   const { leagueCode, name, country, flagImg } = route.params;

   return (
      <>
         <Header title='Scores' navigation={navigation} backAction={true} />

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

            <TopTab.Navigator
               tabBarOptions={{
                  labelStyle: { fontSize: 12, color: GRAY },
                  style: { backgroundColor: bg_color },
               }}>
               <TopTab.Screen name="Table">
                  {() => <Standings leagueCode={leagueCode} name={name} country={country} />}
               </TopTab.Screen>
               <TopTab.Screen name="Scores">
                  {() => <ScoresStanding leagueCode={leagueCode} name={name} country={country} />}
               </TopTab.Screen>
            </TopTab.Navigator>

         </View>
      </>

   )
}

export default LeagueDetails
