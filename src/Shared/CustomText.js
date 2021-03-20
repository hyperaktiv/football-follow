import React from 'react'
import { Text } from 'react-native'
import { useSelector } from 'react-redux';
import { THEMES } from '../Redux/Reducers/theme';

const CustomText = (props) => {

   const theme = useSelector(state => state.theme);
   let textColor = THEMES[theme].txtColor;

   let fontSize = 14;
   let textAlign = 'left';
   let boldText = '500';
   let txtDecorationLine = "none";
   let txtDecorationStyle = "solid";
   let txtDecorationColor = '#FFA000';

   if (props.mainColor) textColor = '#FFA000'; // main theme color
   if (props.small) fontSize = 12;
   if (props.medium) fontSize = 16;
   if (props.large) fontSize = 20;

   if (props.bold) boldText = 'bold';
   if (props.center) textAlign = 'center';

   if (props.title) {
      textColor = theme == 'dark' ? 'white' : 'black';
      fontSize = 18;
   }

   if (props.underline) {
      txtDecorationLine = "underline";
      txtDecorationStyle = "solid";
   }


   return (
      <Text style={{
         color: textColor,
         fontSize: fontSize,
         fontWeight: boldText,
         textAlign: textAlign,

         textDecorationLine: txtDecorationLine,
         textDecorationStyle: txtDecorationStyle,
         textDecorationColor: txtDecorationColor,
         ...props.style
      }}>{props.children}</Text>
   )
}

export default CustomText
