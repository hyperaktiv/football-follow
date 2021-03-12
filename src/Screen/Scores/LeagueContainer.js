import React from 'react';
import {
   View, Image,
   TouchableOpacity,
   StyleSheet,
   Platform
} from 'react-native';
import { DIVIDE_COLOR, GRAY } from "../../Shared/Theme";
import { AntDesign } from '@expo/vector-icons';
import { SvgUri } from 'react-native-svg';
import CustomText from '../../Shared/CustomText';
import { useSelector } from 'react-redux';
import { THEMES } from '../../Redux/Reducers/theme';

const LeagueContainer = ({
   name, country, leagueCode, flagImg, turnIn = true, navigation
}) => {
   const theme = useSelector(state => state.theme);
   const txtColor = THEMES[theme].txtColor;

   let flag = '';
   if (Platform.OS === 'ios' || Platform.OS === 'android') {
      flag = <SvgUri width={'100%'} height={'80%'} uri={flagImg} />
   } else {
      flag = <Image style={{ width: '100%', height: '80%', }} source={{ uri: flagImg, }} />
   }

   // display on the ScoresScreen with the right arrow
   if (turnIn == true) {
      return (
         <TouchableOpacity
            style={styles.leagueContainer}
            onPress={() => {
               navigation.navigate('LeagueDetails', {
                  name: name,
                  country: country,
                  leagueCode: leagueCode,
                  flagImg: flagImg
               });
            }}
         >
            <View style={styles.flagContainer}>
               {/**render flag */}
               {flag}
            </View>
            <View style={{ flex: 5, marginLeft: 15 }}>
               <CustomText title medium>{name}</CustomText>
               <CustomText>{country}</CustomText>
            </View>
            {turnIn && (
               <View style={styles.flagContainer}>
                  {/* <Image
                     style={{ width: 10, height: 10, }}
                     source={require('./right-arrow-white.png')}
                  /> */}
                  <AntDesign name="right" size={24} color={txtColor} />
               </View>
            )}
         </TouchableOpacity>
      );
   }

   // display on the TableScreen with the LIKE icon
   else {
      return (
         <View style={styles.leagueContainer}>
            <View style={styles.flagContainer}>
               {/**render flag */}
               {flag}
            </View>
            <View style={{ flex: 5, marginLeft: 15 }}>
               <CustomText title medium>{name}</CustomText>
               <CustomText>{country}</CustomText>
            </View>
         </View>
      )
   }
}
const styles = StyleSheet.create({
   leagueContainer: {
      flexDirection: 'row',
      paddingVertical: 5,
      marginVertical: 10,
      borderBottomWidth: 1,
      borderColor: DIVIDE_COLOR
   },
   flagContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
   },
})

export default LeagueContainer
