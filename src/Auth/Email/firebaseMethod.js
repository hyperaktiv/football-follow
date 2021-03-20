import firebase from 'firebase/app';
import 'firebase/firestore';
import { Alert } from 'react-native';

export async function registration(email, password, name) {
   try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      const currentUser = firebase.auth().currentUser;
      firebase.auth().currentUser.updateProfile({
         displayName: name
      });
      const db = firebase.firestore();
      db.collection('users')
         .doc(currentUser.uid)
         .set({
            email: currentUser.email,
            displayName: name
         });

   } catch (err) {
      Alert.alert('There is something wrong!', err.message);
   }
}

export async function signIn(email, password) {
   try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
   } catch (error) {
      Alert.alert('There is something wrong!', error.message)
   }
}

export async function loggingOut() {
   try {
      await firebase.auth().signOut();
   } catch (error) {
      Alert.alert('There is something wrong!', error.message)
   }

}