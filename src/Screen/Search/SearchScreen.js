import React, { useEffect } from 'react';
import { View, FlatList, TextInput } from 'react-native';
import { MText } from '../../Shared/StyledComponents/MText';

import Header from '../../Shared/Header';
import { BG_COLOR, pgHorizontal, DIVIDE_COLOR } from '../../Shared/Theme';

const data = [
   { id: '1', title: 'First item' },
   { id: '2', title: 'Second item' },
   { id: '3', title: 'Third item' },
   { id: '4', title: 'Fourth item' }
];

const SearchScreen = () => {

   const [query, setQuery] = useState('');
   const [fullData, setFullData] = useState([]);

   const renderSearchInput = () => (
      <View style={{
         backgroundColor: '#fff',
         padding: 10,
         marginVertical: 10,
         borderRadius: 15
      }}>
         <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            clearButtonMode="always"
            value={query}
            onChangeText={queryText => handleSearch(queryText)}
            placeholder="Search"
            style={{ backgroundColor: '#fff', paddingHorizontal: 10 }}
         />
      </View>
   )

   return (
      <>
         <Header title='Search' backAction={true} search={false} />

         <View style={{
            flex: 1,
            backgroundColor: '#f8f8f8',
            alignItems: 'center'
         }}>
            <MText>Searching for Football Club</MText>
            <FlatList
               data={data}
               keyExtractor={item => item.id}
               renderItem={({ item }) => {
                  <View style={{
                     marginTop: 10,
                     padding: 20,
                     alignItems: 'center',
                     backgroundColor: '#fff',
                     width: '100%'
                  }}>
                     <MText>{item.title}</MText>
                  </View>
               }}
            />
         </View>
      </>
   )
}

export default SearchScreen
