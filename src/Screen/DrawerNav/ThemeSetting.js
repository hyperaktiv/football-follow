import React, { useState } from 'react'
import {
   View,
   Switch,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { toggleTheme } from '../../Redux/Actions/themeActions';
import { useDispatch, useSelector } from 'react-redux';
import CusomText from '../../Shared/CustomText';
import { THEMES } from '../../Redux/Reducers/theme';


const ThemeSetting = () => {

   const dispatch = useDispatch();
   const theme = useSelector(state => state.theme);
   const iconColor = THEMES[theme].iconColor;
   const divide_color = THEMES[theme].divide_color;

   const [isEnabled, setIsEnabled] = useState(false);

   const toggleSwitch = () => {
      setIsEnabled(previousState => !previousState);
      dispatch(toggleTheme())
   };

   return (
      <View
         style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderBottomWidth: 1,
            borderColor: divide_color,
            paddingHorizontal: 20,
            paddingVertical: 5,
            // marginTop: 5,
         }}>
         <View style={{ width: 30, justifyContent: 'center', alignItems: 'center' }}>
            <MaterialCommunityIcons name="theme-light-dark" size={24} color={iconColor} />
         </View>
         <View style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 5,
            paddingLeft: 10,
         }}>
            <CusomText bold>Dark/Light Theme</CusomText>
            <Switch
               trackColor={{ false: "#767577", true: "#81b0ff" }}
               thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
               ios_backgroundColor="#3e3e3e"
               onValueChange={toggleSwitch}
               value={isEnabled}
            />
         </View>
      </View>
   )
}

export default ThemeSetting;
