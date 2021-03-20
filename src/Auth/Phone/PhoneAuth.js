import * as React from 'react';
import {
   Text,
   View,
   StyleSheet,
   TextInput,
   Button,
   Alert,
   ActivityIndicator,
   Platform,
} from 'react-native';

import { firebase_config } from '../API_KEY';
import firebase from 'firebase/app';
import "firebase/auth";
import * as FirebaseRecaptcha from 'expo-firebase-recaptcha';
import { useNavigation } from '@react-navigation/core';



// PROVIDE VALID FIREBASE CONFIG HERE
// https://firebase.google.com/docs/web/setup
const FIREBASE_CONFIG = firebase_config;

try {
   if (FIREBASE_CONFIG.apiKey) {
      firebase.initializeApp(FIREBASE_CONFIG);
   }
} catch (err) {
   // ignore app already initialized error on snack
   console.log("Phone Auth errors: ", err)
}

export default function PhoneAuthScreen() {
   const navigation = useNavigation();

   const recaptchaVerifier = React.useRef(null);
   const verificationCodeTextInput = React.useRef(null);
   const [phoneNumber, setPhoneNumber] = React.useState('');
   const [verificationId, setVerificationId] = React.useState('');
   const [verifyError, setVerifyError] = React.useState(null);
   const [verifyInProgress, setVerifyInProgress] = React.useState(false);
   const [verificationCode, setVerificationCode] = React.useState('');
   const [confirmError, setConfirmError] = React.useState(null);
   const [confirmInProgress, setConfirmInProgress] = React.useState(false);

   const [name, setName] = React.useState('');

   const isConfigValid = !!FIREBASE_CONFIG.apiKey;

   return (
      <View style={styles.container}>
         <View style={styles.content}>
            <FirebaseRecaptcha.FirebaseRecaptchaVerifierModal
               ref={recaptchaVerifier}
               firebaseConfig={FIREBASE_CONFIG}
               title="Prove you are human!"
               cancelLabel="Close"
            />
            <Text style={styles.title}>Firebase Phone Auth</Text>
            <Text style={styles.subtitle}>using expo-firebase-recaptcha</Text>

            <Text style={styles.text}>Enter your full name:</Text>
            <TextInput
               style={styles.textInput}
               autoFocus={isConfigValid}
               placeholder="Your name"
               onChangeText={(name) => setName(name)}
            />

            <Text style={styles.text}>Enter phone number</Text>
            <TextInput
               style={styles.textInput}
               autoFocus={isConfigValid}
               autoCompleteType="tel"
               keyboardType="phone-pad"
               textContentType="telephoneNumber"
               placeholder="+1 999 999 9999"
               editable={!verificationId}
               onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)}  //phoneNumber: string
            />
            <Button
               title={`${verificationId ? 'Resend' : 'Send'} Verification Code`}
               disabled={!phoneNumber}
               onPress={async () => {
                  const phoneProvider = new firebase.auth.PhoneAuthProvider();
                  try {
                     setVerifyError(undefined);
                     setVerifyInProgress(true);
                     setVerificationId('');
                     const verificationId = await phoneProvider.verifyPhoneNumber(
                        phoneNumber,
                        // @ts-ignore
                        recaptchaVerifier.current
                     );
                     setVerifyInProgress(false);
                     setVerificationId(verificationId);
                     verificationCodeTextInput.current?.focus();
                  } catch (err) {
                     setVerifyError(err);
                     setVerifyInProgress(false);
                  }
               }}
            />
            {verifyError && (
               <Text style={styles.error}>{`Error: ${verifyError.message}`}</Text>
            )}
            {verifyInProgress && <ActivityIndicator style={styles.loader} />}
            {verificationId ? (
               <Text style={styles.success}>
                  A verification code has been sent to your phone
               </Text>
            ) : undefined}
            <Text style={styles.text}>Enter verification code</Text>
            <TextInput
               ref={verificationCodeTextInput}
               style={styles.textInput}
               editable={!!verificationId}
               placeholder="123456"
               onChangeText={(verificationCode) =>  //verificationCode: string
                  setVerificationCode(verificationCode)
               }
            />
            <Button
               title="Confirm Verification Code"
               disabled={!verificationCode}
               onPress={async () => {
                  try {
                     setConfirmError(undefined);
                     setConfirmInProgress(true);
                     const credential = firebase.auth.PhoneAuthProvider.credential(
                        verificationId,
                        verificationCode
                     );
                     const authResult = await firebase
                        .auth()
                        .signInWithCredential(credential);

                     // update username
                     await firebase.auth().currentUser.updateProfile({
                        displayName: name
                     });
                     let userData = await firebase.auth().currentUser;
                     console.log("userData", JSON.stringify(userData));


                     setConfirmInProgress(false);
                     setVerificationId('');
                     setVerificationCode('');
                     verificationCodeTextInput.current?.clear();
                     Alert.alert('Phone authentication successful!');

                     // authen successfull
                     navigation.navigate('HomeScreen');
                  } catch (err) {
                     setConfirmError(err);
                     setConfirmInProgress(false);
                  }
               }}
            />
            {confirmError && (
               <Text style={styles.error}>{`Error: ${confirmError.message}`}</Text>
            )}
            {confirmInProgress && <ActivityIndicator style={styles.loader} />}
         </View>
         {!isConfigValid && (
            <View style={styles.overlay} pointerEvents="none">
               <Text style={styles.overlayText}>
                  To get started, set a valid FIREBASE_CONFIG in App.tsx.
          </Text>
            </View>
         )}
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      padding: 20,
   },
   content: {
      marginTop: 50,
   },
   title: {
      marginBottom: 2,
      fontSize: 29,
      fontWeight: 'bold',
   },
   subtitle: {
      marginBottom: 10,
      opacity: 0.35,
      fontWeight: 'bold',
   },
   text: {
      marginTop: 30,
      marginBottom: 4,
   },
   textInput: {
      marginBottom: 8,
      fontSize: 17,
      fontWeight: 'bold',
   },
   error: {
      marginTop: 10,
      fontWeight: 'bold',
      color: 'red',
   },
   success: {
      marginTop: 10,
      fontWeight: 'bold',
      color: 'blue',
   },
   loader: {
      marginTop: 10,
   },
   overlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: '#FFFFFFC0',
      justifyContent: 'center',
      alignItems: 'center',
   },
   overlayText: {
      fontWeight: 'bold',
   },
});
