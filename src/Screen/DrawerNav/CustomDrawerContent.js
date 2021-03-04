import React from 'react'
import { View, Text } from 'react-native';
import { Ionicons, Foundation, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

import { GRAY } from '../../Shared/Theme';

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
            paddingVertical: 20,
            fontSize: 30,
            color: 'white'
         }}>Football_Follow</Text>

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

      </DrawerContentScrollView>
   );
}

export default CustomDrawerContent
