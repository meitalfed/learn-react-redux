import {combineReducers} from 'redux';
import courses from './courseReducer.js';

const rootReducer = combineReducers({
  courses: courses
});

export default rootReducer;
