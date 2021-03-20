import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

import { signInEmail } from '../../Context/actions/Auth.actions';
import { useNavigation } from '@react-navigation/core';

const LoginScreen = () => {
   const navigation = useNavigation();

   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [errorMsg, setErrorMsg] = useState(null);

   const goToRegister = () => {
      navigation.navigate('EmailRegister');
   }

   const handleLogin = async () => {

      try {
         if (!email) {
            setErrorMsg('Email field is required.');
         }
         if (!password) {
            setErrorMsg('Password field is required.');
         }
         const response = await signInEmail(email, password);
         if (response.user) {
            // console.log("login:", response.user)
            navigation.navigate('Scores');
         }

      } catch (error) {
         setErrorMsg(error.message)
      }
   }

   return (
      <View style={styles.container}>
         <Text style={styles.greeting}>Sign in with Email</Text>

         <View style={styles.errorMessage}>
            {errorMsg && <Text style={styles.error}>{errorMsg}</Text>}
         </View>

         <View style={[styles.form]}>
            <View>
               <Text style={styles.inputTitle}>Email Address</Text>
               <TextInput
                  style={styles.input}
                  autoCapitalize="none"
                  value={email}
                  onChangeText={text => setEmail(text.toLowerCase())}
               />
            </View>

            <View style={{ marginTop: 32 }}>
               <Text style={styles.inputTitle}>Password</Text>
               <TextInput
                  style={[styles.input]}
                  secureTextEntry
                  autoCapitalize="none"
                  value={password}
                  onChangeText={text => setPassword(text)}
               />
            </View>
         </View>

         <TouchableOpacity style={styles.button}
            onPress={handleLogin}
         >
            <Text style={{ color: '#FFF', fontWeight: '500' }}>Sign in</Text>
         </TouchableOpacity>

         <TouchableOpacity
            style={{ alignSelf: "center", marginTop: 32 }}
            onPress={goToRegister}
         >
            <Text style={{ color: '#414959', fontSize: 13 }}>
               New to us? <Text style={{ fontWeight: "500", color: "#E9446A" }}>Sign up</Text>
            </Text>
         </TouchableOpacity>

      </View>
   )
}
const styles = StyleSheet.create({
   container: {
      flex: 1
   },
   greeting: {
      marginTop: 32,
      fontSize: 18,
      fontWeight: "400",
      textAlign: 'center'
   },
   errorMessage: {
      height: 72,
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 30
   },
   error: {
      color: '#E9446A',
      fontSize: 13,
      fontWeight: "600",
      textAlign: "center"
   },
   form: {
      marginBottom: 48,
      marginHorizontal: 30,
   },
   inputTitle: {
      color: '#8A8F9E',
      fontSize: 10,
      textTransform: "uppercase"
   },
   input: {
      padding: 8,
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: '#8A8F9E',
      height: 40,
      fontSize: 15,
      color: '#161F3D',
   },
   button: {
      marginHorizontal: 30,
      backgroundColor: '#E9446A',
      borderRadius: 4,
      height: 52,
      alignItems: 'center',
      justifyContent: 'center'
   }

});

export default LoginScreen
