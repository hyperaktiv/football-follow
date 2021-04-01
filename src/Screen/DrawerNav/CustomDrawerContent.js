import React from 'react'
import { View, Image } from 'react-native';
import { Ionicons, Foundation, MaterialCommunityIcons, MaterialIcons, Entypo } from '@expo/vector-icons';


import DrawerUser from './DrawerUser';
import ThemeSetting from './ThemeSetting';
import DrawerSectionTitle from './DrawerSectionTitle';
import DrawerSectionItem from './DrawerSectionItem';

import {
   DrawerContentScrollView,
} from '@react-navigation/drawer';

import CustomText from '../../Shared/CustomText';
import { useSelector } from 'react-redux';
import { THEMES } from '../../Redux/Reducers/theme';
import ShareAction from './ShareAction';


const CustomDrawerContent = (props) => {


   const theme = useSelector(state => state.theme);
   const bg_color = THEMES[theme].bg_color;
   const txtColor = THEMES[theme].txtColor;
   const iconColor = THEMES[theme].iconColor;
   const divide_color = THEMES[theme].divide_color;


   return (
      <DrawerContentScrollView {...props}>

         <View style={{
            flexDirection: 'row',
            paddingTop: 20,
            paddingLeft: 20,
            alignItems: 'center'
         }}

         >
            <Image
               style={{ height: 80, width: 80, resizeMode: 'contain' }}
               source={require('../../../assets/FootballFollow/android/ic_launcher-web.png')}
            />
            <CustomText style={{ fontSize: 22, marginLeft: 10 }}>Football Follow</CustomText>
         </View>



         {/* <View style={{
            height: 5,
            backgroundColor: bg_color,
         }} /> */}
         {/**USER/LOGIN section */}
         {/* <DrawerUser navigation={props.navigation} /> */}

         {/* <View style={{
            height: 5,
            backgroundColor: bg_color,
         }} /> */}

         {/**SETTINGS section */}
         <DrawerSectionTitle title={'settings'} />

         {/** Dark/Light Theme */}
         <ThemeSetting />

         <DrawerSectionItem title={'Automatic Refresh'}>
            <Ionicons name="refresh-circle-outline" size={25} color={iconColor} />
         </DrawerSectionItem>

         <DrawerSectionItem title={'Clear Cache'}>
            <Foundation name="prohibited" size={25} color={iconColor} />
         </DrawerSectionItem>

         <DrawerSectionItem title={'Notifications'}>
            <Ionicons name="ios-notifications-circle-outline" size={25} color={iconColor} />
         </DrawerSectionItem>

         <View
            style={{
               flexDirection: 'row',
               alignItems: 'center',
               borderBottomWidth: 1,
               borderColor: divide_color,
               paddingHorizontal: 20,
               paddingVertical: 5,
            }}>
            <View style={{ width: 30, justifyContent: 'center', alignItems: 'center' }}>
               <Ionicons name="football-outline" size={25} color={iconColor} />
            </View>
            <View style={{
               flex: 1,
               flexDirection: 'row',
               alignItems: "center",
               justifyContent: "space-between",
               paddingHorizontal: 5,
               paddingLeft: 10,
            }}>
               <CustomText bold>Sport Display</CustomText>
               <CustomText bold medium>Football</CustomText>
            </View>
         </View>

         <View style={{
            height: 5,
            backgroundColor: bg_color,
         }} />

         {/**INFOR section */}
         <DrawerSectionTitle title={'info'} />

         <DrawerSectionItem title={'Asked Questions'}>
            <MaterialCommunityIcons name="frequently-asked-questions" size={25} color={iconColor} />
         </DrawerSectionItem>

         <DrawerSectionItem title={'Privacy And Cookies'}>
            <MaterialIcons name="privacy-tip" size={25} color={iconColor} />
         </DrawerSectionItem>

         <DrawerSectionItem title={'Consent Preferences'}>
            <MaterialCommunityIcons name="cookie" size={25} color={iconColor} />
         </DrawerSectionItem>

         {/**Share action */}
         <ShareAction title={'Tell a Friend'} divide_color={divide_color}>
            <MaterialIcons name="supervised-user-circle" size={25} color={iconColor} />
         </ShareAction>

         <DrawerSectionItem title={'Contact Us'}>
            <MaterialIcons name="contact-mail" size={25} color={iconColor} />
         </DrawerSectionItem>

         <DrawerSectionItem title={'About Us'}>
            <Entypo name="info-with-circle" size={25} color={iconColor} />
         </DrawerSectionItem>

      </DrawerContentScrollView>
   );
}

export default CustomDrawerContent
