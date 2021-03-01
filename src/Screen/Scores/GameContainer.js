import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { MText } from '../../Shared/StyledComponents/MText';
import { GAME_COLOR, DIVIDE_COLOR } from '../../Shared/Theme';


const GameContainer = ({ teamA, goalA, imgA, teamB, goalB, imgB, status }) => {

   return (
      <View style={styles.container}>
         <View style={styles.gameStatus}>
            <MText>{status}</MText>
         </View>
         <View style={{ flex: 5, }}>
            <View style={styles.clubDetails}>
               <Image style={{ width: 26, height: 26, }}
                  source={{ uri: 'https://crests.football-data.org/65.svg' }}
               />
               <View style={styles.details}>
                  <MText>{teamA}</MText>
                  <MText title bold medium>{goalA}</MText>
               </View>
            </View>

            <View style={{
               height: 1,
               backgroundColor: DIVIDE_COLOR,
               marginVertical: 4
            }} />

            <View style={styles.clubDetails}>
               <Image style={{ width: 26, height: 26, }}
                  source={{ uri: 'https://assets.stickpng.com/images/580b57fcd9996e24bc43c4e7.png' }}
               />
               <View style={styles.details}>
                  <MText style={{ color: 'white', fontSize: 14 }}>{teamB}</MText>
                  <MText title bold medium>{goalB}</MText>
               </View>
            </View>

         </View>
         <View style={styles.likeBtn}>
            <MText>LIKE</MText>
         </View>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      backgroundColor: GAME_COLOR,
      flexDirection: 'row',
      borderRadius: 10,
      paddingVertical: 5,
      marginBottom: 5
   },
   gameStatus: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
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
