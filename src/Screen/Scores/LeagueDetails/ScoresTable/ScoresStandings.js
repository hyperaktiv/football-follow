import React from 'react';
import { View, FlatList } from 'react-native';
import { BG_COLOR } from '../../../../Shared/Theme';

import TableHeader from './TableHeader';
import TableRow from './TableRow';


const scoresTable = require('./scoresTable.json');

const ScoresStandings = ({ leagueCode, name, country }) => {
   return (
      <View style={{
         flex: 1,
         backgroundColor: BG_COLOR
      }}>
         <TableHeader />
         <FlatList
            data={scoresTable.scorers}
            renderItem={({ item, index }) => (
               <TableRow
                  leagueCode={leagueCode}
                  position={index + 1}
                  playerID={item.player.id}
                  playerName={item.player.name}
                  teamName={item.team.name}
                  nationality={item.player.nationality}
                  goals={item.numberOfGoals} />)}
            keyExtractor={item => item.player.id.toString()}
         />

      </View>
   )
}

export default ScoresStandings
