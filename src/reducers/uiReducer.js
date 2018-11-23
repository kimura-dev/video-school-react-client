import { EXPAND_LESSON_LIST, COLLAPSE_LESSON_LIST, TOGGLE_LESSON_LIST } from '../actions/types';

const initialState = {
  lessonListExpanded: false
}

export default function(state = initialState, action) {
  switch(action.type) {
    case EXPAND_LESSON_LIST:
      return {
        ...state,
        lessonListExpanded: true
      }
    case COLLAPSE_LESSON_LIST:
      return {
        ...state,
        lessonListExpanded: false, 
      }
      case TOGGLE_LESSON_LIST:
      return {
        ...state,
        lessonListExpanded: !state.lessonListExpanded, 
      }
    default: 
      return state;
  }
}