import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { BG_COLOR } from '../../../../Shared/Theme';

import TableHeader from './TableHeader';
import TableRow from './TableRow';
import TableFooter from './TableFooter';

const standings_data = require('./standings.json');

const Standings = ({ leagueCode, name, country }) => {
   const tables = standings_data.standings[0].table;
   return (
      <View style={{
         flex: 1,
         backgroundColor: BG_COLOR
      }}>
         <TableHeader />

         <ScrollView>
            {tables.map(item => {
               return (<TableRow
                  leagueCode={standings_data.competition.code}
                  key={item.team.id}
                  position={item.position}
                  teamName={item.team.name}
                  image={item.team.crestUrl}
                  p={item.playedGames} w={item.won} d={item.draw} l={item.lost} pts={item.points}
                  form={item.form} />)
            })}

            <TableFooter />
         </ScrollView>

      </View>
   )
}

export default Standings
