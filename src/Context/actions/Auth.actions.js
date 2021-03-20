import firebase from 'firebase/app';
import "firebase/auth";
import 'firebase/firestore';
export const SET_CURRENT_USER = "SET_CURRENT_USER";

import { firebase_config } from '../../../API_KEY';

// Initialize Firebase
firebase.initializeApp(firebase_config)

export const registerEmail = (email, password) => {
   return firebase.auth().createUserWithEmailAndPassword(email, password);
}
export const signInEmail = (email, password) => {
   return firebase.auth().signInWithEmailAndPassword(email, password);
}
export const signOutEmail = (dispatch) => {
   dispatch(setCurrentUser({}))
   return firebase.auth().signOut();
}
export const checkUserAuth = (user) => {
   return firebase.auth().onAuthStateChanged(user);
}

// firestore
export const createNewUser = (userData) => {
   return firebase.firestore()
      .collection('users')
      .doc(`${userData.uid}`)
      .set(userData)
}

export const getUserProfile = async () => {
   const data = firebase.firestore()
      .collection('users')
      .doc('EsVgZwLXb5hDsmoU7CUUo0UCSB32');
   const doc = await data.get();
   if (!doc.exists) {
      console.log('No such document!');
   } else {
      console.log('Document data:', doc.data());
   }
}

export const addLikeArray = async (uid, matchItem) => {
   let data = firebase.firestore()
      .collection('users')
      .doc(uid);
   return await data.update({
      likeArray: firebase.firestore.FieldValue.arrayUnion(matchItem)
   })
      .then(res => {
         console.log("update like arrray: ", res)
      }).catch(err => console.log("update like arrray lỗi: ", err));


   // let updateLikes = await data.update({
   //    likeArray: [matchItem]
   // });
   // fb.usersCollection.doc(docId).update({
   //    posts: posts.filter(post => post.id !== deleteId);
   //  })
}

export const removeLikeArray = async (uid, matchItem) => {
   let data = firebase.firestore()
      .collection('users')
      .doc(uid);

   return await data.update({
      likeArray: firebase.firestore.FieldValue.arrayRemove(matchItem)
   })
      .then(res => {
         console.log("remove like item: ", res)
      }).catch(err => console.log("remove like arrray lỗi: ", err));
}


export const setCurrentUser = (user) => {
   return {
      type: SET_CURRENT_USER,
      userProfile: user
   }
}