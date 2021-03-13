import React from 'react'
import { Text } from 'react-native'
import { useSelector } from 'react-redux';
import { THEMES } from '../Redux/Reducers/theme';

const CustomText = (props) => {

   const theme = useSelector(state => state.theme);
   let textColor = THEMES[theme].txtColor;

   // let textColor = '#aaaaaa';
   let fontSize = 14;
   let textAlign = '';
   let boldText = '';
   let txtDecorationLine = "";
   let txtDecorationStyle = "";
   let txtDecorationColor = "";

   if (props.mainColor) textColor = '#FFA000'; // main theme color
   if (props.small) fontSize = 12;
   if (props.medium) fontSize = 16;
   if (props.large) fontSize = 20;

   if (props.bold) boldText = 'bold';
   if (props.center) textAlign = 'center';

   if (props.underline) {
      txtDecorationLine = "underline";
      txtDecorationStyle = "solid";
      txtDecorationColor = "#000";
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
