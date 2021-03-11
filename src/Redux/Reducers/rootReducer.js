import { combineReducers } from 'redux';
import likeItems from './likeItems';

const reducers = combineReducers({
   likeItems: likeItems
});
export default reducers;