import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import Header from '../../Shared/Header';

import NewsItem from './NewsItem';
import { BG_COLOR, DIVIDE_COLOR } from '../../Shared/Theme';
// import axios from 'axios';
// import { parseString } from 'xml2js';

// https://www.eyefootball.com/rss
const xml_url = 'https://www.eyefootball.com/football_news.xml';
const newsData = require('./news.json');

const NewsScreen = ({ navigation }) => {

   // let [newsData, setNewsData] = useState([]);

   // useEffect(() => {
   //    axios
   //       .get(xml_url, {
   //          headers: new Headers({
   //             Accept: "text/html",
   //             "content-type": "application/x-www-form-urlencoded",
   //             "Access-Control-Allow-Origin": "*",
   //             "Access-Control-Allow-Methods": "GET, POST, PUT",
   //             "Access-Control-Allow-Headers": "Content-Type",
   //          }),
   //          mode: "no-cors",
   //       }).then((res) => {
   //          parseString(res.data, (err, result) => {
   //             setNewsData(result.rss.channel[0].item);
   //             // console.log(result.rss.channel[0].item);
   //          });
   //       }).catch((error) => {
   //          console.log(error)
   //       })

   //    return () => {
   //       setNewsData([]);
   //    }
   // }, [])


   return (
      <>
         <Header title='News' navigation={navigation} />
         <View style={{
            flex: 1,
            backgroundColor: BG_COLOR,
            paddingHorizontal: 5,
            borderTopWidth: 1,
            borderTopColor: DIVIDE_COLOR,
         }}>

            <FlatList
               data={newsData.rss.channel[0].item}
               renderItem={({ item }) => <NewsItem
                  title={item.title}
                  time={item.pubDate}
                  link={item.link}
                  description={item.description[0]} />}
               keyExtractor={item => item.guid[0]}
            />

         </View>
      </>
   )
}

export default NewsScreen
