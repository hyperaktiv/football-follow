import { combineReducers } from 'redux';
import likeItems from './likeItems';
import theme from './theme';

const reducers = combineReducers({
   likeItems: likeItems,
   theme: theme,
});
export default reducers;