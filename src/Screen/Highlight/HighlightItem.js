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

const HighlightItem = ({ item }) => {
   const navigation = useNavigation();

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
                  <Entypo name="controller-play" size={35} color={WHITE} />
               </ImageBackground>
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
               <MText white bold>{item.title}</MText>
               <MText small>{item.competition.name}</MText>
            </View>

            <View style={{ flexDirection: 'row' }}>
               <Entypo name="clock" size={14} color={WHITE} style={{ marginRight: 10 }} />
               <MText small>{new Date(item.date).toDateString()}</MText>
            </View>
         </View>

      </TouchableOpacity>
   )
}

export default HighlightItem
