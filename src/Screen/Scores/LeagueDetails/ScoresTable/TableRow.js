import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import CustomText from '../../../../Shared/CustomText';
import { DIVIDE_COLOR } from '../../../../Shared/Theme';

var { width, height } = Dimensions.get('window');


const TableRow = ({ leagueCode, playerID, position, playerName, teamName, nationality, goals }) => {

   return (
      <View style={styles.rowContainer}>
         <CustomText center style={{
            flex: 1,
            textAlign: 'center',
         }}>{position}</CustomText>
         <CustomText small style={{
            flex: 3,
            marginLeft: 0.015 * width,
         }}>{playerName}</CustomText>
         <CustomText small style={{
            flex: 3,
         }}>{teamName.substr(0, teamName.length - 3)}</CustomText>
         <CustomText style={{
            flex: 2,
            textAlign: 'center'
         }}>{nationality}</CustomText>
         <CustomText style={{
            flex: 1,
            textAlign: 'center'
         }}>{goals}</CustomText>
      </View>
   )
}
const styles = StyleSheet.create({
   rowContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 15,
      borderBottomWidth: 1,
      borderColor: DIVIDE_COLOR,
   },
})

export default TableRow
