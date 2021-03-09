import React from 'react';
import { View, FlatList, Text } from 'react-native';
import { BG_COLOR, DIVIDE_COLOR } from '../../Shared/Theme';

import Header from '../../Shared/Header';
import HighlightItem from './HighlightItem';

// https://www.scorebat.com/video-api/
const highlights = require('./data.json');

const HighlightScreen = ({ navigation }) => {
   return (
      <>
         <Header title='Highlights' navigation={navigation} />
         <View style={{
            flex: 1,
            backgroundColor: BG_COLOR,
            paddingHorizontal: 5,
            borderTopWidth: 1,
            borderTopColor: DIVIDE_COLOR,
         }}>
            <FlatList
               data={highlights}
               renderItem={({ item }) => <HighlightItem item={item} />}
               keyExtractor={item => item.title}
            />
         </View>
      </>
   )
}

export default HighlightScreen