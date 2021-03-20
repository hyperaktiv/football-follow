import React, { useState, useEffect, useCallback } from 'react'
import { View, StyleSheet, ScrollView, RefreshControl } from 'react-native';
import { pgHorizontal, DIVIDE_COLOR, MAIN_COLOR, GRAY } from '../../Shared/Theme';
import CalendarStrip from 'react-native-calendar-strip';

import LeagueContainer from './LeagueContainer';
import GameContainer from './GameContainer';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { THEMES } from '../../Redux/Reducers/theme';

import moment from 'moment';

const data = [
   {
      "id": 2021,
      "area": {
         "id": 2072,
         "name": "England",
         "countryCode": "ENG",
         "ensignUrl": "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg"
      },
      "name": "Premier League",
      "code": "PL",
      "emblemUrl": null,
      "plan": "TIER_ONE",
      "currentSeason": {
         "id": 619,
         "startDate": "2020-09-12",
         "endDate": "2021-05-23",
         "currentMatchday": 29,
         "winner": null
      },
      "numberOfAvailableSeasons": 28,
      "lastUpdated": "2021-03-07T08:36:09Z",

   },
   {
      "id": 2019,
      "area": {
         "id": 2114,
         "name": "Italy",
         "countryCode": "ITA",
         "ensignUrl": "https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg"
      },
      "name": "Serie A",
      "code": "SA",
      "emblemUrl": "https://crests.football-data.org/SA.svg",
      "plan": "TIER_ONE",
      "currentSeason": {
         "id": 638,
         "startDate": "2020-09-20",
         "endDate": "2021-05-23",
         "currentMatchday": 26,
         "winner": null
      },
      "numberOfAvailableSeasons": 17,
      "lastUpdated": "2021-03-07T08:36:12Z",
   },
   {
      "id": 2002,
      "area": {
         "id": 2088,
         "name": "Germany",
         "countryCode": "DEU",
         "ensignUrl": "https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg"
      },
      "name": "Bundesliga",
      "code": "BL1",
      "emblemUrl": null,
      "plan": "TIER_ONE",
      "currentSeason": {
         "id": 599,
         "startDate": "2020-09-18",
         "endDate": "2021-05-15",
         "currentMatchday": 24,
         "winner": null
      },
      "numberOfAvailableSeasons": 25,
      "lastUpdated": "2021-03-07T01:50:15Z",


      "league_slug": "bundesliga",
      "name": "Bundesliga",
      "nation": "Germany",
   },
   // {
   //    "id": 2015,
   //    "area": {
   //       "id": 2081,
   //       "name": "France",
   //       "countryCode": "FRA",
   //       "ensignUrl": "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg"
   //    },
   //    "name": "Ligue 1",
   //    "code": "FL1",
   //    "emblemUrl": null,
   //    "plan": "TIER_ONE",
   //    "currentSeason": {
   //       "id": 596,
   //       "startDate": "2020-08-22",
   //       "endDate": "2021-05-23",
   //       "currentMatchday": 28,
   //       "winner": null
   //    },
   //    "numberOfAvailableSeasons": 11,
   //    "lastUpdated": "2021-03-04T02:50:03Z"
   // },
   // {
   //    "id": 2014,
   //    "area": {
   //       "id": 2224,
   //       "name": "Spain",
   //       "countryCode": "ESP",
   //       "ensignUrl": "https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg"
   //    },
   //    "name": "Primera Division",
   //    "code": "PD",
   //    "emblemUrl": null,
   //    "plan": "TIER_ONE",
   //    "currentSeason": {
   //       "id": 635,
   //       "startDate": "2020-09-13",
   //       "endDate": "2021-05-23",
   //       "currentMatchday": 26,
   //       "winner": null
   //    },
   //    "numberOfAvailableSeasons": 28,
   //    "lastUpdated": "2021-03-07T08:36:17Z"
   // },
];

const wait = timeout => {
   return new Promise(resolve => {
      setTimeout(resolve, timeout);
   });
};

