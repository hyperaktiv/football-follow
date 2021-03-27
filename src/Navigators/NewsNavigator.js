import React from 'react'
import NewsScreen from '../Screen/News/NewsScreen';
import NewsDetails from '../Screen/News/NewsDetails';

import { createStackNavigator } from '@react-navigation/stack';
import Header from '../Shared/Header';
const Stack = createStackNavigator();

const NewsNavigator = () => {
   return (
      <Stack.Navigator>
         <Stack.Screen
            name="NewsScreen"
            component={NewsScreen}
            options={{
               header: (props) => (<Header title={props.scene.route.name} />)
            }} />
         <Stack.Screen
            name="NewsDetails"
            component={NewsDetails}
            options={{
               header: (props) => (<Header title={props.scene.route.name} backAction={true} />)
            }}
         />
      </Stack.Navigator>
   )
}

export default NewsNavigator
