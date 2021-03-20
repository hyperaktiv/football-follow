import React, { useState } from 'react';
import {
   View,
   Image,
   StyleSheet,
   TouchableOpacity
} from 'react-native';
import { GAME_COLOR, DIVIDE_COLOR, GRAY, MAIN_COLOR } from '../../Shared/Theme';
import CustomText from '../../Shared/CustomText';
import { AntDesign } from '@expo/vector-icons';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { addToLike, removeFromLike } from '../../Redux/Actions/likeActions';
import { THEMES } from '../../Redux/Reducers/theme';

import Toast from 'react-native-toast-message';
import { addLikeArray, removeLikeArray } from '../../Context/actions/Auth.actions';
import { useContext } from 'react';
import AuthGlobal from '../../Context/store/AuthGlobal';


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
   const context = useContext(AuthGlobal);
   // redux action
   const dispatch = useDispatch();
   const [isLike, setIsLike] = useState(false);

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
               img={'https://logodownload.org/wp-content/uploads/2017/02/manchester-city-fc-logo-escudo-badge.png'}
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
         {isLike == false ? (
            <TouchableOpacity style={styles.likeBtn}
               onPress={() => {
                  // console.log('matchItem like action: ', matchItem);
                  setIsLike(!isLike);
                  setTimeout(() => {
                     console.log("add from scores: ", matchItem.id)
                     dispatch(addToLike(matchItem));
                     addLikeArray(context.stateUser.user.uid, matchItem);
                  }, 1000);
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
                  setIsLike(!isLike);
                  setTimeout(() => {
                     console.log("remove from scores: ", matchItem.id)
                     removeLikeArray(matchItem);
                     dispatch(removeFromLike(matchItem));
                  }, 1000);
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
