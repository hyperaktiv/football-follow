import React from 'react';
import {
   View,
   Image,
   StyleSheet,
   TouchableOpacity,
   Platform
} from 'react-native';
import { MAIN_COLOR } from '../../Shared/Theme';
import CustomText from '../../Shared/CustomText';
import { AntDesign } from '@expo/vector-icons';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { addToLike, removeFromLike } from '../../Redux/Actions/likeActions';
import { THEMES } from '../../Redux/Reducers/theme';

import Toast from 'react-native-toast-message';
import { SvgUri } from 'react-native-svg';
import { useNavigation } from '@react-navigation/core';

const ClubItem = ({ teamName, img, goal, theme }) => {

   let flag = '';
   if (Platform.OS === 'ios' || Platform.OS === 'android') {
      flag = <SvgUri width={25} height={25} uri={img} source={{ uri: img, }} />
   } else {
      flag = <Image style={{ height: 25, width: 25 }} source={{ uri: img, }} />
   }

   return (
      <View style={styles.clubDetails}>
         {flag}
         <View style={styles.details}>
            <CustomText style={{ color: theme == 'dark' ? '#aaa' : 'black' }} >{teamName}</CustomText>
            <CustomText title bold medium>{goal}</CustomText>
         </View>
      </View>
   )
}

const GameItem = ({ matchItem, liked = false, inDetail = false }) => {
   const navigation = useNavigation();
   const dispatch = useDispatch();

   const theme = useSelector(state => state.theme);
   const iconColor = THEMES[theme].iconColor;
   const gameColor = THEMES[theme].gameColor
   const divide_color = THEMES[theme].divide_color;

   if (inDetail == false)
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
                  img={matchItem.homeTeam.crestUrl != undefined ? matchItem.homeTeam.crestUrl : 'https://logodownload.org/wp-content/uploads/2017/02/manchester-city-fc-logo-escudo-badge.png'}
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
                  img={matchItem.awayTeam.crestUrl != undefined ? matchItem.awayTeam.crestUrl : 'https://th.bing.com/th/id/R8d7b632bbfd4229c1838bfa79dc9523e?rik=iUWY9lMEYjUGxw&riu=http%3a%2f%2fpngimg.com%2fuploads%2fmanchester_united%2fmanchester_united_PNG22.png&ehk=JYVleEBLednf%2fnX6oX4J2Fz2LOmj0Oj26qu96C9DuDU%3d&risl=&pid=ImgRaw'}
               />

            </View>


            { liked == false ? (
               <TouchableOpacity style={styles.likeBtn}
                  onPress={() => {

                     setTimeout(() => {
                        dispatch(addToLike(matchItem));
                     }, 500);
                     Toast.show({
                        bottomOffset: 60,
                        type: "info",
                        text1: 'This game is already add to Likes',
                        text2: 'Go to Like to take a look'
                     })
                  }}
               >
                  <AntDesign name="staro" size={20} color={iconColor} />
               </TouchableOpacity>
            ) : (
               <TouchableOpacity style={styles.likeBtn}
                  onPress={() => {

                     setTimeout(() => {
                        dispatch(removeFromLike(matchItem));
                     }, 500);

                     Toast.show({
                        bottomOffset: 60,
                        type: "success",
                        text1: `This game's already removed from Likes`,
                        text2: `-`,
                     });
                  }}
               >
                  <AntDesign name="star" size={20} color={MAIN_COLOR} />
               </TouchableOpacity>
            )}

         </TouchableOpacity>
      )
   else
      return (
         <TouchableOpacity style={[styles.container, {
            backgroundColor: gameColor,
            borderColor: divide_color,
         }]}>
            <View style={styles.gameStatus}>
               <CustomText small bold style={{ textAlign: 'center' }}>{matchItem.status}</CustomText>
            </View>
            <View style={{ flex: 5, }}>

               <View style={styles.clubDetails}>
                  {Platform.OS === 'ios' || Platform.OS === 'android' ? (
                     <SvgUri width={25} height={25} uri={img} source={{ uri: matchItem.homeTeam.crestUrl, }} />
                  ) : (
                     <Image style={{ height: 25, width: 25 }} source={{ uri: matchItem.homeTeam.crestUrl, }} />
                  )}
                  <View style={[styles.details, { paddingRight: 10 }]}>
                     <CustomText style={{ color: theme == 'dark' ? '#aaa' : 'black' }} >{matchItem.homeTeam.name.substr(0, matchItem.homeTeam.name.length - 3)}</CustomText>
                     <CustomText title bold medium>{matchItem.score.fullTime.homeTeam}</CustomText>
                  </View>
               </View>

               <View style={{
                  height: 1,
                  backgroundColor: divide_color,
                  marginVertical: 2
               }} />

               <View style={styles.clubDetails}>
                  {Platform.OS === 'ios' || Platform.OS === 'android' ? (
                     <SvgUri width={25} height={25} uri={img} source={{ uri: matchItem.awayTeam.crestUrl, }} />
                  ) : (
                     <Image style={{ height: 25, width: 25 }} source={{ uri: matchItem.awayTeam.crestUrl, }} />
                  )}
                  <View style={[styles.details, { paddingRight: 10 }]}>
                     <CustomText style={{ color: theme == 'dark' ? '#aaa' : 'black' }} >{matchItem.awayTeam.name.substr(0, matchItem.awayTeam.name.length - 3)}</CustomText>
                     <CustomText title bold medium>{matchItem.score.fullTime.awayTeam}</CustomText>
                  </View>
               </View>

            </View>
         </TouchableOpacity>
      )
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
      justifyContent: 'space-around'
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
