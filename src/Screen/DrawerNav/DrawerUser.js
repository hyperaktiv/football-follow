import React from 'react'
import {
   View,
   TouchableOpacity,
   ImageBackground,
} from 'react-native';

import { pgHorizontal, DIVIDE_COLOR } from '../../Shared/Theme';
import { MaterialIcons, Entypo } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import { THEMES } from '../../Redux/Reducers/theme';
import CustomText from '../../Shared/CustomText';


const DrawerUser = () => {
   const theme = useSelector(state => state.theme);
   const bg_color = THEMES[theme].bg_color;
   const iconColor = THEMES[theme].iconColor;

   return (
      <TouchableOpacity style={{
         height: 70,
         backgroundColor: bg_color,
         borderWidth: 1,
         borderColor: DIVIDE_COLOR,

      }}>
         <ImageBackground
            style={{
               width: '100%',
               height: '100%',
               flexDirection: 'row',
               alignItems: 'center',
               justifyContent: 'space-between',
               paddingHorizontal: pgHorizontal,
            }}
            source={require('./pexels-emiliano-arano.jpg')}
            imageStyle={{ opacity: 0.3 }}
         >

            <View style={{
               width: 50,
               height: 50,
               borderRadius: 25,
               alignItems: 'center',
               justifyContent: 'center',
               backgroundColor: bg_color,
               borderWidth: 1,
               borderColor: DIVIDE_COLOR,
            }}>
               <MaterialIcons name="person" size={26} color={iconColor} />
            </View>

            <View style={{
               flex: 1,
               justifyContent: 'center',
               marginLeft: 15,
            }}>
               <CustomText large bold white>Đăng Nhập</CustomText>
            </View>

            <View style={{
               width: 40,
               height: 40,
               borderRadius: 20,
               alignItems: 'center',
               justifyContent: 'center',
               backgroundColor: bg_color,
            }}>
               <Entypo name="chevron-thin-right" size={20} color={iconColor} />
            </View>

         </ImageBackground>

      </TouchableOpacity>
   )
}

export default DrawerUser
