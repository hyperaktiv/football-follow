import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { MText } from '../Shared/StyledComponents/MText';


const Header = ({ title }) => {

   return (
      <View style={{
         flexDirection: 'row',
         justifyContent: 'space-between',
         alignItems: 'center',
         padding: 10
      }}>
         <TouchableOpacity>
            <FontAwesome name="cog" size={24} color="black" />
         </TouchableOpacity>

         <View style={{
            justifyContent: 'center',
            alignItems: 'center'
         }}>
            <MText bold medium underline>{title}</MText>
         </View>

         <TouchableOpacity>
            <FontAwesome name="search" size={24} color="black" />
         </TouchableOpacity>

      </View>
   )
}

export default Header
