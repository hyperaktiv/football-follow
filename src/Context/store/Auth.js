import React, { useReducer, useEffect, useState } from 'react';

import AuthGlobal from './AuthGlobal';
import authReducer from '../reducers/Auth.reducer';
import { setCurrentUser, checkUserAuth } from '../actions/Auth.actions';

var initialStateUser = {
   isAuthenticated: null,
   user: {}
};

const Auth = (props) => {
   const [stateUser, dispatch] = useReducer(authReducer, initialStateUser);
   const [showChild, setShowChild] = useState(false);

   useEffect(() => {

      setShowChild(true);
      // get token in AsynStorage
      checkUserAuth(user => {
         if (user) {
            console.log("state change from auth: ", user)
            // call action to set current user then navigate to main screen
            dispatch(setCurrentUser(user));
         } else {
            console.log("context auth: check auth false")
         }
      })

      return () => {
         setShowChild(false);
      }
   }, []);

   if (!showChild)
      return null;
   else
      return (
         <AuthGlobal.Provider value={{ stateUser, dispatch }}>
            {props.children}
         </AuthGlobal.Provider>
      )
}

export default Auth
