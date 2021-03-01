import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { MText } from '../../Shared/StyledComponents/MText';
import { DIVIDE_COLOR } from "../../Shared/Theme";

const LeagueContainer = ({
   name, country, leagueCode, turnIn = true, navigation
}) => {
   // console.log(leagueCode, name, leagueCode, turnIn)
   if (turnIn == true) {
      return (
         <TouchableOpacity
            style={styles.leagueContainer}
            onPress={() => {
               navigation.navigate('LeagueDetails', {
                  leagueCode: leagueCode,
                  name: name,
                  country: country
               });
            }}
         >
            <View style={styles.flagContainer}>
               <Image style={{ width: 30, height: 20, }}
                  source={{ uri: 'https://www.kindpng.com/picc/m/244-2449377_england-flag-hd-png-download.png', }}
               />
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
               }} >
               <Image
                  style={{ width: 10, height: 10, }}
                  source={require('./left-arrow-white.png')}
               />
            </TouchableOpacity>
            <View style={styles.flagContainer}>
               <Image style={{ width: 30, height: 20, }}
                  source={{ uri: 'https://www.kindpng.com/picc/m/244-2449377_england-flag-hd-png-download.png', }}
               />
            </View>
            <View style={{ flex: 5 }}>
               <MText title medium>{name}</MText>
               <MText>{country}</MText>
            </View>
            <View style={styles.flagContainer}>
               <MText>LIKE</MText>
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
