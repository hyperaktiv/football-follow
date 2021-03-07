import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import { GAME_COLOR, WHITE, DIVIDE_COLOR } from '../../Shared/Theme';
import { MText } from '../../Shared/StyledComponents/MText';

import { Entypo } from '@expo/vector-icons';

const HighlightItem = ({ title, date, link, thumbnail, leagueName }) => {
   return (
      <TouchableOpacity
         style={{
            height: 100,
            flexDirection: 'row',
            backgroundColor: GAME_COLOR,
            paddingHorizontal: 5,
            paddingVertical: 10,
            borderBottomWidth: 1,
            borderColor: DIVIDE_COLOR
         }}>

         <View style={{
            flex: 2,
            justifyContent: 'center',
            alignItems: 'center',
         }}>
            {thumbnail !== '' ? (
               <Image style={{
                  width: '100%',
                  height: '100%',
                  resizeMode: "contain",
               }}
                  source={{ uri: thumbnail, }}
               />
            ) : (
               <Text style={{ color: WHITE, textAlign: 'center' }}>No Video</Text>
            )}
         </View>

         <View style={{
            flex: 3,
            justifyContent: 'space-between',
            paddingHorizontal: 10,
         }}>
            <View style={{ height: '50%', justifyContent: 'space-between' }}>
               <MText white bold>{title}</MText>
               <MText small>{leagueName}</MText>
            </View>

            <View style={{ flexDirection: 'row' }}>
               <Entypo name="clock" size={14} color={WHITE} style={{ marginRight: 10 }} />
               <MText small>{new Date(date).toDateString()}</MText>
            </View>
         </View>

      </TouchableOpacity>
   )
}

export default HighlightItem
