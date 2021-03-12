import React from 'react';
import {
   View,
   TouchableOpacity,
   Text,
   ImageBackground
} from 'react-native';

// navigation
import { useNavigation } from '@react-navigation/native';

import { GAME_COLOR, WHITE, DIVIDE_COLOR, GRAY } from '../../Shared/Theme';
import { MText } from '../../Shared/StyledComponents/MText';

import { Entypo } from '@expo/vector-icons';
import CustomText from '../../Shared/CustomText';
import { useSelector } from 'react-redux';
import { THEMES } from '../../Redux/Reducers/theme';

const HighlightItem = ({ item }) => {
   const navigation = useNavigation();
   const theme = useSelector(state => state.theme);
   const gameColor = THEMES[theme].gameColor;
   const txtColor = THEMES[theme].txtColor;

   return (
      <TouchableOpacity
         style={{
            height: 100,
            flexDirection: 'row',
            backgroundColor: gameColor,
            paddingHorizontal: 5,
            paddingVertical: 10,
            borderBottomWidth: 1,
            borderColor: DIVIDE_COLOR
         }}
         onPress={() => {
            navigation.navigate('HighlightPage', { item: item })
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
                  <Entypo name="controller-play" size={35} color={txtColor} />
               </ImageBackground>
            ) : (
               <CustomText style={{ textAlign: 'center' }}>No Video</CustomText>
            )}
         </View>

         <View style={{
            flex: 3,
            justifyContent: 'space-between',
            paddingHorizontal: 10,
         }}>
            <View style={{ height: '50%', justifyContent: 'space-between' }}>
               <CustomText white bold>{item.title}</CustomText>
               <CustomText small>{item.competition.name}</CustomText>
            </View>

            <View style={{ flexDirection: 'row' }}>
               <Entypo name="clock" size={14} color={txtColor} style={{ marginRight: 10 }} />
               <CustomText small>{new Date(item.date).toDateString()}</CustomText>
            </View>
         </View>

      </TouchableOpacity>
   )
}

export default HighlightItem
