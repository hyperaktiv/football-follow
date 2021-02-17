import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

const LinearButton = ({ size, title }) => {

   let btnSize = 40;
   if (size === 'large') btnSize = 135;
   else if (size === 'medium') btnSize = 100;

   return (
      <TouchableOpacity>
         <LinearGradient
            colors={['#fff', '#3b5998']}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            style={{
               padding: 15,
               alignItems: 'center',
               shadowColor: "#000",
               shadowOffset: {
                  width: 0,
                  height: 2
               },
               shadowOpacity: 0.25,
               shadowRadius: 3.84,
               elevation: 5,
               height: 50,
               width: btnSize,
               borderRadius: 25
            }}
         >
            <Text style={{ color: '#fff' }}>{title}</Text>
         </LinearGradient>
      </TouchableOpacity>
   )
}

export default LinearButton
