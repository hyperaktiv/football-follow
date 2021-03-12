import React from 'react'
import { View, Button } from 'react-native';
import Header from '../../Shared/Header';
import { GAME_COLOR, DIVIDE_COLOR, GRAY, pgHorizontal } from '../../Shared/Theme';

import { MText } from '../../Shared/StyledComponents/MText';

import { WebView } from 'react-native-webview';
import * as WebBrowser from 'expo-web-browser';

// navigation
import { useRoute } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { THEMES } from '../../Redux/Reducers/theme';
import CustomText from '../../Shared/CustomText';

const HighlightPage = () => {

   const theme = useSelector(state => state.theme);
   const bg_color = THEMES[theme].bg_color;
   const gameColor = THEMES[theme].gameColor;

   const route = useRoute();

   return (
      <>
         <Header title='Highlight' backAction={true} />

         <View style={{
            flex: 1,
            backgroundColor: bg_color,
            justifyContent: 'center',
            alignContent: 'center',
         }}>
            <WebView
               originWhitelist={['*']}
               source={{
                  html: route.params.item.videos[0].embed,
               }}
            />
            <View style={{ flex: 1.6, }}>
               <View
                  style={{
                     height: 50,
                     marginTop: 20,
                     backgroundColor: gameColor,
                     flexDirection: 'row',
                     marginHorizontal: pgHorizontal,
                     borderWidth: 1,
                     borderColor: DIVIDE_COLOR,
                     borderRadius: 20,
                     justifyContent: 'space-around',
                     alignItems: 'center'
                  }}
               >
                  <CustomText large white>{route.params.item.side1.name}</CustomText>
                  <CustomText>-</CustomText>
                  <CustomText large white>{route.params.item.side2.name}</CustomText>
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
                  backgroundColor: gameColor,
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
