import React from 'react';
// import PropTypes from 'prop-types';
import {
   View,
   TouchableOpacity,
   StatusBar,
   Platform
} from 'react-native';
import Constants from 'expo-constants';
import { FontAwesome } from '@expo/vector-icons';
import { pgHorizontal, DIVIDE_COLOR } from './Theme';

import { Ionicons } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { THEMES } from '../Redux/Reducers/theme';
import CustomText from './CustomText';

const Header = ({ title, backAction = false, search = true }) => {
   const navigation = useNavigation();

   const theme = useSelector(state => state.theme);
   const bg_color = THEMES[theme].bg_color;
   const txtColor = THEMES[theme].txtColor;

   return (
      <>
         <View style={{
            backgroundColor: bg_color,
            height: Platform.OS === 'ios' ? Constants.statusBarHeight : StatusBar.currentHeight,
            // borderBottomWidth: 1,
            // borderColor: DIVIDE_COLOR
         }}>
            <StatusBar
               barStyle="light-content"
               hidden={false}
               backgroundColor="#ff4081"
               translucent={false}
            //allowing light, but not detailed shapes
            // networkActivityIndicatorVisible={true}
            />
         </View>


         <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: pgHorizontal,
            backgroundColor: bg_color,
            borderWidth: 1,
            borderColor: DIVIDE_COLOR
         }}>
            {backAction === false ? (
               <TouchableOpacity
                  onPress={() => {
                     navigation.openDrawer();
                  }}
               >
                  <FontAwesome name="cog" size={24} color={txtColor} />
               </TouchableOpacity>
            ) : (
               <TouchableOpacity
                  onPress={() => {
                     navigation.goBack();
                  }}
               >
                  <Ionicons name="chevron-back" size={24} color={txtColor} />
               </TouchableOpacity>
            )}

            <View style={{
               justifyContent: 'center',
               alignItems: 'center'
            }}>
               <CustomText title bold medium underline>{title}</CustomText>
            </View>

            {search === true && (
               <TouchableOpacity>
                  <FontAwesome name="search" size={24} color={txtColor} />
               </TouchableOpacity>)
            }


         </View>
      </>
   )
}
// Header.propTypes = {
//    title: PropTypes.string.isRequired
// };

export default Header;
