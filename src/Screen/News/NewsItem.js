import React from 'react'
import { View, TouchableOpacity, Image, Text } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { GAME_COLOR, WHITE, DIVIDE_COLOR } from '../../Shared/Theme';
import { MText } from '../../Shared/StyledComponents/MText';

// navigation
// import { useNavigation } from '@react-navigation/native';
import * as WebBrowser from 'expo-web-browser';

const NewsItem = ({ description, item }) => {

   let newsImg = description.match(/https?:\/\/[^/\s]+\/\S+\.(jpg|png|gif)/g)[0];

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
         }}

         onPress={async () => {
            await WebBrowser.openBrowserAsync(item.link[0])
         }}
      >

         <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            // padding: 5
         }}>
            {newsImg !== '' ? (
               <Image style={{
                  width: '100%',
                  height: '100%',
                  resizeMode: "contain",
               }}
                  source={{ uri: newsImg, }}
               />
            ) : (
               <Text style={{ color: WHITE, textAlign: 'center' }}>No Image</Text>
            )}
         </View>

         <View style={{
            flex: 2,
            justifyContent: 'space-between',
            paddingHorizontal: 10,
         }}>
            <MText white bold>{item.title}</MText>
            <View style={{ flexDirection: 'row' }}>
               <Entypo name="clock" size={14} color={WHITE} style={{ marginRight: 10 }} />
               <MText small>{item.pubDate}</MText>
            </View>
         </View>

      </TouchableOpacity>
   )
}

export default NewsItem
