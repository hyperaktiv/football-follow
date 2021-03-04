import React from 'react'
import { View, StyleSheet, Dimensions, ScrollView } from 'react-native';
import Header from '../../Shared/Header';
import { FontAwesome } from '@expo/vector-icons';

import { BG_COLOR, WHITE, pgHorizontal, DIVIDE_COLOR } from '../../Shared/Theme';

import GameContainer from './GameContainer';
import { MText } from '../../Shared/StyledComponents/MText';

const LikeScreen = () => {
   return (
      <>
         <Header title='Favourites' />

         {/**there is no favourite ==> default===true */}
         <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]} >
            <MText medium bold white>Tap 'LIKE' to add a Match to Favourites</MText>
            <View style={{
               height: 1,
               backgroundColor: DIVIDE_COLOR,
               marginVertical: 10
            }} />
            <GameContainer status={''} />
         </View>

         {/* <View style={styles.container}>
            <GameContainer
               teamA='Manchester United' goalA={0}
               imgA={'https://assets.stickpng.com/images/580b57fcd9996e24bc43c4e7.png'}
               teamB='Manchester City' goalB={0}
               imgB={'https://crests.football-data.org/65.svg'}
               status={'FT'} />
         </View> */}
      </>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: BG_COLOR,
      paddingHorizontal: pgHorizontal,
      borderTopWidth: 1,
      borderTopColor: DIVIDE_COLOR,
      padding: 5
   },
});

export default LikeScreen
