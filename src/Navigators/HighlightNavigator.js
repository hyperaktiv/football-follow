import React from 'react';
import HighlightScreen from '../Screen/Highlight/HighlightScreen';
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
               header: (props) => (<Header title={props.scene.route.name} />)
            }} />

      </Stack.Navigator>
   )
}

export default HighlightNavigator
