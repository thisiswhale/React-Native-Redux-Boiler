import {combineReducers} from 'redux';
//import all reducer.js files
//ex:
import courses from './courseReducer';
import authors from './authorReducer';

const rootReducer = combineReducers({
  courses,
  authors,
});

export default rootReducer;
