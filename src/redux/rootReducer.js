import { combineReducers } from '@reduxjs/toolkit';
import reducer from './reducer';

const rootReducer = combineReducers({
  todos: reducer,
});

export default rootReducer;