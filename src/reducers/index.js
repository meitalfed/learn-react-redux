import {combineReducers} from 'redux';
import courses from './courseReducer.js';
import authors from './authorReducer.js';

const rootReducer = combineReducers({
  courses: courses,
  authors: authors
});

export default rootReducer;
