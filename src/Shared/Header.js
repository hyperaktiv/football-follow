import React from 'react';
// import PropTypes from 'prop-types';
import {
   View,
   TouchableOpacity,
   StatusBar,
   Platform
} from 'react-native';
import Constants from 'expo-constants';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { pgHorizontal } from './Theme';

import { useNavigation, DrawerActions } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { THEMES } from '../Redux/Reducers/theme';
import CustomText from './CustomText';

const Header = ({ title, backAction = false, search = true }) => {
   const navigation = useNavigation();

   const theme = useSelector(state => state.theme);
   const bg_color = THEMES[theme].bg_color;
   const iconColor = THEMES[theme].iconColor;
   const divide_color = THEMES[theme].divide_color;

   return (
      <>
         <View style={{
            backgroundColor: bg_color,
            height: Platform.OS === 'ios' ? Constants.statusBarHeight : 0,
         }}>
            <StatusBar
               barStyle={theme == 'dark' ? "light-content" : "dark-content"}
               hidden={false}
               backgroundColor={"#ff4081"}
               translucent={false}
            />
         </View>


         <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: pgHorizontal,
            paddingVertical: 10,
            backgroundColor: bg_color,
            borderTopWidth: 1,
            borderColor: divide_color
         }}>
            {backAction === false ? (
               <TouchableOpacity
                  onPress={() => {
                     navigation.dispatch(DrawerActions.openDrawer());
                  }}
               >
                  <FontAwesome name="cog" size={26} color={iconColor} />
               </TouchableOpacity>
            ) : (
               <TouchableOpacity
                  onPress={() => {
                     navigation.goBack();
                  }}
               >
                  <Ionicons name="chevron-back" size={26} color={iconColor} />
               </TouchableOpacity>
            )}

            <View style={{
               justifyContent: 'center',
               alignItems: 'center'
            }}>
               <CustomText title bold medium underline>{title}</CustomText>
            </View>

            {search === true ? (
               <TouchableOpacity
                  onPress={() => {
                     navigation.navigate('SearchScreen');
                  }}
               >
                  <FontAwesome name="search" size={26} color={iconColor} />
               </TouchableOpacity>
            ) : (
               <View />
            )
            }

         </View>
      </>
   )
}
// Header.propTypes = {
//    title: PropTypes.string.isRequired
// };

export default Header;
