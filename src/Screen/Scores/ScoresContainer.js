import React, { useState, useEffect } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native';
import Header from '../../Shared/Header';

import { FontAwesome } from '@expo/vector-icons';

import { BG_COLOR, WHITE, pgHorizontal, DIVIDE_COLOR, MAIN_COLOR, GRAY } from '../../Shared/Theme';
import CalendarStrip from 'react-native-calendar-strip';

import LeagueContainer from './LeagueContainer';
import GameContainer from './GameContainer';

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
      "lastUpdated": "2021-03-07T08:36:09Z"
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
      "lastUpdated": "2021-03-07T08:36:12Z"
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
      "lastUpdated": "2021-03-07T01:50:15Z"
   },
   {
      "id": 2015,
      "area": {
         "id": 2081,
         "name": "France",
         "countryCode": "FRA",
         "ensignUrl": "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg"
      },
      "name": "Ligue 1",
      "code": "FL1",
      "emblemUrl": null,
      "plan": "TIER_ONE",
      "currentSeason": {
         "id": 596,
         "startDate": "2020-08-22",
         "endDate": "2021-05-23",
         "currentMatchday": 28,
         "winner": null
      },
      "numberOfAvailableSeasons": 11,
      "lastUpdated": "2021-03-04T02:50:03Z"
   },
   {
      "id": 2014,
      "area": {
         "id": 2224,
         "name": "Spain",
         "countryCode": "ESP",
         "ensignUrl": "https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg"
      },
      "name": "Primera Division",
      "code": "PD",
      "emblemUrl": null,
      "plan": "TIER_ONE",
      "currentSeason": {
         "id": 635,
         "startDate": "2020-09-13",
         "endDate": "2021-05-23",
         "currentMatchday": 26,
         "winner": null
      },
      "numberOfAvailableSeasons": 28,
      "lastUpdated": "2021-03-07T08:36:17Z"
   },
];

const ScoresContainer = ({ navigation }) => {

   const [date, setDate] = useState(new Date());
   const [minDate, setMinDate] = useState();
   const [maxDate, setMaxDate] = useState();

   useEffect(() => {
      let minDate1 = new Date();
      let maxDate1 = new Date();
      minDate1.setDate(date.getDate() - 5);
      maxDate1.setDate(date.getDate() + 5);
      setMinDate(minDate1.toDateString());
      setMaxDate(maxDate1.toDateString());

      return () => {
         setMinDate();
         setMaxDate();
      }
   }, [])

   return (
      <>
         <Header title='Scores' navigation={navigation} />

         <View style={styles.container} >

            <View style={styles.timeContainer}>
               {/* <MText>TODAY BUTTON</MText> */}

               <CalendarStrip
                  scrollable
                  style={{
                     height: 80,
                     marginTop: 10,
                  }}
                  selectedDate={date.toDateString()}
                  // onDateSelected={this.onDateSelected}
                  minDate={minDate}
                  maxDate={maxDate}
                  calendarColor={BG_COLOR}
                  calendarHeaderStyle={{ color: WHITE }}
                  dateNumberStyle={{ color: WHITE }}
                  dateNameStyle={{ color: WHITE }}
                  calendarAnimation={{ type: 'sequence', duration: 30 }}
                  daySelectionAnimation={{
                     type: 'border',  // background
                     duration: 300,
                     highlightColor: '#E0E0E0'
                  }}
                  highlightDateNumberStyle={{ color: MAIN_COLOR }}
                  highlightDateNameStyle={{ color: MAIN_COLOR }}
                  highlightDateContainerStyle={{}}

                  iconContainer={{ flex: 0.1 }}
                  iconRight={require('./right-arrow-white.png')}
                  iconLeft={require('./left-arrow-white.png')}
               />
            </View>

            <ScrollView>

               {data && data.map(record => (
                  <LeagueContainer
                     name={record.name}
                     country={record.area.name}
                     leagueCode={record.code}
                     flagImg={record.area.ensignUrl}
                     navigation={navigation}
                     key={record.name}
                  />
               ))}

               {/* <GameContainer teamA="Manchester United" goalA="0" imgA="" teamB="Manchester City" goalB="1" imgB="" status="FT" /> */}

            </ScrollView>
         </View>
      </>
   )
}
const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: BG_COLOR,
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
