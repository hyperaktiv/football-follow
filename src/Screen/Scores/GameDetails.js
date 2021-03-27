import React from 'react'
import { View, StyleSheet } from 'react-native'
import {
   MaterialCommunityIcons,
   Ionicons
} from '@expo/vector-icons';
import GameItem from './GameItem';
import CustomText from '../../Shared/CustomText';

import { useSelector } from 'react-redux';
import { THEMES } from '../../Redux/Reducers/theme';
import { pgHorizontal } from '../../Shared/Theme';

import moment from 'moment';

let gameDetails = require('./data/gameDetails.json');

const GameDetails = ({ route }) => {
   const theme = useSelector(state => state.theme);
   const bg_color = THEMES[theme].bg_color;
   const iconColor = THEMES[theme].iconColor;
   const divide_color = THEMES[theme].divide_color;

   const { matchItem } = route.params;

   return (
      <View style={{ flex: 1, backgroundColor: bg_color, paddingHorizontal: pgHorizontal }}>

         <GameItem matchItem={matchItem} inDetail={true} />

         <View style={[styles.rowTitle, { borderBottomWidth: 1, borderColor: divide_color, marginTop: 5 }]}>
            <CustomText>Match Info</CustomText>
         </View>

         <View style={[styles.row, { borderBottomWidth: 1, borderColor: divide_color }]}>
            <View
               style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
               }}>
               <MaterialCommunityIcons name="ballot" size={24} color={iconColor} />
            </View>
            <View
               style={{
                  flex: 4,
                  paddingLeft: 10,
                  justifyContent: 'center'
               }}>
               <CustomText medium>{gameDetails.match.competition.name}</CustomText>
            </View>
         </View>

         <View style={[styles.row, { borderBottomWidth: 1, borderColor: divide_color }]}>
            <View
               style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
               }}>
               <MaterialCommunityIcons name="table-clock" size={24} color={iconColor} />
            </View>
            <View
               style={{
                  flex: 4,
                  paddingLeft: 10,
                  paddingVertical: 5
               }}>
               <CustomText>{gameDetails.match.matchday}</CustomText>
               <CustomText style={{ fontSize: 12 }}>Match Day</CustomText>
            </View>
         </View>

         <View style={[styles.row, { borderBottomWidth: 1, borderColor: divide_color }]}>
            <View
               style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
               }}>
               <Ionicons name="calendar" size={24} color={iconColor} />
            </View>
            <View
               style={{
                  flex: 4,
                  paddingLeft: 10,
                  paddingVertical: 5
               }}>
               <CustomText>{moment(gameDetails.match.utcDate).format('LLLL')}</CustomText>
               <CustomText style={{ fontSize: 12 }}>Date</CustomText>
            </View>
         </View>

         <View style={[styles.row, { borderBottomWidth: 1, borderColor: divide_color }]}>
            <View style={styles.iconContainer}>
               <MaterialCommunityIcons name="stadium" size={24} color={iconColor} />
            </View>
            <View
               style={{
                  flex: 4,
                  borderBottomWidth: 1,
                  paddingLeft: 10,
                  borderColor: divide_color,
                  paddingVertical: 5
               }}>
               <CustomText>{gameDetails.match.venue}</CustomText>
               <CustomText style={{ fontSize: 12 }}>Venue</CustomText>
            </View>
         </View>


         <View style={[styles.rowTitle, { borderBottomWidth: 1, borderColor: divide_color, marginTop: 5 }]}>
            <CustomText>Referees</CustomText>
         </View>
         {gameDetails.match.referees.map(item => {
            return (
               <View key={item.id} style={[styles.row, { borderBottomWidth: 1, borderColor: divide_color }]}>
                  <View style={styles.refereeIcon}>
                     {item.role == 'MAIN_REFEREE' ? (
                        <MaterialCommunityIcons name="whistle" size={24} color={iconColor} />
                     ) : (
                        <MaterialCommunityIcons name="whistle-outline" size={24} color={iconColor} />
                     )}
                  </View>
                  <View
                     style={{
                        flex: 4,
                        paddingLeft: 10,
                     }}>
                     <CustomText>{item.name}</CustomText>
                     <CustomText style={{ fontSize: 12 }}>{item.nationality}</CustomText>
                  </View>
               </View>
            )
         })}
      </View>
   );
}
const styles = StyleSheet.create({
   rowTitle: {
      height: 30,
      paddingVertical: 5,
   },
   row: {
      flexDirection: 'row',
      height: 45,
   },
   iconContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
   },
   refereeIcon: {
      flex: 1,
      paddingLeft: 30,
      justifyContent: 'center',
      alignItems: 'center',
   }
});

export default GameDetails
