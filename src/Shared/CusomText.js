import React from 'react'
import { Text } from 'react-native'

const CusomText = ({ color, size, bold, center, underline, children }) => {


   let textColor = '#aaaaaa';
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
      }}>{children}</Text>
   )
}

export default CusomText
