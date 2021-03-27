import React, { useEffect } from 'react';
import { View, Image, Platform } from 'react-native';
import CustomText from '../../Shared/CustomText';
import Header from '../../Shared/Header';
import { MAIN_COLOR } from '../../Shared/Theme';
import Overview from './Display/Overview';
import Formation from './Display/Formation';
// navigation

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const TopTab = createMaterialTopTabNavigator();

import { SvgUri } from 'react-native-svg';

// redux
import { useSelector } from 'react-redux';
import { THEMES } from '../../Redux/Reducers/theme';

const clubData = require('./searchResult.json');

const ClubScreen = () => {
   const theme = useSelector(state => state.theme);
   const bg_color = THEMES[theme].bg_color;
   const divide_color = THEMES[theme].divide_color;

   let flag = '';
   if (Platform.OS === 'ios' || Platform.OS === 'android') {
      flag = <SvgUri height={50} width={50} uri={clubData.crestUrl} />
   } else {
      flag = <Image style={{ height: 50, width: 50 }} source={{ uri: clubData.crestUrl, }} />
   }

   let players = [];
   players.push({ headerTitle: 'Coach', header: true });
   let coachInfo = clubData.squad.filter(item => {
      return item.role == "COACH" || item.role === "ASSISTANT_COACH";
   });
   players = players.concat(coachInfo);

   players.push({ headerTitle: 'Goalkeeper', header: true, name: 'Goalkeeper' });
   let listGoalkeeper = clubData.squad.filter(item => {
      return item.position == "Goalkeeper";
   });
   players = players.concat(listGoalkeeper);

   players.push({ headerTitle: 'Defender', header: true, name: 'Defender' });
   let listDefender = clubData.squad.filter(item => {
      return item.position == "Defender";
   });
   players = players.concat(listDefender);

   players.push({ headerTitle: 'Midfielder', header: true, name: 'Midfielder' });
   let listMidfielder = clubData.squad.filter(item => {
      return item.position == "Midfielder";
   });
   players = players.concat(listMidfielder);

   players.push({ headerTitle: 'Attacker', header: true, name: 'Attacker' });
   let listAttacker = clubData.squad.filter(item => {
      return item.position == "Attacker";
   });
   players = players.concat(listAttacker);

   let stickArr = [];
   players.map((item, index) => {
      if (item.header)
         stickArr.push(index);
   });

   useEffect(() => {
      return () => {
         players = [];
         coachInfo = [];
         listGoalkeeper = [];
         listDefender = [];
         listMidfielder = [];
         listAttacker = [];
         stickArr = [];
      }
   }, [])


   return (
      <>
         <Header title='Search' backAction={true} search={false} />

         <View style={{
            backgroundColor: bg_color,
            height: 100,
            justifyContent: 'center',
            alignItems: 'center',
            borderBottomWidth: 1,
            borderColor: divide_color
         }}>
            {/* flag image here */}
            {flag}

            <CustomText bold medium>{clubData.name.substr(0, clubData.name.length - 3)}</CustomText>
            <CustomText small>{clubData.area.name}</CustomText>
         </View>

         <TopTab.Navigator
            tabBarOptions={{
               labelStyle: { fontSize: 12, color: MAIN_COLOR },
               style: { backgroundColor: bg_color },
            }}>
            <TopTab.Screen name="Overview">
               {() => <Overview clubData={clubData} bgColor={bg_color} />}
            </TopTab.Screen>
            <TopTab.Screen name="Formation">
               {() => <Formation
                  listInfo={players}
                  stickArray={stickArr}
                  bgColor={bg_color} />}
            </TopTab.Screen>
         </TopTab.Navigator>

      </>
   )
}

export default ClubScreen
