import React from 'react'
import { View, } from 'react-native';
import { Ionicons, Foundation, MaterialCommunityIcons, MaterialIcons, Entypo } from '@expo/vector-icons';

import { DIVIDE_COLOR } from '../../Shared/Theme';

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
   const txtColor = THEMES[theme].txtColor;
   const iconColor = THEMES[theme].iconColor;

   return (
      <DrawerContentScrollView {...props}>
         <CustomText style={{
            paddingLeft: 20,
            paddingVertical: 15,
            fontSize: 26,
            color: txtColor
         }}>Football_Follow</CustomText>

         <View style={{
            height: 5,
            backgroundColor: 'black',
         }} />

         {/**USER/LOGIN section */}
         <DrawerUser navigation={props.navigation} />

         <View style={{
            height: 5,
            backgroundColor: 'black',
         }} />

         {/**SETTINGS section */}
         <DrawerSectionTitle title={'settings'} />

         {/** Dark/Light Theme */}
         <ThemeSetting />

         <DrawerSectionItem title={'Automatic Refresh'}>
            <Ionicons name="refresh-circle-outline" size={24} color={iconColor} />
         </DrawerSectionItem>

         <DrawerSectionItem title={'Clear Cache'}>
            <Foundation name="prohibited" size={24} color={iconColor} />
         </DrawerSectionItem>

         <View
            style={{
               flexDirection: 'row',
               alignItems: 'center',
               borderBottomWidth: 1,
               borderColor: DIVIDE_COLOR,
               paddingHorizontal: 20,
               paddingVertical: 5,
               marginTop: 5,
            }}>
            <View style={{ width: 30, justifyContent: 'center', alignItems: 'center' }}>
               <Ionicons name="football-outline" size={24} color={iconColor} />
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
               <CustomText bold>Football</CustomText>
            </View>
         </View>

         <DrawerSectionItem title={'Notifications'}>
            <Ionicons name="ios-notifications-circle-outline" size={24} color={iconColor} />
         </DrawerSectionItem>

         <View style={{
            height: 5,
            backgroundColor: 'black',
         }} />

         {/**INFOR section */}
         <DrawerSectionTitle title={'info'} />

         <DrawerSectionItem title={'Asked Questions'}>
            <MaterialCommunityIcons name="frequently-asked-questions" size={24} color={iconColor} />
         </DrawerSectionItem>

         <DrawerSectionItem title={'Privacy And Cookies'}>
            <MaterialIcons name="privacy-tip" size={24} color={iconColor} />
         </DrawerSectionItem>

         <DrawerSectionItem title={'Consent Preferences'}>
            <MaterialCommunityIcons name="cookie" size={24} color={iconColor} />
         </DrawerSectionItem>

         {/**Share action */}
         <ShareAction title={'Tell a Friend'}>
            <MaterialIcons name="supervised-user-circle" size={24} color={iconColor} />
         </ShareAction>

         <DrawerSectionItem title={'Contact Us'}>
            <MaterialIcons name="contact-mail" size={24} color={iconColor} />
         </DrawerSectionItem>

         <DrawerSectionItem title={'About Us'}>
            <Entypo name="info-with-circle" size={24} color={iconColor} />
         </DrawerSectionItem>

      </DrawerContentScrollView>
   );
}

export default CustomDrawerContent
