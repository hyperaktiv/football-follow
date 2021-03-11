import React, { useState } from 'react'
import {
   View,
   Text,
   Switch,
   TouchableOpacity
} from 'react-native';
import { Ionicons, Foundation, MaterialCommunityIcons, MaterialIcons, Entypo } from '@expo/vector-icons';
import { MText } from '../../Shared/StyledComponents/MText';

import { GRAY, MAIN_COLOR, pgHorizontal, DIVIDE_COLOR } from '../../Shared/Theme';

import DrawerUser from './DrawerUser';
import DrawerSectionTitle from './DrawerSectionTitle';
import DrawerSectionItem from './DrawerSectionItem';

import {
   DrawerContentScrollView,
} from '@react-navigation/drawer';


const CustomDrawerContent = (props) => {

   const [isEnabled, setIsEnabled] = useState(false);
   const toggleSwitch = () => setIsEnabled(previousState => !previousState);

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
         <DrawerUser />

         <View style={{
            height: 5,
            backgroundColor: 'black',
         }} />

         {/**SETTINGS section */}
         <DrawerSectionTitle title={'settings'} />

         {/** Dark/Light Theme */}
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
               <MaterialCommunityIcons name="theme-light-dark" size={24} color={GRAY} />
            </View>
            <View style={{
               flex: 1,
               flexDirection: 'row',
               alignItems: "center",
               justifyContent: "space-between",
               paddingHorizontal: 5,
               paddingLeft: 5,
            }}>
               <MText bold white>Dark/Light Theme</MText>
               <Switch
                  trackColor={{ false: "#767577", true: "#81b0ff" }}
                  thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch}
                  value={isEnabled}
               />
            </View>
         </View>
         {/**Dark-light theme ends */}

         <DrawerSectionItem title={'Automatic Refresh'}>
            <Ionicons name="refresh-circle-outline" size={24} color={GRAY} />
         </DrawerSectionItem>

         <DrawerSectionItem title={'Clear Cache'}>
            <Foundation name="prohibited" size={24} color={GRAY} />
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
               <Ionicons name="football-outline" size={24} color={GRAY} />
            </View>
            <View style={{
               flex: 1,
               flexDirection: 'row',
               alignItems: "center",
               justifyContent: "space-between",
               paddingHorizontal: 5,
               paddingLeft: 5,
            }}>
               <MText bold white>Sport Display</MText>
               <MText bold white>Football</MText>
            </View>
         </View>

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
