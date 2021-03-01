import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MText } from '../../../../Shared/StyledComponents/MText';

const note_data = [
   { COLOR: '#f8792b', name: 'Champion League' },
   { COLOR: '#D48C5F', name: 'Champion League qualification' },
   { COLOR: '#52b2f6', name: 'Europa League' },
   { COLOR: 'green', name: 'Europa League qualification' },
   { COLOR: '#c92925', name: 'Relegation play-off' },
   { COLOR: 'red', name: 'Relegation' },
];

const message = {
   england: {
      leagueCup: 'League cup gives UEFA Europa Conference Leauge qualification.',
      faCup: 'FA Cup result determines 1 spot in the UEFA Europa Leauge.'
   }
}

const TableFooter = () => {
   return (
      <View style={{
         paddingVertical: 15,
      }}>
         {note_data.map((item, index) => {
            return (
               <View style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingVertical: 5,
               }}
                  key={index}
               >
                  <View style={[styles.cicle, { backgroundColor: item.COLOR }]} />
                  <MText>{item.name}</MText>
               </View>
            )
         })}
      </View>
   )
}

const styles = StyleSheet.create({
   cicle: {
      height: 10, width: 10,
      borderRadius: 5,
      marginHorizontal: 15,
   }
})

export default TableFooter
