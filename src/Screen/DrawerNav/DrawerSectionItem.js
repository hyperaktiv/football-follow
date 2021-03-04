import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { MText } from '../../Shared/StyledComponents/MText';
import { DIVIDE_COLOR, pgHorizontal } from '../../Shared/Theme';


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

         <MText bold white style={{ marginLeft: 10 }}>{title}</MText>

      </TouchableOpacity>
   );
}

export default DrawerSectionItem
