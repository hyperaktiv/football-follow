import React from 'react'
import {
   View,
   Text,
   TouchableOpacity,
   ImageBackground
} from 'react-native';
import { Ionicons, Foundation, MaterialCommunityIcons, MaterialIcons, Entypo } from '@expo/vector-icons';

import { GRAY, BG_COLOR, pgHorizontal, DIVIDE_COLOR } from '../../Shared/Theme';
import { MText } from '../../Shared/StyledComponents/MText';

import DrawerSectionTitle from './DrawerSectionTitle';
import DrawerSectionItem from './DrawerSectionItem';

import {
   DrawerContentScrollView,
} from '@react-navigation/drawer';


const CustomDrawerContent = (props) => {
   return (
      <DrawerContentScrollView {...props}>
         <Text style={{
            paddingLeft: 20,
            paddingVertical: 15,
            fontSize: 26,
            color: 'white'
         }}>Football_Follow</Text>

         <View style={{
            height: 5,
            backgroundColor: 'black',
         }} />

         {/**USER/LOGIN section */}
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

         <View style={{
            height: 5,
            backgroundColor: 'black',
         }} />

         {/**SETTINGS section */}
         <DrawerSectionTitle title={'settings'} />

         <DrawerSectionItem title={'Automatic Refresh'}>
            <Ionicons name="refresh-circle-outline" size={24} color={GRAY} />
         </DrawerSectionItem>

         <DrawerSectionItem title={'Clear Cache'}>
            <Foundation name="prohibited" size={24} color={GRAY} />
         </DrawerSectionItem>

         <DrawerSectionItem title={'Sport Display   -   Football'} >
            <Ionicons name="football-outline" size={24} color={GRAY} />
         </DrawerSectionItem>

         <DrawerSectionItem title={'Notifications'}>
            <Ionicons name="ios-notifications-circle-outline" size={24} color={GRAY} />
         </DrawerSectionItem>

         <View style={{
            height: 5,
            backgroundColor: 'black',
         }} />

         {/**INFOR section */}
         <DrawerSectionTitle title={'info'} />

         <DrawerSectionItem title={'Asked Questions'}>
            <MaterialCommunityIcons name="frequently-asked-questions" size={24} color={GRAY} />
         </DrawerSectionItem>

         <DrawerSectionItem title={'Privacy And Cookies'}>
            <MaterialIcons name="privacy-tip" size={24} color={GRAY} />
         </DrawerSectionItem>

         <DrawerSectionItem title={'Consent Preferences'}>
            <MaterialCommunityIcons name="cookie" size={24} color={GRAY} />
         </DrawerSectionItem>

         <DrawerSectionItem title={'Tell a Friend'}>
            <MaterialIcons name="supervised-user-circle" size={24} color={GRAY} />
         </DrawerSectionItem>

         <DrawerSectionItem title={'Contact Us'}>
            <MaterialIcons name="contact-mail" size={24} color={GRAY} />
         </DrawerSectionItem>

         <DrawerSectionItem title={'About Us'}>
            <Entypo name="info-with-circle" size={24} color={GRAY} />
         </DrawerSectionItem>

      </DrawerContentScrollView>
   );
}

export default CustomDrawerContent
