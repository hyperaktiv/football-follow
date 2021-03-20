import { SET_CURRENT_USER } from '../actions/Auth.actions';
import isEmpty from '../isEmpty';

export default function (state, action) {
   switch (action.type) {
      case SET_CURRENT_USER:
         return {
            ...state,
            isAuthenticated: !isEmpty(action.userProfile),
            user: action.userProfile
         };

      default:
         return state;
   }
}