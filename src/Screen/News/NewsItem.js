import React from 'react'
import { View, TouchableOpacity, Image } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { GAME_COLOR, WHITE, DIVIDE_COLOR } from '../../Shared/Theme';
import { MText } from '../../Shared/StyledComponents/MText';

const NewsItem = ({ title, time, link, description }) => {

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
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 5
         }}>
            <Image style={{
               width: '100%',
               height: '100%',
               resizeMode: "contain",
            }}
               source={{
                  uri: description.match(/https?:\/\/[^/\s]+\/\S+\.(jpg|png|gif)/g)[0],
               }}
            />
         </View>

         <View style={{
            flex: 2,
            justifyContent: 'space-between',
            paddingHorizontal: 10,
         }}>
            <MText white bold>{title}</MText>
            <View style={{ flexDirection: 'row' }}>
               <Entypo name="clock" size={14} color={WHITE} style={{ marginRight: 10 }} />
               <MText small>{time}</MText>
            </View>
         </View>

      </TouchableOpacity>
   )
}

export default NewsItem
