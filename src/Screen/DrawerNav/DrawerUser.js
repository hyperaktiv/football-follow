import React from 'react'
import {
   View,
   TouchableOpacity,
   ImageBackground,
} from 'react-native';

import { pgHorizontal, MAIN_COLOR } from '../../Shared/Theme';
import { MaterialIcons, Entypo } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import { THEMES } from '../../Redux/Reducers/theme';
import CustomText from '../../Shared/CustomText';


const DrawerUser = ({ navigation }) => {

   const theme = useSelector(state => state.theme);
   const bg_color = THEMES[theme].bg_color;
   const iconColor = THEMES[theme].iconColor;
   const divide_color = THEMES[theme].divide_color;

   {/** 
   if (context.stateUser.isAuthenticated === true) {
      return (
         <View style={{
            height: 80,
            backgroundColor: bg_color,
            borderWidth: 1,
            borderColor: divide_color,
         }}
            onPress={() => {
               // navigation.navigate('EmailLogin');
               navigation.navigate('SelectAuth');
            }}
         >
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
               imageStyle={{ opacity: 0.5 }}
            >
               <View style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: bg_color,
                  borderWidth: 1,
                  borderColor: MAIN_COLOR,
               }}>
                  <MaterialIcons name="person" size={26} color={iconColor} />
               </View>

               <View style={{
                  flex: 1,
                  justifyContent: 'center',
                  marginLeft: 15,
               }}>
                  <CustomText large bold white>{context.stateUser.user.displayName ? context.stateUser.user.displayName : context.stateUser.user.phoneNumber}</CustomText>
                  <CustomText small bold white>{context.stateUser.user.email ? context.stateUser.user.email : ''}</CustomText>
               </View>

               <TouchableOpacity style={{
                  width: 50,
                  height: 40,
                  borderRadius: 15,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: bg_color,
               }}
                  onPress={() => {
                     setTimeout(() => {
                        signOutEmail(context.dispatch);   // signout
                     }, 1000);
                  }}
               >
                  <CustomText small style={{ color: 'orange' }}>Logout</CustomText>
               </TouchableOpacity>
            </ImageBackground>
         </View>
      )
   } else

   */}
   return (
      <TouchableOpacity style={{
         height: 70,
         backgroundColor: bg_color,
         borderWidth: 1,
         borderColor: divide_color,
      }}
         onPress={() => {
            navigation.navigate('SelectAuth');
         }}
      >
         <ImageBackground
            style={{
               width: '100%',
               height: '100%',
               flexDirection: 'row',
               alignItems: 'center',
               justifyContent: 'space-between',
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
               borderColor: MAIN_COLOR,
               marginLeft: pgHorizontal
            }}>
               <MaterialIcons name="person" size={26} color={iconColor} />
            </View>

            <View style={{
               flex: 1,
               justifyContent: 'center',
               marginLeft: 15,
            }}>
               <CustomText large bold white>Login</CustomText>
            </View>

            <View style={{
               width: 40,
               height: 40,
               borderRadius: 20,
               alignItems: 'center',
               justifyContent: 'center',
               backgroundColor: bg_color,
               marginRight: pgHorizontal,
               borderWidth: 1,
               borderColor: MAIN_COLOR
            }}>
               <Entypo name="chevron-thin-right" size={20} color={iconColor} />
            </View>

         </ImageBackground>

      </TouchableOpacity>
   )
}

export default DrawerUser
