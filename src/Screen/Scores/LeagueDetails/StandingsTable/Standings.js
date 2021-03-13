import React from 'react';
import { View, ScrollView } from 'react-native';
import { BG_COLOR } from '../../../../Shared/Theme';

import TableHeader from './TableHeader';
import TableRow from './TableRow';
import TableFooter from './TableFooter';
import { useSelector } from 'react-redux';
import { THEMES } from '../../../../Redux/Reducers/theme';

const standings_data = require('./standings.json');

const Standings = () => {

   const theme = useSelector(state => state.theme);
   const bg_color = THEMES[theme].bg_color;

   const tables = standings_data.standings[0].table;
   return (
      <View style={{
         flex: 1,
         backgroundColor: bg_color
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
