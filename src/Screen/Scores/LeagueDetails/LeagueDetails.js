import React from 'react';
import { View } from 'react-native';
import { BG_COLOR, GRAY, pgHorizontal } from '../../../Shared/Theme';
import Header from '../../../Shared/Header';
import LeagueContainer from '../LeagueContainer';
import Standings from './StandingsTable/Standings';
import ScoresStanding from './ScoresTable/ScoresStandings';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const TopTab = createMaterialTopTabNavigator();

const LeagueDetails = ({ navigation, route }) => {

   const { leagueCode, name, country, flagImg } = route.params;

   return (
      <>
         <Header title='Scores' navigation={navigation} backAction={true} />

         <View style={{
            flex: 1,
            backgroundColor: BG_COLOR,
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
                  style: { backgroundColor: BG_COLOR },
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
