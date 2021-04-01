import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';

import TableHeader from './TableHeader';
import TableRow from './TableRow';
import TableFooter from './TableFooter';
import { useSelector } from 'react-redux';
import { THEMES } from '../../../../Redux/Reducers/theme';

const Standings = ({ leagueCode, name, country, standingData }) => {

   const theme = useSelector(state => state.theme);
   const bg_color = THEMES[theme].bg_color;
   const divide_color = THEMES[theme].divide_color;
   const gameColor = THEMES[theme].gameColor;

   // const [standingData, setStandingData] = useState([]);
   // useEffect(() => {
   //    let tempData;
   //    if (leagueCode == 'PL') tempData = require('../../data/plStanding.json');
   //    if (leagueCode == 'SA') tempData = require('../../data/saStanding.json');
   //    if (leagueCode == 'BL1') tempData = require('../../data/bl1Standing.json');
   //    setStandingData(tempData.standings[0].table);
   //    return () => {
   //       setStandingData([]);
   //    }
   // }, []);

   return (
      <View style={{
         flex: 1,
         backgroundColor: bg_color,
         paddingHorizontal: 5
      }}>
         <TableHeader />
         <FlatList
            data={standingData}
            renderItem={({ item }) => (
               <TableRow
                  gameColor={gameColor}
                  divide_color={divide_color}
                  leagueCode={leagueCode}
                  position={item.position}
                  teamName={item.team.name}
                  image={item.team.crestUrl}
                  p={item.playedGames} w={item.won} d={item.draw} l={item.lost} pts={item.points}
                  form={item.form} />)
            }
            keyExtractor={item => item.team.name}
            ListFooterComponent={<TableFooter />}
         />

      </View>
   )
}

export default Standings
