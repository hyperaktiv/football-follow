import React from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import { MText } from '../../../../Shared/StyledComponents/MText';
import { DIVIDE_COLOR } from '../../../../Shared/Theme';


var { width, height } = Dimensions.get('window');

const CL_COLOR = '#f8792b';
const C_QL_COLOR = '#D48C5F';
const EL_COLOR = '#52b2f6';
const EL_QL_COLOR = 'green';
const Relegation_COLOR = 'red';
const Relegation_PO_COLOR = '#c92925';

const TableRow = ({ leagueCode, teamID, position, image, teamName, p, w, d, l, pts, form }) => {

   let positionColor = '';
   // premiere league
   if (leagueCode === "PL") {
      if (position <= 4) positionColor = CL_COLOR;
      if (position == 5) positionColor = EL_COLOR;
      if (position >= 18) positionColor = Relegation_COLOR;
   }
   // laliga && SeriaA
   if (leagueCode === "PD" || leagueCode === "SA") {
      if (position <= 4) positionColor = CL_COLOR;
      if (position == 5) positionColor = EL_COLOR;
      if (position == 6) positionColor = EL_QL_COLOR;
      if (position >= 18) positionColor = Relegation_COLOR;
   }
   // bunlesliga
   if (leagueCode === "BL1") {
      if (position <= 4) positionColor = CL_COLOR;
      if (position == 5) positionColor = EL_COLOR;
      if (position == 6) positionColor = EL_QL_COLOR;
      if (position == 16) positionColor = Relegation_PO_COLOR;
      if (position >= 17) positionColor = Relegation_COLOR;
   }
   if (leagueCode === "FL1") {
      if (position <= 2) positionColor = CL_COLOR;
      if (position == 3) positionColor = C_QL_COLOR;
      if (position == 4) positionColor = EL_COLOR;
      if (position == 5) positionColor = EL_QL_COLOR;
      if (position == 18) positionColor = Relegation_PO_COLOR;
      if (position >= 19) positionColor = Relegation_COLOR;
   }
   return (
      <View style={{
         flexDirection: 'row',
         justifyContent: 'center',
         alignItems: 'center',
         paddingVertical: 15,
         borderBottomWidth: 1,
         borderColor: DIVIDE_COLOR,
      }}>

         <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: positionColor,
         }}>
            <Text style={{ color: 'white' }}>{position}</Text>
         </View>

         <View style={{
            flex: 5,
            flexDirection: 'row',
            alignItems: 'center'
         }}>
            <Image
               style={{
                  height: 20, width: 20,
                  marginLeft: 0.015 * width
               }}
               source={{ uri: image }}
            />
            <MText small style={{ marginLeft: 0.015 * width, }}>{teamName.substr(0, teamName.length - 3)}</MText>
         </View>

         <MText center style={{ flex: 1, textAlign: 'center' }}>{p}</MText>
         <MText center style={{ flex: 1 }}>{w}</MText>
         <MText center style={{ flex: 1 }}>{d}</MText>
         <MText center style={{ flex: 1 }}>{l}</MText>
         <MText center style={{ flex: 1 }}>{pts}</MText>
         <View style={{
            flex: 3,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
         }}>
            <MText>{form}</MText>
         </View>
      </View>
   )
}

export default TableRow
