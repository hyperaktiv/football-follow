import React, { useEffect } from 'react';
import { View, FlatList, RefreshControl } from 'react-native';
import { MAIN_COLOR } from '../../Shared/Theme';
import NewsItem from './NewsItem';
import { useSelector } from 'react-redux';
import { THEMES } from '../../Redux/Reducers/theme';
// import axios from 'axios';
// import { parseString } from 'xml2js';

// https://www.eyefootball.com/rss
const xml_url = 'https://www.eyefootball.com/football_news.xml';
const newsData = require('./news.json');

const wait = timeout => {
   return new Promise(resolve => {
      setTimeout(resolve, timeout);
   });
};

const NewsScreen = () => {

   const theme = useSelector(state => state.theme);
   const bg_color = THEMES[theme].bg_color;

   const [refreshing, setRefreshing] = React.useState(false);
   const onRefresh = React.useCallback(() => {
      setRefreshing(true);
      wait(1500).then(() => setRefreshing(false));
   }, []);

   // let [newsData, setNewsData] = useState([]);

   useEffect(() => {
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

      return () => {
         // setNewsData([]);
      }
   }, []);


   return (
      <View style={{
         flex: 1,
         backgroundColor: bg_color,
         paddingHorizontal: 5,
         paddingTop: 5,
         paddingVertical: 15
      }}>

         <FlatList
            data={newsData.rss.channel[0].item}
            keyExtractor={item => item.guid[0]}
            renderItem={({ item }) => (<NewsItem
               description={item.description[0]}
               item={item}
            />)}
            ItemSeparatorComponent={() => (<View style={{
               height: 2,
               backgroundColor: bg_color,
               paddingVertical: 4,
            }} />)}
            refreshControl={
               <RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor={MAIN_COLOR} />
            }
         />

      </View>
   )
}

export default NewsScreen
