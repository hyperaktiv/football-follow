import React from 'react';
import { View } from 'react-native';
import { MText } from '../../Shared/StyledComponents/MText';
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
            marginTop: 15
         }}>
         <MText bold small>{title.toUpperCase()}</MText>
      </View>
   );
}

export default DrawerSectionTitle
