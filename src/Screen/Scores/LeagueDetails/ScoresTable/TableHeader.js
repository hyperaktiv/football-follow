import React from 'react';
import { View } from 'react-native';
import { DIVIDE_COLOR } from '../../../../Shared/Theme';
import { MText } from '../../../../Shared/StyledComponents/MText';
import CustomText from '../../../../Shared/CustomText';

const TableHeader = () => {
   return (
      <View style={{
         flexDirection: 'row',
         borderBottomWidth: 1,
         borderColor: DIVIDE_COLOR,
         marginTop: 10,
         paddingVertical: 10
      }}>
         <CustomText center bold color style={{ flex: 1 }}>#</CustomText>
         <CustomText center bold color style={{ flex: 3 }}>Player</CustomText>
         <CustomText center bold color style={{ flex: 3 }}>Team</CustomText>
         <CustomText center bold color style={{ flex: 2 }}>Nationality</CustomText>
         <CustomText center bold color style={{ flex: 1 }}>Goals</CustomText>
      </View>
   )
}

export default TableHeader
