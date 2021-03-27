import React from 'react';
import { View } from 'react-native';
import CustomText from '../../Shared/CustomText';
import { DIVIDE_COLOR, pgHorizontal } from '../../Shared/Theme';


const DrawerSectionTitle = ({ title }) => {
   return (
      <View
         style={{
            flex: 1,
            justifyContent: 'center',
            paddingLeft: pgHorizontal,
            paddingVertical: 10,
            borderBottomColor: DIVIDE_COLOR,
            borderBottomWidth: 1,
            marginTop: 10
         }}>
         <CustomText bold style={{ fontSize: 12 }}>{title.toUpperCase()}</CustomText>
      </View>
   );
}

export default DrawerSectionTitle