const ScoresContainer = ({ navigation }) => {

   const theme = useSelector(state => state.theme);
   const bg_color = THEMES[theme].bg_color;
   const txtColor = THEMES[theme].txtColor;

   const [selectedDate, setSelectedDate] = useState(moment().format('YYYY-MM-DD'));
   const [minDate, setMinDate] = useState(moment().subtract(4, 'days'));
   const [maxDate, setMaxDate] = useState(moment().add(4, 'days'));

   const [refreshing, setRefreshing] = React.useState(false);
   const onRefresh = React.useCallback(() => {
      setRefreshing(true);
      wait(2000).then(() => setRefreshing(false));
   }, []);


   const [pl, setPremier] = useState([]);
   const [sa, setSeriaA] = useState([]);
   const [bl1, setBunlesliga] = useState([]);

   useEffect(() => {
      // let _pl = axios.get(`https://api.football-data.org/v2/competitions/PL/matches?dateFrom=${selectedDate.toISOString().substr(0, 10)}&dateTo=${selectedDate.toISOString().substr(0, 10)}`, {
      //    headers: {
      //       'X-Auth-Token': 'dd5520b8f53f46b583801947683773f0',
      //       "content-type": "application/json"
      //    }
      // });
      // let _sa = axios.get(`https://api.football-data.org/v2/competitions/SA/matches?dateFrom=${selectedDate.toISOString().substr(0, 10)}&dateTo=${selectedDate.toISOString().substr(0, 10)}`, {
      //    headers: {
      //       'X-Auth-Token': 'dd5520b8f53f46b583801947683773f0',
      //       "content-type": "application/json"
      //    }
      // });
      // let _bl1 = axios.get(`https://api.football-data.org/v2/competitions/BL1/matches?dateFrom=${selectedDate.toISOString().substr(0, 10)}&dateTo=${selectedDate.toISOString().substr(0, 10)}`, {
      //    headers: {
      //       'X-Auth-Token': 'dd5520b8f53f46b583801947683773f0',
      //       "content-type": "application/json"
      //    }
      // });

      // axios.all([_pl, _sa, _bl1])
      //    .then(axios.spread((...response) => {
      //       setPremier(response[0].data.matches);
      //       setSeriaA(response[1].data.matches);
      //       setBunlesliga(response[2].data.matches);
      //       console.log("pl: ", response[0]);
      //       console.log("sa:", response[1]);
      //       console.log("bl1:", response[2]);
      //    }))
      //    .catch(err => {
      //       console.log(err);
      //    })


      return () => {
         setMinDate();
         setMaxDate();
         setPremier([]);
         setSeriaA([]);
         setBunlesliga([]);
      }
   }, [selectedDate]);

   return (
      <View style={[styles.container, {
         backgroundColor: bg_color,
      }]} >

         <View style={styles.timeContainer}>

            <CalendarStrip
               scrollable
               style={{
                  height: 80,
                  marginTop: 10,
               }}
               selectedDate={selectedDate}
               onDateSelected={(date) => {
                  setSelectedDate(date);
               }}
               minDate={minDate}
               maxDate={maxDate}
               calendarColor={bg_color}
               calendarHeaderStyle={{ color: txtColor }}
               dateNumberStyle={{ color: txtColor }}
               dateNameStyle={{ color: txtColor }}
               calendarAnimation={{ type: 'sequence', duration: 30 }}
               daySelectionAnimation={{
                  type: 'border',  // background
                  borderWidth: 1,
                  borderHighlightColor: '#E0E0E0',
                  duration: 200,
                  highlightColor: '#E0E0E0',   //'#E0E0E0'
               }}
               highlightDateNumberStyle={{ color: MAIN_COLOR }}
               highlightDateNameStyle={{ color: MAIN_COLOR }}
               iconContainer={{ flex: 0.1 }}
               iconRight={require('./right-arrow-white.png')}
               iconLeft={require('./left-arrow-white.png')}
            />
         </View>

         <ScrollView
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
         >

            {data && data.map(record => (
               <View
                  key={record.name}
               >
                  <LeagueContainer
                     name={record.name}
                     country={record.area.name}
                     leagueCode={record.code}
                     flagImg={record.area.ensignUrl}
                     navigation={navigation}
                  />

                  {record.code === 'PL' && (
                     <GameContainer listMatch={pl} />
                  )}

                  {record.code === 'SA' && (
                     <GameContainer listMatch={sa} />
                  )}

                  {record.code === 'BL1' && (
                     <GameContainer listMatch={bl1} />
                  )}

               </View>
            ))}


         </ScrollView>
      </View>
   )
}
const styles = StyleSheet.create({
   container: {
      flex: 1,
      paddingHorizontal: pgHorizontal,
      borderTopWidth: 1,
      borderTopColor: DIVIDE_COLOR
   },
   timeContainer: {
      borderBottomWidth: 1,
      borderColor: DIVIDE_COLOR
   }
});

export default ScoresContainer
