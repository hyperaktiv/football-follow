import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { MAIN_COLOR, GAME_COLOR, DIVIDE_COLOR } from '../../Shared/Theme';

import { AntDesign } from '@expo/vector-icons';

import { useDispatch, useSelector } from 'react-redux';
import { removeFromLike } from '../../Redux/Actions/likeActions';
import CustomText from '../../Shared/CustomText';
import { THEMES } from '../../Redux/Reducers/theme';

import Toast from 'react-native-toast-message';
import { useContext } from 'react';
import AuthGlobal from '../../Context/store/AuthGlobal';
import { removeLikeArray } from '../../Context/actions/Auth.actions';


const ClubItem = ({ teamName, img, goal }) => {
   return (
      <View style={styles.clubDetails}>
         {img && (
            <Image style={{ width: 26, height: 26, }}
               source={{ uri: img }}
            />
         )}
         <View style={styles.details}>
            <CustomText white >{teamName}</CustomText>
            <CustomText title bold medium>{goal}</CustomText>
         </View>
      </View>
   )
}

const GameItem = ({ matchItem }) => {

   const context = useContext(AuthGlobal);

   const dispatch = useDispatch();
   const theme = useSelector(state => state.theme);
   const gameColor = THEMES[theme].gameColor;

   if (!matchItem) {
      return (
         <View style={[styles.container, {
            width: '65%',
            backgroundColor: gameColor,
         }]}>
            <View style={[styles.gameStatus, { flexDirection: 'row' }]}>
               <View style={{
                  width: 5,
                  height: 50,
                  backgroundColor: MAIN_COLOR,
                  borderBottomEndRadius: 10,
                  borderTopRightRadius: 10,
                  borderColor: DIVIDE_COLOR,
                  marginRight: 10
               }} />
               <CustomText medium style={{ color: MAIN_COLOR }}>{`1'`}</CustomText>
            </View>
            <View style={{ flex: 5, }}>
               <ClubItem teamName={'Team A'} goal={0} />
               <View style={{
                  height: 1,
                  backgroundColor: DIVIDE_COLOR,
                  marginVertical: 4
               }} />
               <ClubItem teamName={'Team B'} goal={0} />
            </View>
            <View style={styles.likeBtn}>
               <AntDesign name="star" size={20} color={MAIN_COLOR} />
            </View>
         </View>
      )
   } else {
      return (
         <View style={[styles.container, {
            backgroundColor: gameColor,
         }]}>
            <View style={styles.gameStatus}>
               <CustomText small bold style={{ textAlign: 'center' }}>{matchItem.status}</CustomText>
            </View>
            <View style={{ flex: 5, }}>
               <ClubItem
                  teamName={matchItem.homeTeam.name.substr(0, matchItem.homeTeam.name.length - 3)}
                  goal={matchItem.score.fullTime.homeTeam}
                  img={'https://crests.football-data.org/65.svg'}
               />

               <View style={{
                  height: 1,
                  backgroundColor: DIVIDE_COLOR,
                  marginVertical: 4
               }} />

               <ClubItem
                  teamName={matchItem.awayTeam.name.substr(0, matchItem.awayTeam.name.length - 3)}
                  goal={matchItem.score.fullTime.awayTeam}
                  img={'https://th.bing.com/th/id/R8d7b632bbfd4229c1838bfa79dc9523e?rik=iUWY9lMEYjUGxw&riu=http%3a%2f%2fpngimg.com%2fuploads%2fmanchester_united%2fmanchester_united_PNG22.png&ehk=JYVleEBLednf%2fnX6oX4J2Fz2LOmj0Oj26qu96C9DuDU%3d&risl=&pid=ImgRaw'}
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
                     console.log("remove", matchItem.id);
                     removeLikeArray(context.stateUser.user.uid, matchItem);
                  }, 1000);
               }}
            >
               <AntDesign name="star" size={20} color={MAIN_COLOR} />
            </TouchableOpacity>
         </View>
      )
   }
}

const styles = StyleSheet.create({
   container: {
      flexDirection: 'row',
      borderRadius: 10,
      paddingVertical: 5,
      marginVertical: 5,
      borderWidth: 1,
      borderColor: GAME_COLOR
   },
   gameStatus: {
      flex: 1.5,
      justifyContent: 'center',
      alignItems: 'center',
   },
   clubDetails: {
      flexDirection: 'row',
      paddingVertical: 2,
      alignItems: 'center',
      marginHorizontal: 10
   },
   details: {
      width: '80%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginLeft: 10
   },
   likeBtn: {
      flex: 1.2,
      justifyContent: 'center',
      alignItems: 'center',
   }
});

export default GameItem
