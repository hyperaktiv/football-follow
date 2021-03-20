import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { registerEmail, createNewUser } from '../../Context/actions/Auth.actions';
import { useNavigation } from '@react-navigation/core';
import CustomText from '../../Shared/CustomText';

const RegisterScreen = () => {

   const navigation = useNavigation();

   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [errorMsg, setErrorMsg] = useState(null);

   const goToLogin = () => {
      navigation.navigate('EmailLogin')
   }

   const handleRegister = async () => {
      try {
         if (!name) {
            setErrorMsg('Name field is required.');
         }
         if (!email) {
            setErrorMsg('Email field is required.');
         }
         if (!password) {
            setErrorMsg('Password field is required.');
         }
         const response = await registerEmail(email, password);
         if (response.user.uid) {
            response.user.updateProfile({
               displayName: name
            })
            const { uid } = response.user;
            let likeArray = [];
            const userData = { email, name, uid, likeArray };
            await createNewUser(userData);
            // console.log("register account:", userData)
            navigation.navigate('Scores');
         }
      } catch (error) {
         console.log(error)
      }
   }

   return (
      <View style={styles.container}>
         <Text style={styles.greeting}>Let's register an account!</Text>

         <View style={styles.errorMessage}>
            {errorMsg && <CustomText style={styles.error}>{errorMsg}</CustomText>}
         </View>

         <View style={[styles.form]}>

            <View>
               <CustomText style={styles.inputTitle}>Full Name</CustomText>
               <TextInput
                  style={styles.input}
                  autoCapitalize="none"
                  value={name}
                  onChangeText={text => setName(text)}
               />
            </View>

            <View style={{ marginTop: 32 }}>
               <CustomText style={styles.inputTitle}>Email Address</CustomText>
               <TextInput
                  style={styles.input}
                  autoCapitalize="none"
                  value={email}
                  onChangeText={text => setEmail(text.toLowerCase())}
               />
            </View>

            <View style={{ marginTop: 32 }}>
               <CustomText style={styles.inputTitle}>Password</CustomText>
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
            onPress={() => handleRegister()}
         >
            <Text style={{ color: '#FFF', fontWeight: '500' }}>Sign up</Text>
         </TouchableOpacity>

         <TouchableOpacity
            style={{ alignSelf: "center", marginTop: 32 }}
            onPress={goToLogin}
         >
            <CustomText style={{ color: '#414959', fontSize: 13 }}>
               Already have an account? <Text style={{ fontWeight: "500", color: "#E9446A" }}>Sign in</Text>
            </CustomText>
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
      fontWeight: "600",
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
      padding: 7,
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

export default RegisterScreen
