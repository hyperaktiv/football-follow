import React from 'react';
import { View, Text } from 'react-native';
import { DIVIDE_COLOR } from '../../../../Shared/Theme';
import { MText } from '../../../../Shared/StyledComponents/MText';

const TableHeader = () => {
   return (
      <View style={{
         flexDirection: 'row',
         borderBottomWidth: 1,
         borderColor: DIVIDE_COLOR,
         marginTop: 10,
         paddingVertical: 10
      }}>
         <MText center bold color style={{ flex: 1 }}>#</MText>
         <MText center bold color style={{ flex: 5 }}>Team</MText>
         <MText center bold color style={{ flex: 1 }}>P</MText>
         <MText center bold color style={{ flex: 1 }}>W</MText>
         <MText center bold color style={{ flex: 1 }}>D</MText>
         <MText center bold color style={{ flex: 1 }}>L</MText>
         <MText center bold color style={{ flex: 1 }}>Pts</MText>
         <MText center bold color style={{ flex: 3 }}>Form</MText>

      </View>
   )
}

export default TableHeader
