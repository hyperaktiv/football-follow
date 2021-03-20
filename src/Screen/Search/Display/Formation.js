import React from 'react'
import { View, FlatList } from 'react-native';
import CustomText from '../../../Shared/CustomText';
import { pgHorizontal, DIVIDE_COLOR } from '../../../Shared/Theme';

const Formation = ({ listInfo, stickArray, bgColor }) => {

   const renderItem = ({ item }) => {
      if (item.header) {
         return (
            <View style={{
               backgroundColor: bgColor,
               paddingHorizontal: pgHorizontal,
               justifyContent: 'space-between',
               paddingVertical: 10,
               borderBottomWidth: 1,
               borderColor: DIVIDE_COLOR,
               marginBottom: 10
            }}>
               <CustomText bold medium underline>{item.headerTitle}</CustomText>
            </View>
         )
      } else {
         return (
            <View style={{
               backgroundColor: bgColor,
               width: '80%',
               padding: 5,
               flexDirection: 'row',
               paddingHorizontal: pgHorizontal,
               marginLeft: 20,
               borderBottomWidth: 1,
               borderColor: DIVIDE_COLOR
            }}>
               <CustomText style={{ flex: 1.5 }}>{item.name}</CustomText>
               <CustomText style={{ flex: 1, marginLeft: 20 }}>{item.nationality}</CustomText>
            </View>
         )
      }
   }

   return (
      <View style={{ flex: 1, backgroundColor: bgColor }}>
         <FlatList
            data={listInfo}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            stickyHeaderIndices={stickArray}
         />
      </View>
   )
}

export default Formation
