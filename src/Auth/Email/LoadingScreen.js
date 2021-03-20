import React, { useEffect } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import firebase from 'firebase/app';
import { useNavigation } from '@react-navigation/core';

const LoadingScreen = () => {
   const navigation = useNavigation();

   useEffect(async () => {
      await firebase.auth().onAuthStateChanged(user => {
         navigation.navigate(user ? '' : '');
      })

      return () => { }
   }, []);

   return (
      <View style={{
         flex: 1,
         justifyContent: 'center',
         alignItems: 'center'
      }}>
         <Text>Loading...</Text>
         <ActivityIndicator size="large" />
      </View>
   )
}

export default LoadingScreen
