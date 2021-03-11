import React from 'react'
import {
   View,
   TouchableOpacity,
   ImageBackground,
} from 'react-native';
import { MText } from '../../Shared/StyledComponents/MText';

import { GRAY, BG_COLOR, pgHorizontal, DIVIDE_COLOR } from '../../Shared/Theme';
import { MaterialIcons, Entypo } from '@expo/vector-icons';


const DrawerUser = () => {
   return (
      <TouchableOpacity style={{
         height: 70,
         backgroundColor: BG_COLOR,
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
               backgroundColor: BG_COLOR,
               borderWidth: 1,
               borderColor: DIVIDE_COLOR,
            }}>
               <MaterialIcons name="person" size={26} color={GRAY} />
            </View>

            <View style={{
               flex: 1,
               justifyContent: 'center',
               marginLeft: 15,
            }}>
               <MText large bold white>Đăng Nhập</MText>
            </View>

            <View style={{
               width: 40,
               height: 40,
               borderRadius: 20,
               alignItems: 'center',
               justifyContent: 'center',
               backgroundColor: BG_COLOR,
            }}>
               <Entypo name="chevron-thin-right" size={20} color={GRAY} />
            </View>

         </ImageBackground>

      </TouchableOpacity>
   )
}

export default DrawerUser
