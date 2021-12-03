import { combineReducers } from '@reduxjs/toolkit';
import { reducer as submissionReducer } from '../slices/submission';

const rootReducer = combineReducers({
  submission: submissionReducer,
});

export default rootReducer;
