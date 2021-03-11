import { ADD_TO_LIKE, REMOVE_FROM_LIKE, CLEAR_LIKE } from '../constants';

const initialState = [];

const likeItems = (state = initialState, action) => {
   if (action.type === ADD_TO_LIKE) {
      return [...state, action.payload];
   }
   if (action.type === REMOVE_FROM_LIKE) {
      return state.filter(item => item !== action.payload);
   }
   if (action.type === CLEAR_LIKE) {
      return state = [];
   }

   return state;
}
export default likeItems;