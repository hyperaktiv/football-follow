import React from 'react'
import { View, TouchableOpacity, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import CustomText from '../../Shared/CustomText';
import { useSelector } from 'react-redux';
import { THEMES } from '../../Redux/Reducers/theme';
import { useNavigation } from '@react-navigation/core';

import moment from 'moment';

const NewsItem = ({ description, item }) => {

   const navigation = useNavigation();

   const theme = useSelector(state => state.theme);
   const txtColor = THEMES[theme].txtColor;
   const gameColor = THEMES[theme].gameColor;
   const divide_color = THEMES[theme].divide_color;


   let newsImg = description.match(/https?:\/\/[^/\s]+\/\S+\.(jpg|png|gif)/g)[0];

   return (
      <TouchableOpacity
         style={{
            height: 100,
            flexDirection: 'row',
            backgroundColor: gameColor,
            paddingHorizontal: 5,
            borderWidth: 1,
            borderColor: divide_color,


            shadowColor: "#000",
            shadowOffset: {
               width: 1,
               height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
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
            paddingVertical: 10
         }}>
            <CustomText white bold>{item.title}</CustomText>
            <View style={{ flexDirection: 'row', }}>
               <Entypo name="clock" size={14} color={txtColor} style={{ marginRight: 10 }} />
               <CustomText small>{moment(item.pubDate[0]).format('LLLL')}</CustomText>
            </View>
         </View>

      </TouchableOpacity>
   )
}

export default NewsItem
