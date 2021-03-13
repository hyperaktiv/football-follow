import React from 'react';
import {
   View,
   Image,
   TouchableOpacity,
} from 'react-native';
import { pgHorizontal, DIVIDE_COLOR } from '../../Shared/Theme';
import CustomText from '../../Shared/CustomText';
import { AntDesign } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import { THEMES } from '../../Redux/Reducers/theme';

import { useNavigation } from '@react-navigation/native';

const SearchItem = ({ img, name }) => {
   const navigation = useNavigation();

   const theme = useSelector(state => state.theme);
   const iconColor = THEMES[theme].iconColor;

   return (
      <TouchableOpacity style={{
         flexDirection: 'row',
         height: 60,
         alignItems: 'center',
         borderWidth: 1,
         borderColor: DIVIDE_COLOR,
         marginHorizontal: pgHorizontal
      }}
         onPress={() => {
            navigation.navigate('ClubScreen');
         }}
      >
         <View style={{
            flex: 1,
            marginHorizontal: 10,
            justifyContent: 'center',
            alignItems: 'center'
         }}>
            <Image style={{
               width: 50,
               height: 50,
            }}
               source={{
                  uri: img,
               }} />
         </View>
         <View style={{
            flex: 3,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginRight: 20
         }}>
            <CustomText bold medium>{name.substr(0, name.length - 3)}</CustomText>
            <AntDesign name="right" size={20} color={iconColor} />
         </View>

      </TouchableOpacity>
   )
}

export default SearchItem
