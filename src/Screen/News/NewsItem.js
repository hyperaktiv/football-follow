import React from 'react'
import { View, TouchableOpacity, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { GAME_COLOR } from '../../Shared/Theme';

import CustomText from '../../Shared/CustomText';
import { useSelector } from 'react-redux';
import { THEMES } from '../../Redux/Reducers/theme';
import { useNavigation } from '@react-navigation/core';

const NewsItem = ({ description, item }) => {

   const navigation = useNavigation();

   const theme = useSelector(state => state.theme);
   const txtColor = THEMES[theme].txtColor;
   const gameColor = THEMES[theme].gameColor;

   let newsImg = description.match(/https?:\/\/[^/\s]+\/\S+\.(jpg|png|gif)/g)[0];

   return (
      <TouchableOpacity
         style={{
            height: 100,
            flexDirection: 'row',
            backgroundColor: gameColor,
            paddingHorizontal: 5,
            paddingVertical: 10,
            borderBottomWidth: 1,
            borderColor: GAME_COLOR
         }}
         onPress={() => {
            navigation.navigate('NewsDetails', {
               link: item.link[0]
            });
         }}
      >

         <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
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
               <CustomText style={{ textAlign: 'center' }}>No Image</CustomText>
            )}
         </View>

         <View style={{
            flex: 2,
            justifyContent: 'space-between',
            paddingHorizontal: 10,
         }}>
            <CustomText white bold>{item.title}</CustomText>
            <View style={{ flexDirection: 'row' }}>
               <Entypo name="clock" size={14} color={txtColor} style={{ marginRight: 10 }} />
               <CustomText small>{item.pubDate}</CustomText>
            </View>
         </View>

      </TouchableOpacity>
   )
}

export default NewsItem
