import React from 'react';
// import PropTypes from 'prop-types';
import {
   View,
   TouchableOpacity,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { MText } from '../Shared/StyledComponents/MText';
import { BG_COLOR, WHITE, pgHorizontal } from './Theme';

const Header = ({ title }) => {

   return (
      <View style={{
         flexDirection: 'row',
         justifyContent: 'space-between',
         alignItems: 'center',
         padding: pgHorizontal,
         backgroundColor: BG_COLOR
      }}>
         <TouchableOpacity>
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
   )
}
// Header.propTypes = {
//    title: PropTypes.string.isRequired
// };

export default Header;
