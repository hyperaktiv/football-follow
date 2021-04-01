import React, { useEffect, useState, useCallback } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { pgHorizontal, MAIN_COLOR } from '../../../Shared/Theme';
import LeagueContainer from '../LeagueContainer';
import Standings from './StandingsTable/Standings';
import ScoresStanding from './ScoresTable/ScoresStandings';

// redux
import { useSelector } from 'react-redux';
import { THEMES } from '../../../Redux/Reducers/theme';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CustomText from '../../../Shared/CustomText';
const TopTab = createMaterialTopTabNavigator();

const LeagueDetails = ({ navigation, route }) => {
   const theme = useSelector(state => state.theme);
   const bg_color = THEMES[theme].bg_color;
   const divide_color = THEMES[theme].divide_color;

   const { leagueCode, name, country, flagImg } = route.params;

   const [touch, setTouch] = useState(true);
   const [standingData, setStandingData] = useState([]);
   const [scoresData, setScoresData] = useState([]);

   useEffect(() => {
      let tempData;
      if (touch) {
         if (leagueCode == 'PL') tempData = require('../data/plStanding.json');
         if (leagueCode == 'SA') tempData = require('../data/saStanding.json');
         if (leagueCode == 'BL1') tempData = require('../data/bl1Standing.json');
         setStandingData(tempData.standings[0].table);
      } else {
         if (leagueCode == 'PL') tempData = require('../data/plScores.json');
         if (leagueCode == 'SA') tempData = require('../data/saScores.json');
         if (leagueCode == 'BL1') tempData = require('../data/bl1Scores.json');
         setScoresData(tempData.scorers);
      }
      // console.log('effect: ', touch)
      return () => {
         setStandingData([]);
         setScoresData([]);
      }
   }, [touch]);

   return (
      <View style={{
         flex: 1,
         backgroundColor: bg_color,
      }}>
         <View style={{ paddingHorizontal: pgHorizontal }}>
            <LeagueContainer
               name={name}
               country={country}
               leagueCode={leagueCode}
               flagImg={flagImg}
               turnIn={false}
               navigation={navigation}
            />
         </View>

         <View style={{ flexDirection: 'row', paddingHorizontal: pgHorizontal }}>
            <TouchableOpacity
               style={{
                  backgroundColor: touch == true ? divide_color : bg_color,
                  height: 35,
                  width: 110,
                  borderWidth: 1,
                  borderColor: MAIN_COLOR,
                  borderRadius: '20%',
                  justifyContent: 'center',
                  alignItems: 'center'
               }}
               onPress={() => {
                  setTouch(true);
               }}
            >
               <CustomText style={{ color: MAIN_COLOR }}>Standing</CustomText>
            </TouchableOpacity>

            <TouchableOpacity style={{
               backgroundColor: touch == false ? divide_color : bg_color,
               height: 35,
               width: 110,
               borderWidth: 1,
               borderColor: MAIN_COLOR,
               borderRadius: '20%',
               justifyContent: 'center',
               alignItems: 'center',
               marginLeft: 20
            }}
               onPress={() => {
                  setTouch(false);
               }}
            >
               <CustomText style={{ color: MAIN_COLOR }}>Scores Player</CustomText>
            </TouchableOpacity>
         </View>


         {touch == true ? (
            <Standings leagueCode={leagueCode} name={name} country={country} standingData={standingData} />
         ) : (
            <ScoresStanding leagueCode={leagueCode} name={name} country={country} scoresData={scoresData} />
         )}

         {/* <>
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
         </> */}

      </View>
   )
}

export default LeagueDetails
