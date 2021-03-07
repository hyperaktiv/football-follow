import React from 'react';
// import PropTypes from 'prop-types';
import {
   View,
   TouchableOpacity,
   StatusBar,
   Platform
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { MText } from '../Shared/StyledComponents/MText';
import { BG_COLOR, WHITE, pgHorizontal, DIVIDE_COLOR } from './Theme';

const Header = ({ title, navigation }) => {

   return (
      <>

         <View style={{
            backgroundColor: BG_COLOR,
            height: Platform.OS === 'ios' ? 25 : StatusBar.currentHeight,
            // borderBottomWidth: 1,
            // borderColor: DIVIDE_COLOR
         }}>
            <StatusBar
               barStyle="light-content"
               // dark-content, light-content and default
               hidden={false}
               //To hide statusBar
               backgroundColor="#ff4081"
               //Background color of statusBar
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
            backgroundColor: BG_COLOR,
            borderWidth: 1,
            borderColor: DIVIDE_COLOR
         }}>
            <TouchableOpacity
               onPress={() => {
                  navigation.openDrawer();
               }}
            >
               <FontAwesome name="cog" size={24} color={WHITE} />
            </TouchableOpacity>

            <View style={{
               justifyContent: 'center',
               alignItems: 'center'
            }}>
               <MText title bold medium underline>{title}</MText>
            </View>

            <TouchableOpacity>
               <FontAwesome name="search" size={24} color={WHITE} />
            </TouchableOpacity>
         </View>
      </>
   )
}
// Header.propTypes = {
//    title: PropTypes.string.isRequired
// };

export default Header;
