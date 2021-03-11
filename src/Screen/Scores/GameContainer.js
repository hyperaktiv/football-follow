import React from 'react'
import { View } from 'react-native';
import GameItem from './GameItem';


// day match data: https://api.football-data.org//v2/competitions/{leagueCode}/matches?dateFrom=2021-03-07&dateTo=2021-03-07
const matchDay = require('./matchDay.json');

const GameContainer = ({ listMatch }) => {

   return (
      <>
         {/* {listMatch.length !== 0 && listMatch.map(item => ( */}
         {matchDay.matches.map(item => (
            <GameItem
               key={item.id}
               matchItem={item}
            />
         ))}
      </>
   )
}

export default GameContainer
