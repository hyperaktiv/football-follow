import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { THEMES } from '../../../../Redux/Reducers/theme';

import TableHeader from './TableHeader';
import TableRow from './TableRow';

const ScoresStandings = ({ leagueCode, name, country }) => {

   const theme = useSelector(state => state.theme);
   const bg_color = THEMES[theme].bg_color;
   const divide_color = THEMES[theme].divide_color;
   const gameColor = THEMES[theme].gameColor

   const [scoresData, setScoresData] = useState([]);
   useEffect(() => {
      let tempData;
      if (leagueCode == 'PL') tempData = require('../../data/plScores.json');
      if (leagueCode == 'SA') tempData = require('../../data/saScores.json');
      if (leagueCode == 'BL1') tempData = require('../../data/bl1Scores.json');
      setScoresData(tempData.scorers);

      return () => {
         setScoresData([]);
      }
   }, []);

   return (
      <View style={{
         flex: 1,
         backgroundColor: bg_color
      }}>

         <TableHeader />
         <FlatList
            data={scoresData}
            renderItem={({ item, index }) => (
               <TableRow
                  gameColor={gameColor}
                  divide_color={divide_color}
                  leagueCode={leagueCode}
                  playerID={item.player.id}
                  position={index + 1}
                  playerName={item.player.name}
                  teamName={item.team.name}
                  nationality={item.player.nationality}
                  goals={item.numberOfGoals} />)
            }
            keyExtractor={item => item.player.id.toString()}
         />

      </View>
   )
}

export default ScoresStandings
