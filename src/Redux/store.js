import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

// reducer
import rootReducer from './Reducers/rootReducer';

export default createStore(rootReducer, applyMiddleware(thunkMiddleware));