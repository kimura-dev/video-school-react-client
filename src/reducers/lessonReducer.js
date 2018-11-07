import { GET_LESSON, GET_ALL_LESSONS, LESSON_LOADING, EDIT_LESSON, DELETE_LESSON } from '../actions/types';

const initialState = {
  lesson: null,
  slectedLesson: null,
  allLessons: [],
  watchedLessons: [],
  loading: false
}

export default function(state = initialState, action) {
  switch (action.type) {
    case LESSON_LOADING:
      return {
        ...state,
        loading: true
      }
      case GET_LESSON:
        return {
          ...state,
          lesson: action.payload,
          loading: false
        }
      case GET_ALL_LESSONS:
        return {
          ...state,
          allLessons: action.payload,
          loading: false
        }
      case EDIT_LESSON:
        return {
          ...state,
          Lesson: action.payload,
          loading: false
        }
      case DELETE_LESSON:
        return {
          ...state,
          Lesson: action.payload,
          loading: false
        }
    default:
      return state;
  }
}