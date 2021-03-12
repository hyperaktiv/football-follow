import React, { useEffect, useState } from 'react';
import {
   View,
   FlatList,
   TextInput,
   StyleSheet,
   ActivityIndicator,
   Image
} from 'react-native';
import { MText } from '../../Shared/StyledComponents/MText';

import Header from '../../Shared/Header';
import { BG_COLOR, pgHorizontal, DIVIDE_COLOR } from '../../Shared/Theme';
import CustomText from '../../Shared/CustomText';
import { useSelector } from 'react-redux';
import { THEMES } from '../../Redux/Reducers/theme';

const data = [
   {
      "gender": "male",
      "name": {
         "title": "Mr",
         "first": "Janique",
         "last": "Costa"
      },
      "location": {
         "street": {
            "number": 8364,
            "name": "Rua Belo Horizonte "
         },
         "city": "Araraquara",
         "state": "Rondônia",
         "country": "Brazil",
         "postcode": 12989,
         "coordinates": {
            "latitude": "-74.5614",
            "longitude": "-150.0978"
         },
         "timezone": {
            "offset": "+1:00",
            "description": "Brussels, Copenhagen, Madrid, Paris"
         }
      },
      "email": "janique.costa@example.com",
      "login": {
         "uuid": "827d20c0-fa56-40aa-a2de-7df6d682d269",
         "username": "smalltiger544",
         "password": "brownie",
         "salt": "7QvzaON4",
         "md5": "12b90398592831552763936af62cf6e8",
         "sha1": "3e7edd839bf49ad03b1df58a9f0fe5a354ca24b3",
         "sha256": "417860b9520d81127a479a785c7886a30de02751f33787a2daa8bca21ac81bed"
      },
      "dob": {
         "date": "1991-08-17T12:17:45.926Z",
         "age": 30
      },
      "registered": {
         "date": "2019-03-23T12:56:23.958Z",
         "age": 2
      },
      "phone": "(84) 5181-4592",
      "cell": "(23) 6323-6609",
      "id": {
         "name": "",
         "value": null
      },
      "picture": {
         "large": "https://randomuser.me/api/portraits/men/42.jpg",
         "medium": "https://randomuser.me/api/portraits/med/men/42.jpg",
         "thumbnail": "https://randomuser.me/api/portraits/thumb/men/42.jpg"
      },
      "nat": "BR"
   },
   {
      "gender": "male",
      "name": {
         "title": "Mr",
         "first": "Khaled",
         "last": "Børresen"
      },
      "location": {
         "street": {
            "number": 8902,
            "name": "Asperudtoppen"
         },
         "city": "Norheimsund",
         "state": "Akershus",
         "country": "Norway",
         "postcode": "1279",
         "coordinates": {
            "latitude": "73.8306",
            "longitude": "-82.1636"
         },
         "timezone": {
            "offset": "+8:00",
            "description": "Beijing, Perth, Singapore, Hong Kong"
         }
      },
      "email": "khaled.borresen@example.com",
      "login": {
         "uuid": "369635aa-1ed1-471d-a090-038dc8f765d5",
         "username": "ticklishgoose634",
         "password": "fick",
         "salt": "oHYVF9Dz",
         "md5": "1b836c05c70dc3a457da18af8e6b498d",
         "sha1": "90449038fb0be795fed96cb3247add5b2c4b1818",
         "sha256": "3c06758be71b4faeb997f8922b618a95449b062ba2717a2e837d71b6cfb4121f"
      },
      "dob": {
         "date": "1966-04-22T03:43:42.487Z",
         "age": 55
      },
      "registered": {
         "date": "2016-05-11T09:38:36.974Z",
         "age": 5
      },
      "phone": "78129723",
      "cell": "46056509",
      "id": {
         "name": "FN",
         "value": "22046648998"
      },
      "picture": {
         "large": "https://randomuser.me/api/portraits/men/25.jpg",
         "medium": "https://randomuser.me/api/portraits/med/men/25.jpg",
         "thumbnail": "https://randomuser.me/api/portraits/thumb/men/25.jpg"
      },
      "nat": "NO"
   },
   {
      "gender": "female",
      "name": {
         "title": "Miss",
         "first": "Maja",
         "last": "Kristensen"
      },
      "location": {
         "street": {
            "number": 1349,
            "name": "Overgade"
         },
         "city": "Haslev",
         "state": "Sjælland",
         "country": "Denmark",
         "postcode": 30411,
         "coordinates": {
            "latitude": "16.8276",
            "longitude": "-35.8954"
         },
         "timezone": {
            "offset": "+8:00",
            "description": "Beijing, Perth, Singapore, Hong Kong"
         }
      },
      "email": "maja.kristensen@example.com",
      "login": {
         "uuid": "c4bc13ec-340a-409a-80f0-25a953d294b3",
         "username": "orangeelephant232",
         "password": "ground",
         "salt": "03T2DiE5",
         "md5": "571c7ecc9a8e6de587a86bec1f1938c4",
         "sha1": "34863b9f7d233e7d0a98d0dfd3d4ccf8c900b459",
         "sha256": "b6a0bb19a59b4150bbd5e13c44fd9d3acce4cd7f1fbf61ce43b54453a14dccbf"
      },
      "dob": {
         "date": "1988-04-21T12:38:19.066Z",
         "age": 33
      },
      "registered": {
         "date": "2010-04-01T08:17:24.378Z",
         "age": 11
      },
      "phone": "14295904",
      "cell": "47533088",
      "id": {
         "name": "CPR",
         "value": "210488-4824"
      },
      "picture": {
         "large": "https://randomuser.me/api/portraits/women/12.jpg",
         "medium": "https://randomuser.me/api/portraits/med/women/12.jpg",
         "thumbnail": "https://randomuser.me/api/portraits/thumb/women/12.jpg"
      },
      "nat": "DK"
   },
];

const SearchScreen = () => {
   // const theme = useSelector(state => state.theme);
   // const bg_color = THEMES[theme].bg_color;

   const [isLoading, setIsLoading] = useState(false);
   const [dataArray, setDataArray] = useState(data);
   const [query, setQuery] = useState('');

   // useEffect(() => {
   //    setIsLoading(true);

   //    fetch(API_ENDPOINT)
   //      .then(response => response.json())
   //      .then(response => {
   //        setData(response.results);

   //        // ADD THIS
   //        setFullData(response.results);

   //        setIsLoading(false);
   //      })
   //      .catch(err => {
   //        setIsLoading(false);
   //        setError(err);
   //      });
   //  }, []);

   const handleSearch = text => {
      const formatText = text.toLowerCase();
      const filteredData = data.filter(item => {
         return contains(item, formatText);
      });
      setQuery(text);
      setDataArray(filteredData);
      // console.log(filteredData);
   }
   const contains = ({ name, email }, searchText) => {
      let { first, last } = name;

      if (first.includes(searchText) || last.includes(searchText) || email.includes(searchText)) {
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
         borderRadius: 5
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

   // if (isLoading) {
   //    return (
   //       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
   //          <ActivityIndicator size="large" color="#5500dc" />
   //       </View>
   //    );
   // }


   return (
      <>
         {/* <Header title='Search' backAction={true} search={false} /> */}

         <View style={{
            flex: 1,
            // backgroundColor: bg_color,
            paddingTop: 50,
            marginBottom: 50
         }}>
            <FlatList
               ListHeaderComponent={renderSearchInput}
               data={dataArray}
               keyExtractor={item => item.email}
               renderItem={({ item }) => (
                  <CustomText bold white>{item.email}</CustomText>)
               }
            />
         </View>
      </>
   )
}

export default SearchScreen
