import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { MText } from '../../Shared/StyledComponents/MText';
import { MAIN_COLOR, GAME_COLOR, DIVIDE_COLOR, GRAY } from '../../Shared/Theme';

import { AntDesign } from '@expo/vector-icons';


const ClubItem = ({ teamName, img, goal }) => {
   return (
      <View style={styles.clubDetails}>
         {img && (
            <Image style={{ width: 26, height: 26, }}
               source={{ uri: img }}
            />
         )}
         <View style={styles.details}>
            <MText white>{teamName}</MText>
            <MText title bold medium>{goal}</MText>
         </View>
      </View>
   )
}

const GameContainer = ({ teamA, goalA, imgA, teamB, goalB, imgB, status }) => {

   if (status === '') {
      return (
         <View style={[styles.container, { width: '65%' }]}>
            <View style={styles.gameStatus}>
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
               {/* <AntDesign name="staro" size={20} color={GRAY} /> */}
               <AntDesign name="star" size={20} color={MAIN_COLOR} />
            </View>
         </View>
      )
   } else {
      return (
         <View style={styles.container}>
            <View style={styles.gameStatus}>
               <MText>{status}</MText>
            </View>
            <View style={{ flex: 5, }}>
               <ClubItem teamName={teamA} goal={goalA} img={imgA} />
               <View style={{
                  height: 1,
                  backgroundColor: DIVIDE_COLOR,
                  marginVertical: 4
               }} />
               <ClubItem teamName={teamB} goal={goalB} img={imgB} />
            </View>
            <View style={styles.likeBtn}>
               {/* <AntDesign name="staro" size={20} color={GRAY} /> */}
               <AntDesign name="star" size={20} color={MAIN_COLOR} />
            </View>
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
      marginBottom: 5,
   },
   gameStatus: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row'
   },
   clubDetails: {
      flexDirection: 'row',
      paddingVertical: 2,
      alignItems: 'center',
   },
   details: {
      width: '80%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginLeft: 10
   },
   likeBtn: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
   }
});

export default GameContainer
