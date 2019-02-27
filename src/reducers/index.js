import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import courseReducer from './courseReducer';
import lessonReducer from './lessonReducer';
import uiReducer from './uiReducer';

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  courses: courseReducer,
  lessons: lessonReducer,
  ui: uiReducer
});