import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native';

import Header from '../../Shared/Header';
import { BG_COLOR, pgHorizontal, DIVIDE_COLOR } from '../../Shared/Theme';
import GameItem from './GameItem';
import { MText } from '../../Shared/StyledComponents/MText';

// REDUX
import { useSelector } from 'react-redux';

const LikeScreen = () => {

   // redux get state
   const likeItems = useSelector(state => state.likeItems);

   return (
      <>
         <Header title='Favourites' />

         {/**there is no favourite ==> default===true */}
         {likeItems.length === 0 ? (
            <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]} >
               <MText medium bold white>Tap 'LIKE' to add a Match to Favourites</MText>
               <View style={{
                  height: 1,
                  backgroundColor: DIVIDE_COLOR,
                  marginVertical: 10
               }} />
               <GameItem />
            </View>
         ) : (
            <ScrollView style={styles.container}>
               {
                  likeItems.map(item => (
                     (
                        <GameItem
                           matchItem={item}
                           key={item.id}
                        />
                     )
                  ))
               }
            </ScrollView>
         )}

      </>
   )
}

const styles = StyleSheet.create({
   container: {
      // flex: 1,
      backgroundColor: BG_COLOR,
      paddingHorizontal: pgHorizontal,
      borderTopWidth: 1,
      borderTopColor: DIVIDE_COLOR,
      padding: 5
   },
});

export default LikeScreen
