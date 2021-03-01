import React from 'react';
import { View } from 'react-native';

import { BG_COLOR, GRAY, pgHorizontal } from '../../../Shared/Theme';

import LeagueContainer from '../LeagueContainer';
import Standings from './StandingsTable/Standings';
import ScoresStanding from './ScoresTable/ScoresStandings';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const TopTab = createMaterialTopTabNavigator();

// const standings_data = require('../../../../assets/standings.json');

const LeagueDetails = ({ navigation, route }) => {

   const { leagueCode, name, country } = route.params;

   return (
      <View style={{
         flex: 1,
         backgroundColor: BG_COLOR,
         paddingHorizontal: pgHorizontal
      }}>
         <LeagueContainer leagueCode={leagueCode} name={name} country={country} turnIn={false} navigation={navigation} />

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
   )
}

export default LeagueDetails
