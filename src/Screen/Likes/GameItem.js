import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { MText } from '../../Shared/StyledComponents/MText';
import { MAIN_COLOR, GAME_COLOR, DIVIDE_COLOR, GRAY } from '../../Shared/Theme';

import { AntDesign } from '@expo/vector-icons';

import { useDispatch } from 'react-redux';
import { removeFromLike } from '../../Redux/Actions/likeActions';

const ClubItem = ({ teamName, img, goal }) => {
   return (
      <View style={styles.clubDetails}>
         {img && (
            <Image style={{ width: 26, height: 26, }}
               source={{ uri: img }}
            />
         )}
         <View style={styles.details}>
            <MText white >{teamName}</MText>
            <MText title bold medium>{goal}</MText>
         </View>
      </View>
   )
}

const GameItem = ({ matchItem }) => {

   const dispatch = useDispatch();

   if (!matchItem) {
      return (
         <View style={[styles.container, { width: '65%' }]}>
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
               <MText medium style={{ color: MAIN_COLOR }}>{`1'`}</MText>
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
         <View style={styles.container}>
            <View style={styles.gameStatus}>
               <MText small bold style={{ textAlign: 'center' }}>{matchItem.status}</MText>
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
                  img={'https://assets.stickpng.com/images/580b57fcd9996e24bc43c4e7.png'}
               />
            </View>
            <TouchableOpacity style={styles.likeBtn}
               onPress={() => {
                  dispatch(removeFromLike(matchItem))
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
      backgroundColor: GAME_COLOR,
      flexDirection: 'row',
      borderRadius: 10,
      paddingVertical: 5,
      marginVertical: 5
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
