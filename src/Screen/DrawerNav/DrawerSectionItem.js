import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { THEMES } from '../../Redux/Reducers/theme';
import CustomText from '../../Shared/CustomText';


const DrawerSectionItem = ({ title, children }) => {
   const theme = useSelector(state => state.theme);
   const divide_color = THEMES[theme].divide_color;

   return (
      <TouchableOpacity
         style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderBottomWidth: 1,
            borderColor: divide_color,
            paddingHorizontal: 20,
            paddingVertical: 5,
         }}>
         <View style={{ width: 30, justifyContent: 'center', alignItems: 'center' }}>
            {children}
         </View>
         <CustomText bold style={{ marginLeft: 10 }}>{title}</CustomText>
      </TouchableOpacity>
   );
}

export default DrawerSectionItem
