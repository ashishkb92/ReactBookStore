import {combineReducers} from 'redux';
import courses from './courseReducers';
import authors from './authorReducers';
import numAjaxCallInProgress from './ajaxStatusReducers';

const rootReducer = combineReducers({
  courses,
  authors,
  numAjaxCallInProgress
});

export default rootReducer;
