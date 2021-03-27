import React from 'react';
import {
   View,
   Image,
   TouchableOpacity,
   Platform
} from 'react-native';
import { pgHorizontal } from '../../Shared/Theme';
import CustomText from '../../Shared/CustomText';
import { AntDesign } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import { THEMES } from '../../Redux/Reducers/theme';

import { useNavigation } from '@react-navigation/native';
import { SvgUri } from 'react-native-svg';


const SearchItem = ({ img, name }) => {
   const navigation = useNavigation();

   const theme = useSelector(state => state.theme);
   const iconColor = THEMES[theme].iconColor;
   const divide_color = THEMES[theme].divide_color;

   let flag = '';
   if (Platform.OS === 'ios' || Platform.OS === 'android') {
      flag = <SvgUri width={50} height={50} uri={img} source={{ uri: img, }} />
   } else {
      flag = <Image style={{ height: 50, width: 50 }} source={{ uri: img, }} />
   }

   return (
      <TouchableOpacity style={{
         flexDirection: 'row',
         height: 60,
         alignItems: 'center',
         borderWidth: 1,
         borderColor: divide_color,
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
            alignItems: 'center',
            maxHeight: 55,
            maxWidth: 55,
            backgroundColor: '#F5F6F9',
            padding: 2,
            borderRadius: 5
         }}>
            {/**FLAGE RENDER */}
            {flag}

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
