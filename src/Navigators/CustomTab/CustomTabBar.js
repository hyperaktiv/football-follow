import React, { useState, useEffect } from 'react';
import {
   View,
   Text,
   TouchableOpacity,
   StyleSheet,
   Animated,
   Dimensions,
} from 'react-native';
import { FontAwesome, AntDesign, FontAwesome5, Entypo } from '@expo/vector-icons';

var { width } = Dimensions.get('window');

function IconWithBadge({ routeName, badgeCount, color, size }) {
   return (
      <View style={{ width: 24, height: 24, margin: 5 }}>
         <AntDesign name="star" size={size} color={color} />
         {badgeCount > 0 && (
            <View
               style={{
                  position: 'absolute',
                  right: -6,
                  top: -7,
                  backgroundColor: 'red',
                  borderRadius: 10,
                  width: 17,
                  height: 17,
                  justifyContent: 'center',
                  alignItems: 'center',
               }}>
               <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold', textAlign: 'center' }}>
                  {badgeCount}
               </Text>
            </View>
         )}
         {/* <Text>{routeName}</Text> routeName */}
      </View>
   );
}
function HomeIconWithBadge(props) {
   return <IconWithBadge {...props} />;
}
const TabIcon = ({ routeName, color, size }) => {
   if (routeName == "Scores")
      return (<FontAwesome name="soccer-ball-o" color={color} size={size} />)
   if (routeName == "Likes")
      return (< AntDesign name="star" size={size} color={color} />)
   if (routeName == "Hightlights")
      return (<Entypo name="folder-video" size={size} color={color} />)
   if (routeName == "News")
      return (<FontAwesome5 name="newspaper" size={size} color={color} />)

   {/**<Text>{routeName}</Text> */ }
}


const CustomTabBar = ({
   state,
   descriptors,
   navigation,
   activeTintColor,
   inactiveTintColor,
   activeBackgroundColor,
   tabStyle
}) => {
   const { routes, index: activeRouteIndex } = state;
   const tabWidth = width / routes.length;

   const [translateValue] = useState(new Animated.Value(0));

   useEffect(() => {
      translateValue.setValue(activeRouteIndex * tabWidth);
   }, [tabWidth]);

   const onTabPress = (route, routeIndex) => {
      const isFocused = state.index === routeIndex;
      const event = navigation.emit({
         type: 'tabPress',
         target: route.key,
         canPreventDefault: true,
      });
      if (!isFocused && !event.defaultPrevented) {
         navigation.navigate(route.name);
      }
   };

   const updatePositioning = (route, routeIndex) => {
      onTabPress(route.route, routeIndex);
      Animated.spring(translateValue, {
         toValue: routeIndex * tabWidth,
         velocity: 5,
         useNativeDriver: true,
      }).start();
   };

   return (
      <View style={[S.container, tabStyle]}>
         <View>
            <View style={StyleSheet.absoluteFillObject}>
               <Animated.View
                  style={[
                     S.activeTab,
                     {
                        borderTopWidth: 1,
                        borderTopColor: activeTintColor,
                        width: tabWidth,
                        transform: [{ translateX: translateValue }],
                     },
                  ]}>
                  <View style={[S.activeTabInner, { backgroundColor: activeBackgroundColor }]} />
               </Animated.View>
            </View>
         </View>
         {routes.map((route, routeIndex) => {
            const options = descriptors[route.key];
            const isRouteActive = routeIndex === activeRouteIndex;
            const tintColor = isRouteActive ? activeTintColor : inactiveTintColor;
            isRouteActive && updatePositioning({ route }, routeIndex);

            return (
               <TouchableOpacity
                  key={routeIndex}
                  style={S.tabButton}
                  onPress={() => {
                     updatePositioning({ route }, routeIndex);
                  }}
                  onLongPress={() => {
                     updatePositioning({ route }, routeIndex);
                  }}
                  accessibilityLabel={options.tabBarAccessibilityLabel}>
                  {route.name == 'Likes' ? (
                     <HomeIconWithBadge
                        routeName={route.name}
                        size={20}
                        color={tintColor}
                        badgeCount={descriptors[route.key].options.tabBarBadge}
                     />
                  ) : (
                     <TabIcon
                        routeName={route.name}
                        color={tintColor}
                        size={20}
                     />
                  )}
               </TouchableOpacity>
            );
         })}
      </View>
   );
}
const S = StyleSheet.create({
   container: {
      flexDirection: 'row',
      height: 50,
   },
   tabButton: { flex: 1, justifyContent: 'center', alignItems: 'center' },
   activeTab: {
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
   },
   activeTabInner: {
      width: '90%',
      height: '90%',
      borderRadius: 10,
   },
});
export default CustomTabBar


