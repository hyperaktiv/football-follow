import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { MText } from '../../../../Shared/StyledComponents/MText';
import { DIVIDE_COLOR } from '../../../../Shared/Theme';

var { width, height } = Dimensions.get('window');


const TableRow = ({ leagueCode, playerID, position, playerName, teamName, nationality, goals }) => {

   return (
      <View style={styles.rowContainer}>
         <MText center style={{
            flex: 1,
            textAlign: 'center',
         }}>{position}</MText>
         {/* <View style={{
            flex: 3,
            flexDirection: 'row',
            alignItems: 'center'
         }}> */}
         <MText small style={{
            flex: 3,
            marginLeft: 0.015 * width,
         }}>{playerName}</MText>
         <MText small style={{
            flex: 3,
         }}>{teamName.substr(0, teamName.length - 3)}</MText>
         <MText style={{
            flex: 2,
            textAlign: 'center'
         }}>{nationality}</MText>
         <MText style={{
            flex: 1,
            textAlign: 'center'
         }}>{goals}</MText>
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
   centerText: {}
})

export default TableRow
