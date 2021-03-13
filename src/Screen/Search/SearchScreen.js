import React, { useState } from 'react';
import {
   View,
   FlatList,
   TextInput,
} from 'react-native';
import Header from '../../Shared/Header';
import { DIVIDE_COLOR } from '../../Shared/Theme';
import { useSelector } from 'react-redux';
import { THEMES } from '../../Redux/Reducers/theme';
import SearchItem from './SearchItem';

// https://blog.jscrambler.com/add-a-search-bar-using-hooks-and-flatlist-in-react-native/

const searchData = require('./searchData.json');

const SearchScreen = () => {
   const theme = useSelector(state => state.theme);
   const bg_color = THEMES[theme].bg_color;

   const [dataArray, setDataArray] = useState(searchData);
   const [query, setQuery] = useState('');

   const handleSearch = text => {
      const formatText = text.toLowerCase();
      const filteredData = searchData.filter(item => {
         return contains(item, formatText);
      });
      setQuery(text);
      setDataArray(filteredData);
      // console.log(filteredData);
   }
   const contains = ({ name }, searchText) => {
      if (name.toLowerCase().includes(searchText)) {
         return true;
      }
      return false;
   }


   const renderSearchInput = () => (
      <View style={{
         backgroundColor: '#fff',
         paddingHorizontal: 10,
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
            autoFocus={true}
            value={query}
            onChangeText={queryText => handleSearch(queryText)}
            placeholder="Search for Football Teams"
            style={{
               backgroundColor: '#fff',
               paddingHorizontal: 10
            }}
         />
      </View>
   )

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

   return (
      <>
         <Header title='Search' backAction={true} search={false} />

         <View style={{
            flex: 1,
            backgroundColor: bg_color,
         }}>
            <FlatList
               ListHeaderComponent={renderSearchInput}
               ItemSeparatorComponent={FlatListItemSeparator}
               data={dataArray}
               keyExtractor={item => item.name}
               renderItem={({ item }) => (
                  <SearchItem img={item.crestUrl} name={item.name} />)
               }
            />
         </View>
      </>
   )
}

export default SearchScreen
