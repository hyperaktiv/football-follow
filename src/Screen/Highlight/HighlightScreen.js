import React, { useState, useRef, useCallback } from 'react';
import {
   View,
   FlatList,
   RefreshControl,
   Text,
   TouchableOpacity,
   Image,
   Button
} from 'react-native';
import { Modalize } from 'react-native-modalize';
import { WebView } from 'react-native-webview';
import { MAIN_COLOR } from '../../Shared/Theme';

import HighlightItem from './HighlightItem';
import { useSelector } from 'react-redux';
import { THEMES } from '../../Redux/Reducers/theme';

// https://www.scorebat.com/video-api/
const highlights = require('./data.json');

const wait = timeout => {
   return new Promise(resolve => {
      setTimeout(resolve, timeout);
   });
};

const HighlightScreen = () => {
   const theme = useSelector(state => state.theme);
   const bg_color = THEMES[theme].bg_color;

   const [refreshing, setRefreshing] = useState(false);
   const onRefresh = useCallback(() => {
      setRefreshing(true);
      wait(1500).then(() => setRefreshing(false));
   }, []);

   const [uri, setUri] = useState('');

   // MODALIZE
   const modalizeRef = useRef(null);
   const onOpenModal = (uri) => {
      setUri(uri);
      modalizeRef.current?.open();
   };
   const handleCloseModal = () => {
      if (modalizeRef.current) modalizeRef.current.close();
   };

   const renderHeader = () => (
      <TouchableOpacity
         style={{
            position: 'absolute',
            top: 10,
            right: 20,
            zIndex: 9000,
            alignItems: 'center',
            justifyContent: 'center',
            width: 25,
            height: 25,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            borderRadius: 4,
         }}
         activeOpacity={0.75}
         onPress={handleCloseModal}
         hitSlop={{ top: 15, right: 15, bottom: 15, left: 15 }}
      >
         <Image
            source={require('../../../assets/cross.png')}
            style={{ tintColor: '#fff', width: '40%', height: '40%' }}
         />
      </TouchableOpacity>
   );
   const renderModalContent = () => (
      <View style={{ padding: 12 }}>
         <Text style={{
            marginBottom: 2,
            fontSize: 22,
            fontWeight: '600',
            color: '#333',
            textAlign: 'center'
         }}>Touch to watch</Text>
         <View style={{ height: 225, marginVertical: 10 }}>
            <WebView
               originWhitelist={['*']}
               source={{
                  html: uri,
               }}
               style={{ borderWidth: 1 }}
            />
         </View>

         <Button onPress={handleCloseModal} title="Close" />
      </View>
   );

   return (
      <>
         <View style={{
            flex: 1,
            paddingTop: 10,
            backgroundColor: bg_color,
            paddingTop: 5,
         }}>
            <FlatList
               data={highlights}
               renderItem={({ item }) => <HighlightItem item={item} openModal={onOpenModal} />}
               keyExtractor={item => item.title}
               ItemSeparatorComponent={() => (
                  <View style={{
                     height: 2,
                     backgroundColor: bg_color,
                     paddingVertical: 4,
                  }} />
               )}
               refreshControl={
                  <RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor={MAIN_COLOR} />
               }
            />
         </View>

         {/**Modal */}
         <Modalize
            ref={modalizeRef}
            // adjustToContentHeight={true}
            modalHeight={350}
            HeaderComponent={renderHeader}
         >
            {renderModalContent()}
         </Modalize>
      </>
   )
}

export default HighlightScreen