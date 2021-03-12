import React from 'react';
import {
   View,
   Image,
   StyleSheet,
   TouchableOpacity
} from 'react-native';
import { GAME_COLOR, DIVIDE_COLOR, GRAY } from '../../Shared/Theme';
import CustomText from '../../Shared/CustomText';
import { AntDesign } from '@expo/vector-icons';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { addToLike } from '../../Redux/Actions/likeActions';
import { THEMES } from '../../Redux/Reducers/theme';


const ClubItem = ({ teamName, img, goal }) => {
   return (
      <View style={styles.clubDetails}>
         {img ? (
            <Image style={{ width: 26, height: 26, }}
               source={{ uri: img }}
            />
         ) : (
            <View style={{
               width: 26,
               height: 26,
               borderWidth: 1,
               borderColor: GRAY
            }} />
         )}
         <View style={styles.details}>
            <CustomText white >{teamName}</CustomText>
            <CustomText title bold medium>{goal}</CustomText>
         </View>
      </View>
   )
}

const GameItem = ({ matchItem }) => {
   // redux action
   const dispatch = useDispatch();
   const theme = useSelector(state => state.theme);
   const iconColor = THEMES[theme].iconColor;
   const gameColor = THEMES[theme].gameColorp;

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
               img={'https://assets.stickpng.com/images/580b57fcd9996e24bc43c4e7.png'}
            />

         </View>
         <TouchableOpacity style={styles.likeBtn}
            onPress={() => {
               console.log('matchItem', matchItem);
               dispatch(addToLike(matchItem));
            }}
         >
            <AntDesign name="staro" size={20} color={iconColor} />
            {/* <AntDesign name="star" size={20} color={GRAY} /> */}
         </TouchableOpacity>

      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flexDirection: 'row',
      borderRadius: 10,
      paddingVertical: 5,
      marginBottom: 5,
      borderWidth: 1,
      borderColor: GAME_COLOR,
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
      justifyContent: 'space-around'
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

export default GameItem
