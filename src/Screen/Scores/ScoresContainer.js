import React from 'react'
import { View, StyleSheet, Dimensions, ScrollView } from 'react-native';
import Header from '../../Shared/Header';
import { FontAwesome } from '@expo/vector-icons';

import { BG_COLOR, WHITE, pgHorizontal, DIVIDE_COLOR } from '../../Shared/Theme';
import CalendarStrip from 'react-native-calendar-strip';

import LeagueContainer from './LeagueContainer';
import GameContainer from './GameContainer';

// var { width, height } = Dimensions.get('window');

const data = [
   { "code": "PL", "name": "Premier League", "country": "England" },
   { "code": "FAC", "name": "FA Cup", "country": "England" },
   { "code": "SA", "name": "Serie A", "country": "Italy" },
   { "code": "BL1", "name": "Bundesliga", "country": "Germany" },
   { "code": "FL1", "name": "Ligue 1", "country": "France" },
   { "code": "PD", "name": "Primera Division", "country": "Spain" },
   { "code": "CDR", "name": "Copa del Rey", "country": "Spain" },
];

const ScoresContainer = ({ navigation }) => {

   return (
      <>
         <Header title='Scores' />

         <View style={styles.container} >

            <View style={styles.timeContainer}>
               {/* <MText>TODAY BUTTON</MText> */}

               <CalendarStrip
                  scrollable
                  style={{
                     // width: '84%',
                     height: 80,
                     marginTop: 10,
                  }}
                  selectedDate={"sun Feb 21 2021"}
                  minDate={"Mon Feb 15 2021"}
                  maxDate={"Thu Feb 25 2021"}
                  calendarColor={BG_COLOR}
                  calendarHeaderStyle={{ color: WHITE }}
                  dateNumberStyle={{ color: WHITE }}
                  dateNameStyle={{ color: WHITE }}
                  calendarAnimation={{ type: 'sequence', duration: 30 }}
                  daySelectionAnimation={{ type: 'background', duration: 300, highlightColor: WHITE }}
                  iconContainer={{ flex: 0.1 }}
                  iconRight={require('./right-arrow-white.png')}
                  iconLeft={require('./left-arrow-white.png')}

               // onDateSelected={this.onDateSelected}
               />
            </View>

            <ScrollView>

               <LeagueContainer name={data[0].name} country={data[0].country} leagueCode={data[0].code} navigation={navigation} />

               {/* <LeagueContainer name={data[4].name} country={data[4].country} leagueCode={data[4].code} navigation={navigation} /> */}

               {/* <GameContainer teamA="Manchester United" goalA="0" imgA="" teamB="Manchester City" goalB="1" imgB="" status="FT" /> */}

               {/* <LeagueContainer name="League 1" country="France" /> */}

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
