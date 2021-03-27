import React, { useState, useEffect } from 'react';
import {
   View,
   FlatList,
   TextInput,
} from 'react-native';
import Header from '../../Shared/Header';
import { DIVIDE_COLOR, MAIN_COLOR } from '../../Shared/Theme';
import { useSelector } from 'react-redux';
import { THEMES } from '../../Redux/Reducers/theme';
import SearchItem from './SearchItem';

import useDebounce from './useDebounce';

// https://blog.jscrambler.com/add-a-search-bar-using-hooks-and-flatlist-in-react-native/

const searchData = require('./searchData.json');

const handleSearch = text => {
   const formatText = text.toLowerCase();
   const filteredData = searchData.filter(item => {
      return item.name.toLowerCase().includes(formatText);
   });
   return filteredData;
}

const SearchScreen = () => {
   const theme = useSelector(state => state.theme);
   const bg_color = THEMES[theme].bg_color;

   const [dataArray, setDataArray] = useState(searchData);
   const [query, setQuery] = useState('');

   // bounce input when user stop filling
   const debouncedQuery = useDebounce(query, 500);

   useEffect(() => {
      if (debouncedQuery) {
         setDataArray([]);
         let resultArray = handleSearch(debouncedQuery);
         setDataArray(resultArray)
      } else {
         setDataArray(searchData);
      }
   }, [debouncedQuery])


   const FlatListItemSeparator = () => {
      return (
         <View
            style={{
               height: 5,
               width: "100%",
               backgroundColor: bg_color,
            }}
         />
      );
   }

   // <ActivityIndicator size="large" color={MAIN_COLOR} />

   return (
      <>
         <Header title='Search' backAction={true} search={false} />

         <View style={{
            flex: 1,
            backgroundColor: bg_color,
         }}>
            <View style={{
               height: 40,
               backgroundColor: '#F5F6F9',
               paddingHorizontal: 3,
               paddingVertical: 5,
               marginVertical: 15,
               marginHorizontal: 15,
               borderRadius: 5,
               borderWidth: 1,
               borderColor: DIVIDE_COLOR
            }}>
               <TextInput
                  autoCapitalize="none"
                  autoCorrect={false}
                  clearButtonMode="always"
                  // autoFocus={true}
                  value={query}
                  onChangeText={queryText => setQuery(queryText)}
                  placeholder="Search for Football Teams"
                  style={{
                     fontSize: 16,
                     backgroundColor: '#fff',
                     paddingHorizontal: 10,
                     height: '100%'
                  }}
               />
            </View>

            <FlatList
               ItemSeparatorComponent={FlatListItemSeparator}
               data={dataArray}
               keyExtractor={item => item.name}
               renderItem={({ item }) => (<SearchItem img={item.crestUrl} name={item.name} />)}
            />

         </View>
      </>
   )
}

export default SearchScreen
