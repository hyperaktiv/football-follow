import React from 'react';
import HighlightScreen from '../Screen/Highlight/HighlightScreen';
import HighlightPage from '../Screen/Highlight/HighlightPage';

import { createStackNavigator } from '@react-navigation/stack';
import Header from '../Shared/Header';
const Stack = createStackNavigator();

const HighlightNavigator = () => {
   return (
      <Stack.Navigator>
         <Stack.Screen
            name="HighlightScreen"
            component={HighlightScreen}
            options={{
               // headerShown: false
               header: (props) => (<Header title={props.scene.route.name} />)
            }} />
         <Stack.Screen
            name="HighlightPage"
            component={HighlightPage}
            options={{
               header: (props) => (<Header title={props.scene.route.name} backAction={true} />)
            }}
         />
      </Stack.Navigator>
   )
}

export default HighlightNavigator
