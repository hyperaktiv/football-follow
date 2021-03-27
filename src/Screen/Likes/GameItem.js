import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { MAIN_COLOR } from '../../Shared/Theme';
import { AntDesign } from '@expo/vector-icons';

import { useDispatch, useSelector } from 'react-redux';
import { removeFromLike } from '../../Redux/Actions/likeActions';
import CustomText from '../../Shared/CustomText';
import { THEMES } from '../../Redux/Reducers/theme';

import Toast from 'react-native-toast-message';
import { useNavigation } from '@react-navigation/core';


const ClubItem = ({ teamName, img, goal, theme }) => {
   return (
      <View style={styles.clubDetails}>
         {img && (
            <Image style={{ width: 22, height: 22, }}
               source={{ uri: img }}
            />
         )}
         <View style={styles.details}>
            <CustomText style={{ color: theme == 'dark' ? '#aaa' : 'black' }} >{teamName}</CustomText>
            <CustomText title bold medium>{goal}</CustomText>
         </View>
      </View>
   )
}

const GameItem = ({ matchItem }) => {
   const navigation = useNavigation();
   // redux
   const dispatch = useDispatch();

   const theme = useSelector(state => state.theme);
   const gameColor = THEMES[theme].gameColor;
   const divide_color = THEMES[theme].divide_color;

   if (!matchItem) {
      return (
         <View style={[styles.container, {
            width: '65%',
            backgroundColor: gameColor,
            borderColor: divide_color,
         }]}>
            <View style={[styles.gameStatus, { flexDirection: 'row' }]}>
               <View style={{
                  width: 5,
                  height: 50,
                  backgroundColor: MAIN_COLOR,
                  borderBottomEndRadius: 10,
                  borderTopRightRadius: 10,
                  borderColor: divide_color,
                  marginRight: 10
               }} />
               <CustomText medium style={{ color: MAIN_COLOR }}>{`1'`}</CustomText>
            </View>
            <View style={{ flex: 5, alignItems: 'center' }}>

               <View style={styles.details}>
                  <CustomText style={{ color: theme == 'dark' ? '#aaa' : 'black' }} >Team A</CustomText>
                  <CustomText title bold medium>0</CustomText>
               </View>

               <View style={{
                  width: '85%',
                  height: 1,
                  backgroundColor: divide_color,
                  marginVertical: 2
               }} />

               <View style={styles.details}>
                  <CustomText style={{ color: theme == 'dark' ? '#aaa' : 'black' }} >Team B</CustomText>
                  <CustomText title bold medium>0</CustomText>
               </View>
            </View>

            <View style={[styles.likeBtn]}>
               <AntDesign name="star" size={20} color={MAIN_COLOR} />
            </View>
         </View>
      )
   } else {
      return (
         <TouchableOpacity style={[styles.container, {
            backgroundColor: gameColor,
            borderColor: divide_color,
         }]}
            onPress={() => navigation.navigate('GameDetails', {
               matchItem: matchItem
            })}
         >
            <View style={styles.gameStatus}>
               <CustomText small bold style={{ textAlign: 'center' }}>{matchItem.status}</CustomText>
            </View>
            <View style={{ flex: 5, }}>
               <ClubItem
                  theme={theme}
                  teamName={matchItem.homeTeam.name.substr(0, matchItem.homeTeam.name.length - 3)}
                  goal={matchItem.score.fullTime.homeTeam}
                  img={matchItem.homeTeam.crestUrl}
               />

               <View style={{
                  height: 1,
                  backgroundColor: divide_color,
                  marginVertical: 2
               }} />

               <ClubItem
                  theme={theme}
                  teamName={matchItem.awayTeam.name.substr(0, matchItem.awayTeam.name.length - 3)}
                  goal={matchItem.score.fullTime.awayTeam}
                  img={matchItem.awayTeam.crestUrl}
               />
            </View>
            <TouchableOpacity style={styles.likeBtn}
               onPress={() => {
                  Toast.show({
                     bottomOffset: 60,
                     type: "success",
                     text1: `This game's already removed from Likes`,
                     text2: `-`,
                  });
                  setTimeout(() => {
                     dispatch(removeFromLike(matchItem));
                  }, 500);
               }}
            >
               <AntDesign name="star" size={20} color={MAIN_COLOR} />
            </TouchableOpacity>
         </TouchableOpacity>
      )
   }
}

const styles = StyleSheet.create({
   container: {
      flexDirection: 'row',
      borderRadius: 10,
      paddingVertical: 3,
      marginBottom: 8,
      borderWidth: 1,

      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,

      elevation: 4,
   },
   gameStatus: {
      flex: 1.2,
      justifyContent: 'center',
      alignItems: 'center',
   },
   clubDetails: {
      flexDirection: 'row',
      paddingVertical: 2,
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 5
   },
   details: {
      width: '80%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
   },
   likeBtn: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
   }
});

export default GameItem
