import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import CustomText from '../../Shared/CustomText';
import { DIVIDE_COLOR } from '../../Shared/Theme';


const DrawerSectionItem = ({ title, children }) => {
   return (
      <TouchableOpacity
         style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderBottomWidth: 1,
            borderColor: DIVIDE_COLOR,
            paddingHorizontal: 20,
            paddingVertical: 5,
            marginTop: 5,
         }}>
         <View style={{ width: 30, justifyContent: 'center', alignItems: 'center' }}>
            {children}
         </View>
         <CustomText bold style={{ marginLeft: 10 }}>{title}</CustomText>
      </TouchableOpacity>
   );
}

export default DrawerSectionItem
