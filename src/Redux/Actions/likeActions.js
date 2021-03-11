import { ADD_TO_LIKE, REMOVE_FROM_LIKE, CLEAR_LIKE } from '../constants';

export const addToLike = (payload) => {
   return {
      type: ADD_TO_LIKE,
      payload
   }
}

export const removeFromLike = (payload) => {
   return {
      type: REMOVE_FROM_LIKE,
      payload
   }
}

export const clearLike = () => {
   return {
      type: CLEAR_LIKE
   }
}
