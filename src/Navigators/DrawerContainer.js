import React from 'react';

import CustomDrawerContent from '../Screen/DrawerNav/CustomDrawerContent';
import Main from './Main';

import {
   createDrawerNavigator,
} from '@react-navigation/drawer';

import { useSelector } from 'react-redux';
import { THEMES } from '../Redux/Reducers/theme';

const Drawer = createDrawerNavigator();

const DrawerContainer = () => {

   const theme = useSelector(state => state.theme);
   const bg_color = THEMES[theme].bg_color;

   return (
      <Drawer.Navigator
         // openByDefault
         drawerType="slide"
         drawerContent={(props) => <CustomDrawerContent {...props} />}
         drawerStyle={{
            backgroundColor: bg_color,
            width: 340,
         }}
      >
         <Drawer.Screen name="Main" component={Main} />
      </Drawer.Navigator>
   )
}

export default DrawerContainer
