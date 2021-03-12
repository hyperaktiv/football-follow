import React from 'react'
import { Text } from 'react-native'
import { useSelector } from 'react-redux';
import { THEMES } from '../Redux/Reducers/theme';

const CustomText = (props) => {
   const { color, size, bold, center, underline, children } = props;

   const theme = useSelector(state => state.theme);
   const textColor = THEMES[theme].txtColor;

   // let textColor = '#aaaaaa';
   let fontSize = 14;
   let textAlign = '';
   let boldText = '';
   let txtDecorationLine = "";
   let txtDecorationStyle = "";
   let txtDecorationColor = "";

   if (color == 'color') textColor = '#FFA000'; // main theme color
   if (color == 'black') textColor = 'black';
   if (color == 'title' || color == 'white') textColor = '#fcfcfc';

   if (size == 'small') fontSize = 12;
   if (size == 'medium') fontSize = 16;
   if (size == 'large') fontSize = 20;

   if (bold) boldText = 'bold';
   if (center) textAlign = 'center';

   if (underline) {
      txtDecorationLine = "underline";
      txtDecorationStyle = "solid";
      txtDecorationColor = "#aaaaaa";
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
      }}>{children}</Text>
   )
}

export default CustomText
