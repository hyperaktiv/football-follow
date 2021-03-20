import React from 'react';
import { View, FlatList } from 'react-native';
import { DIVIDE_COLOR } from '../../Shared/Theme';

import HighlightItem from './HighlightItem';
import { useSelector } from 'react-redux';
import { THEMES } from '../../Redux/Reducers/theme';

// https://www.scorebat.com/video-api/
const highlights = require('./data.json');

const HighlightScreen = ({ navigation }) => {
   const theme = useSelector(state => state.theme);
   const bg_color = THEMES[theme].bg_color;

   return (
      <>
         <View style={{
            flex: 1,
            backgroundColor: bg_color,
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