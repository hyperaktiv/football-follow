import React from 'react'
import { View, StyleSheet } from 'react-native';
import CustomText from '../../../Shared/CustomText';
import { pgHorizontal, DIVIDE_COLOR } from '../../../Shared/Theme';

const Overview = ({ clubData, bgColor }) => {
   return (
      <View style={{
         flex: 1,
         paddingHorizontal: pgHorizontal,
         backgroundColor: bgColor
      }}>
         <View style={styles.rowText}>
            <CustomText underline>Founded:</CustomText>
            <CustomText bold>{clubData.founded}</CustomText>
         </View>
         <View style={styles.rowText}>
            <CustomText underline>Venue (Home stadium):</CustomText>
            <CustomText bold>{clubData.venue}</CustomText>
         </View>
         <View style={styles.rowText}>
            <CustomText underline>Club colors:</CustomText>
            <CustomText bold>{clubData.clubColors}</CustomText>
         </View>
         <View style={styles.rowText}>
            <CustomText underline>Address:</CustomText>
            <CustomText bold>{clubData.address}</CustomText>
         </View>
         <View style={styles.rowText}>
            <CustomText underline>Phone:</CustomText>
            <CustomText bold>{clubData.phone}</CustomText>
         </View>
         <View style={styles.rowText}>
            <CustomText underline>Email:</CustomText>
            <CustomText bold>{clubData.email}</CustomText>
         </View>
         <View style={styles.rowText}>
            <CustomText underline>Website:</CustomText>
            <CustomText bold>{clubData.website}</CustomText>
         </View>
      </View>
   )
}
const styles = StyleSheet.create({
   rowText: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: 15,
      borderBottomWidth: 1,
      borderColor: DIVIDE_COLOR
   }
});
export default Overview
