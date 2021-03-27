import React, { useEffect, useState } from 'react';
import {
   View, Image,
   TouchableOpacity,
   StyleSheet,
   Platform
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { SvgUri } from 'react-native-svg';
import CustomText from '../../Shared/CustomText';
import { useSelector } from 'react-redux';
import { THEMES } from '../../Redux/Reducers/theme';
import GameItem from './GameItem';

import moment from 'moment';

const LeagueContainer = ({
   date, name, country, leagueCode, flagImg, turnIn = true, navigation
}) => {
   const theme = useSelector(state => state.theme);
   const iconColor = THEMES[theme].iconColor;
   const divide_color = THEMES[theme].divide_color;
   const likeItems = useSelector(state => state.likeItems);

   const [leagueData, setLeagueData] = useState([]);

   useEffect(() => {
      // console.log(moment(date).format('LLLL'));
      // day match data: https://api.football-data.org//v2/competitions/{leagueCode}/matches?dateFrom=2021-03-07&dateTo=2021-03-07
      {/**
    // let _pl = axios.get(`https://api.football-data.org/v2/competitions/PL/matches?dateFrom=${selectedDate.toISOString().substr(0, 10)}&dateTo=${selectedDate.toISOString().substr(0, 10)}`, {
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
   */}

      let temp;
      // get 07/03 data
      if (moment(date).format('YYYY-MM-DD') == moment().format('YYYY-MM-DD')) {
         if (leagueCode == 'PL') temp = require('./data/pl0703.json');
         if (leagueCode == 'SA') temp = require('./data/sa0703.json');
         if (leagueCode == 'BL1') temp = require('./data/bl10703.json');
      }
      else {   // get 08/03 data
         if (leagueCode == 'PL') temp = require('./data/pl0803.json');
         if (leagueCode == 'SA') temp = require('./data/sa0803.json');
         if (leagueCode == 'BL1') temp = require('./data/bl10803.json');
      }
      setLeagueData(temp.matches);
      return () => {
         setLeagueData([]);
      }
   }, [date]);


   let flag = '';
   if (Platform.OS === 'ios' || Platform.OS === 'android') {
      flag = <SvgUri width={55} height={40} uri={flagImg} />
   } else {
      flag = <Image style={{ width: '100%', height: '80%', }} source={{ uri: flagImg, }} />
   }

   // display on the ScoresScreen with the right arrow
   if (turnIn == true) {
      return (
         <>
            {/**LEAGUE HEADER */}
            <TouchableOpacity
               style={[styles.leagueContainer, {
                  borderBottomWidth: 1,
                  borderColor: divide_color
               }]}
               onPress={() => {
                  navigation.navigate('LeagueDetails', {
                     name: name,
                     country: country,
                     leagueCode: leagueCode,
                     flagImg: flagImg
                  });
               }}
            >
               <View style={styles.flagContainer}>
                  {/**render flag */}
                  {flag}
               </View>
               <View style={{ flex: 5, marginLeft: 15 }}>
                  <CustomText title medium>{name}</CustomText>
                  <CustomText>{country}</CustomText>
               </View>
               {turnIn && (
                  <View style={styles.flagContainer}>
                     <AntDesign name="right" size={24} color={iconColor} />
                  </View>
               )}
            </TouchableOpacity>

            {/**LEAGUE MATCH */}
            {leagueData.length !== 0 &&
               leagueData.map(item => {

                  if (likeItems.indexOf(item) == -1) { // not be liked yet
                     return <GameItem key={item.id} matchItem={item} />
                  } else {
                     return <GameItem key={item.id} matchItem={item} liked={true} />
                  }
               })
            }
         </>
      );
   }

   // display on the TableScreen with the LIKE icon
   else {
      return (
         <View style={styles.leagueContainer}>
            <View style={styles.flagContainer}>
               {/**render flag */}
               {flag}
            </View>
            <View style={{ flex: 5, marginLeft: 15 }}>
               <CustomText title medium>{name}</CustomText>
               <CustomText>{country}</CustomText>
            </View>
         </View>
      )
   }
}
const styles = StyleSheet.create({
   leagueContainer: {
      flexDirection: 'row',
      paddingVertical: 5,
      marginTop: 10,
      marginBottom: 5
   },
   flagContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
   },
})

export default LeagueContainer
