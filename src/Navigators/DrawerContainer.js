import React from 'react';

import CustomDrawerContent from '../Screen/DrawerNav/CustomDrawerContent';
import Main from './Main';

import { createDrawerNavigator, } from '@react-navigation/drawer';
// redux
import { useSelector } from 'react-redux';
import { THEMES } from '../Redux/Reducers/theme';

import SearchScreen from '../Screen/Search/SearchScreen';
import ClubScreen from '../Screen/Search/ClubScreen';

const Drawer = createDrawerNavigator();

const DrawerContainer = () => {

   const theme = useSelector(state => state.theme);
   const bg_color = THEMES[theme].bg_color;

   return (
      <Drawer.Navigator
         drawerType="slide"
         drawerContent={(props) => <CustomDrawerContent {...props} />}
         drawerStyle={{
            backgroundColor: bg_color,
            width: 360,
         }}
      >
         <Drawer.Screen name="Main" component={Main} />
         <Drawer.Screen name="SearchScreen" component={SearchScreen} />
         <Drawer.Screen name="ClubScreen" component={ClubScreen} />

      </Drawer.Navigator>
   )
}

export default DrawerContainer
