import React from 'react';
import {
   View,
   TouchableOpacity,
   ImageBackground,
} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import CustomText from '../../Shared/CustomText';
import moment from 'moment';

// redux
import { useSelector } from 'react-redux';
import { THEMES } from '../../Redux/Reducers/theme';

const HighlightItem = ({ item, openModal }) => {
   const theme = useSelector(state => state.theme);
   const gameColor = THEMES[theme].gameColor;
   const txtColor = THEMES[theme].txtColor;
   const divide_color = THEMES[theme].divide_color;

   return (
      <TouchableOpacity
         style={{
            height: 100,
            flexDirection: 'row',
            backgroundColor: gameColor,
            paddingHorizontal: 5,
            borderWidth: 1,
            borderColor: divide_color,
            marginHorizontal: 5,

            shadowColor: "#000",
            shadowOffset: {
               width: 0,
               height: 3,
            },
            shadowOpacity: 0.29,
            shadowRadius: 4.65,

            elevation: 7,
         }}
         onPress={() => {
            openModal(item.videos[0].embed);
         }}
      >

         <View style={{
            flex: 2,
            justifyContent: 'center',
            alignItems: 'center',
         }}>
            {item.thumbnail !== '' ? (
               <ImageBackground style={{
                  width: '95%',
                  height: '95%',
                  resizeMode: "contain",
                  justifyContent: 'center',
                  alignItems: 'center'
               }}
                  source={{ uri: item.thumbnail, }}
               >
                  <Entypo name="controller-play" size={40} color={'white'} />
               </ImageBackground>
            ) : (
               <CustomText style={{ textAlign: 'center' }}>No Video</CustomText>
            )}
         </View>

         <View style={{
            flex: 3,
            justifyContent: 'space-between',
            paddingVertical: 10,
         }}>
            <View style={{ height: '50%', justifyContent: 'space-between' }}>
               <CustomText white bold>{item.title}</CustomText>
               <CustomText small>{item.competition.name}</CustomText>
            </View>

            <View style={{ flexDirection: 'row' }}>
               <Entypo name="clock" size={14} color={txtColor} style={{ marginRight: 10 }} />
               <CustomText small>{moment(item.date).format('LLLL')}</CustomText>
            </View>
         </View>

      </TouchableOpacity>
   )
}

export default HighlightItem
