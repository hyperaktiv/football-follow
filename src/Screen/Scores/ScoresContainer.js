import React, { useState, useEffect } from 'react'
import { View, StyleSheet, ScrollView, RefreshControl } from 'react-native';
import { pgHorizontal, DIVIDE_COLOR, MAIN_COLOR } from '../../Shared/Theme';
import CalendarStrip from 'react-native-calendar-strip';

import LeagueContainer from './LeagueContainer';
// redux
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
   const divide_color = THEMES[theme].divide_color;

   const [selectedDate, setSelectedDate] = useState(moment());
   const [minDate, setMinDate] = useState(null);
   const [maxDate, setMaxDate] = useState(null);

   const [refreshing, setRefreshing] = React.useState(false);
   const onRefresh = React.useCallback(() => {
      setRefreshing(true);
      wait(1500).then(() => setRefreshing(false));
   }, []);

   useEffect(() => {
      setMinDate(moment().subtract(3, 'days'));
      setMaxDate(moment().add(3, 'days'));

      return () => {
         setMinDate();
         setMaxDate();
      }
   }, [selectedDate]);

   return (
      <View style={[styles.container, {
         backgroundColor: bg_color,
      }]} >

         <View style={{
            borderBottomWidth: 1,
            borderColor: divide_color
         }}>

            <CalendarStrip
               scrollable
               style={{
                  height: 70,
               }}
               selectedDate={selectedDate.format('YYYY-MM-DD')}
               onDateSelected={(date) => {
                  setSelectedDate(date);
               }}
               minDate={minDate}
               maxDate={maxDate}
               calendarColor={bg_color}
               calendarHeaderStyle={{ color: txtColor, marginBottom: -5, marginTop: 5 }}
               dateNumberStyle={{ color: txtColor }}
               dateNameStyle={{ color: txtColor }}
               calendarAnimation={{ type: 'sequence', duration: 30 }}
               daySelectionAnimation={{
                  type: 'border',  // background
                  borderWidth: 1,
                  borderHighlightColor: MAIN_COLOR,
                  duration: 2000,
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
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor={MAIN_COLOR} />}
         >

            {data && data.map(record => (
               <LeagueContainer
                  key={record.name}
                  date={selectedDate}
                  name={record.name}
                  country={record.area.name}
                  leagueCode={record.code}
                  flagImg={record.area.ensignUrl}
                  navigation={navigation}
               />
            ))}

         </ScrollView>
      </View>
   )
}
const styles = StyleSheet.create({
   container: {
      flex: 1,
      paddingHorizontal: pgHorizontal,
   },
   timeContainer: {
      borderBottomWidth: 1,
      borderColor: DIVIDE_COLOR
   }
});

export default ScoresContainer
