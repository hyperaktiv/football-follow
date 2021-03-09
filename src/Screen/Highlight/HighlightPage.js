import React from 'react'
import { View, Button } from 'react-native';
import Header from '../../Shared/Header';
import { GAME_COLOR, BG_COLOR, WHITE, DIVIDE_COLOR, GRAY, pgHorizontal } from '../../Shared/Theme';

import { MText } from '../../Shared/StyledComponents/MText';

import { WebView } from 'react-native-webview';
import * as WebBrowser from 'expo-web-browser';

// navigation
import { useNavigation, useRoute } from '@react-navigation/native';

const HighlightPage = () => {
   const navigation = useNavigation();
   const route = useRoute();

   return (
      <>
         <Header title='Highlight' navigation={navigation} />

         <View style={{
            flex: 1,
            backgroundColor: BG_COLOR,
            justifyContent: 'center',
            alignContent: 'center',
         }}>
            <WebView
               originWhitelist={['*']}
               source={{
                  html: route.params.item.videos[0].embed,
               }}
            />
            <View style={{ flex: 1.8, }}>
               <View
                  style={{
                     height: 50,
                     marginTop: 20,
                     backgroundColor: GAME_COLOR,
                     flexDirection: 'row',
                     marginHorizontal: pgHorizontal,
                     borderWidth: 1,
                     borderColor: DIVIDE_COLOR,
                     borderRadius: 20,
                     justifyContent: 'space-around',
                     alignItems: 'center'
                  }}
               >
                  <MText large white>{route.params.item.side1.name}</MText>
                  <MText>-</MText>
                  <MText large white>{route.params.item.side2.name}</MText>
               </View>
               <View style={{
                  marginTop: 2,
                  width: '80%',
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  marginHorizontal: pgHorizontal,
                  borderWidth: 1,
                  borderColor: DIVIDE_COLOR,
                  alignSelf: 'center'
               }}>
                  <Button title="More info"
                     onPress={async () => {
                        await WebBrowser.openBrowserAsync(route.params.item.side1.url)
                     }} />
                  <Button title="More info"
                     onPress={async () => {
                        await WebBrowser.openBrowserAsync(route.params.item.side2.url)
                     }} />
               </View>


               <View style={{
                  marginTop: 30,
                  backgroundColor: GAME_COLOR,
                  marginHorizontal: pgHorizontal,
                  borderWidth: 1,
                  borderColor: DIVIDE_COLOR,
                  borderRadius: 20,
               }}>
                  <View style={{
                     flexDirection: 'row',
                     justifyContent: 'space-around',
                     alignItems: 'center'
                  }}>
                     <Button title="More about this game"
                        onPress={async () => {
                           await WebBrowser.openBrowserAsync(route.params.item.url)
                        }} />
                  </View>
               </View>


            </View>
         </View>

      </>
   )
}

export default HighlightPage
