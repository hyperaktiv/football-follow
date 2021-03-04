import React from 'react';

import CustomDrawerContent from '../Screen/DrawerNav/CustomDrawerContent';
import Main from './Main';

import { BG_COLOR } from '../Shared/Theme';

import {
   createDrawerNavigator,
} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const DrawerContainer = () => {
   return (
      <Drawer.Navigator
         drawerType="slide"
         drawerContent={(props) => <CustomDrawerContent {...props} />}
         drawerStyle={{
            backgroundColor: BG_COLOR,
            width: 340,
         }}
      >
         <Drawer.Screen name="Main" component={Main} />
      </Drawer.Navigator>
   )
}

export default DrawerContainer
