import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { THEMES } from '../../../Redux/Reducers/theme';
import CustomText from '../../../Shared/CustomText';
import { pgHorizontal } from '../../../Shared/Theme';

const Overview = ({ clubData, bgColor }) => {
   const theme = useSelector(state => state.theme);
   const divide_color = THEMES[theme].divide_color;

   return (
      <ScrollView style={{
         flex: 1,
         paddingHorizontal: pgHorizontal,
         backgroundColor: bgColor
      }}>
         <View style={[styles.rowText, {
            borderBottomWidth: 1,
            borderColor: divide_color
         }]}>
            <CustomText underline>Founded:</CustomText>
            <CustomText bold>{clubData.founded}</CustomText>
         </View>
         <View style={[styles.rowText, {
            borderBottomWidth: 1,
            borderColor: divide_color
         }]}>
            <CustomText underline>Venue (Home stadium):</CustomText>
            <CustomText bold>{clubData.venue}</CustomText>
         </View>
         <View style={[styles.rowText, {
            borderBottomWidth: 1,
            borderColor: divide_color
         }]}>
            <CustomText underline>Club colors:</CustomText>
            <CustomText bold>{clubData.clubColors}</CustomText>
         </View>
         <View style={[styles.rowText, {
            borderBottomWidth: 1,
            borderColor: divide_color
         }]}>
            <CustomText underline>Address:</CustomText>
            <CustomText bold>{clubData.address}</CustomText>
         </View>
         <View style={[styles.rowText, {
            borderBottomWidth: 1,
            borderColor: divide_color
         }]}>
            <CustomText underline>Phone:</CustomText>
            <CustomText bold>{clubData.phone}</CustomText>
         </View>
         <View style={[styles.rowText, {
            borderBottomWidth: 1,
            borderColor: divide_color
         }]}>
            <CustomText underline>Email:</CustomText>
            <CustomText bold>{clubData.email}</CustomText>
         </View>
         <View style={[styles.rowText, {
            borderBottomWidth: 1,
            borderColor: divide_color
         }]}>
            <CustomText underline>Website:</CustomText>
            <CustomText bold>{clubData.website}</CustomText>
         </View>
      </ScrollView>
   )
}
const styles = StyleSheet.create({
   rowText: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: 15,
   }
});
export default Overview
