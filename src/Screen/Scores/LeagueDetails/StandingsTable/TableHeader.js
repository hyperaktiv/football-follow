import React from 'react';
import { View, Text } from 'react-native';
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
         <CustomText center bold color style={{ flex: 5 }}>Team</CustomText>
         <CustomText center bold color style={{ flex: 1 }}>P</CustomText>
         <CustomText center bold color style={{ flex: 1 }}>W</CustomText>
         <CustomText center bold color style={{ flex: 1 }}>D</CustomText>
         <CustomText center bold color style={{ flex: 1 }}>L</CustomText>
         <CustomText center bold color style={{ flex: 1 }}>Pts</CustomText>
         <CustomText center bold color style={{ flex: 3 }}>Form</CustomText>

      </View>
   )
}

export default TableHeader
