import React from 'react';
import { View } from 'react-native';
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
         <MText center bold color style={{ flex: 3 }}>Player</MText>
         <MText center bold color style={{ flex: 3 }}>Team</MText>
         <MText center bold color style={{ flex: 2 }}>Nationality</MText>
         <MText center bold color style={{ flex: 1 }}>Goals</MText>
      </View>
   )
}

export default TableHeader
