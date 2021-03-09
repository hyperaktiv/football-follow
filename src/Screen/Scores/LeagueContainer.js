import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { MText } from '../../Shared/StyledComponents/MText';
import { DIVIDE_COLOR, GRAY } from "../../Shared/Theme";

import { AntDesign } from '@expo/vector-icons';

import { SvgUri } from 'react-native-svg';

const LeagueContainer = ({
   name, country, leagueCode, flagImg, turnIn = true, navigation
}) => {

   let flag = '';
   if (Platform.OS === 'ios' || Platform.OS === 'android') {
      flag = <SvgUri width={30} height={20} uri={flagImg} />
   } else {
      flag = <Image style={{ width: 30, height: 20, }} source={{ uri: flagImg, }} />
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
            <View style={{ flex: 5 }}>
               <MText title medium>{name}</MText>
               <MText>{country}</MText>
            </View>
            {turnIn && (
               <View style={styles.flagContainer}>
                  <Image
                     style={{ width: 10, height: 10, }}
                     source={require('./right-arrow-white.png')}
                  />
               </View>
            )}
         </TouchableOpacity>
      );
   }

   // display on the TableScreen with the LIKE icon
   else {
      return (
         <View style={styles.leagueContainer}>
            <TouchableOpacity
               style={{
                  justifyContent: 'center',
                  width: 20
               }}
               onPress={() => {
                  navigation.goBack();
               }}
            >
               <Image style={{ width: 10, height: 10, }}
                  source={require('./left-arrow-white.png')}
               />
            </TouchableOpacity>
            <View style={styles.flagContainer}>

               {/**render flag */}
               {flag}

            </View>
            <View style={{ flex: 5 }}>
               <MText title medium>{name}</MText>
               <MText>{country}</MText>
            </View>
            <TouchableOpacity style={styles.flagContainer}>
               <AntDesign name="staro" size={20} color={GRAY} />
               {/* <AntDesign name="star" size={20} color={GRAY} /> */}
            </TouchableOpacity>
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
      width: 30,
      height: 20
   },
})

export default LeagueContainer
