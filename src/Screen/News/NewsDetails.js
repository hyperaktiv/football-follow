import { useRoute } from '@react-navigation/core';
import React from 'react'

import { WebView } from 'react-native-webview';

const NewsDetails = () => {
   const route = useRoute();

   return (
      <>
         <WebView
            originWhitelist={['*']}
            source={{
               uri: route.params.link,
            }}
         />
      </>
   )
}

export default NewsDetails
