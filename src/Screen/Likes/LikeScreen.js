import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native';
import { pgHorizontal, DIVIDE_COLOR } from '../../Shared/Theme';
import GameItem from './GameItem';

// REDUX
import { useSelector } from 'react-redux';
import CustomText from '../../Shared/CustomText';
import { THEMES } from '../../Redux/Reducers/theme';

const LikeScreen = () => {

   // redux get state
   const theme = useSelector(state => state.theme);
   const bg_color = THEMES[theme].bg_color;
   const divide_color = THEMES[theme].divide_color;

   const likeItems = useSelector(state => state.likeItems);


   return (
      <>
         {/**there is no favourite ==> default===true */}
         {likeItems.length === 0 ? (
            <View
               style={[styles.container, {
                  paddingHorizontal: pgHorizontal,
                  borderTopWidth: 1,
                  borderTopColor: divide_color,
                  padding: 5,
                  flex: 1,
                  backgroundColor: bg_color,
                  justifyContent: 'center',
                  alignItems: 'center'
               }]} >
               <CustomText medium bold white>Tap 'LIKE' to add a Match to Favourites</CustomText>
               <View style={{
                  height: 1,
                  backgroundColor: divide_color,
                  marginVertical: 10
               }} />
               <GameItem />
            </View>
         ) : (
            <ScrollView style={[styles.container, {
               backgroundColor: bg_color,
               borderTopWidth: 1,
               borderTopColor: divide_color,
            }]}>
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
      paddingHorizontal: pgHorizontal,
      padding: 5
   },
});

export default LikeScreen
