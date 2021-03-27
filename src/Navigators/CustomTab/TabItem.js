import React, { useRef, useEffect } from 'react';
import {
   Animated,
   Easing,
   TouchableWithoutFeedback,
} from 'react-native';


const TabItem = ({ screen, navigation, children }) => {
   console.log(navigation);
   let scaleAnim = useRef(new Animated.Value(0.8)).current;
   let rotate = useRef(new Animated.Value(0)).current;

   useEffect(() => {
      const ani0 = Animated.timing(scaleAnim, {
         toValue: 1,
         duration: 200,
      });

      const ani1 = Animated.timing(rotate, {
         toValue: 0.5,
         duration: 100,
         easing: Easing.bounce,
      });
      const ani2 = Animated.timing(rotate, {
         toValue: 1,
         duration: 100,
         easing: Easing.bounce,
      });
      const ani3 = Animated.timing(rotate, {
         toValue: 0,
         duration: 500,
         easing: Easing.bounce,
      });
      Animated.sequence([ani0, ani1, ani2, ani3]).start();
   }, [scaleAnim, rotate]);

   const transformConfig = rotate.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: ['0deg', '-20deg', '20deg'],
   });

   const pressAction = () => {
      scaleAnim.setValue(0.8);
      const ani0 = Animated.timing(scaleAnim, {
         toValue: 1,
         duration: 200,
      });

      const ani1 = Animated.timing(rotate, {
         toValue: 0.5,
         duration: 100,
         easing: Easing.bounce,
      });
      const ani2 = Animated.timing(rotate, {
         toValue: 1,
         duration: 100,
         easing: Easing.bounce,
      });
      const ani3 = Animated.timing(rotate, {
         toValue: 0,
         duration: 500,
         easing: Easing.bounce,
      });
      Animated.sequence([ani0, ani1, ani2, ani3]).start();
   };

   return (
      <TouchableWithoutFeedback
         onPress={(e) => [pressAction(), e.preventDefault()]}
      >
         <Animated.View
            style={{
               transform: [
                  { scale: scaleAnim },
                  {
                     rotate: transformConfig,
                  },
               ],
            }}>
            {children}
         </Animated.View>
      </TouchableWithoutFeedback>
   );
};
export default TabItem;