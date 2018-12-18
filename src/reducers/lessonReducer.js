import { 
        SAVE_LESSON, 
        ADD_NEW_COURSE_LESSON, 
        ADD_COURSE_LESSON, 
        GET_LESSON, 
        GET_ALL_LESSONS, 
        LESSON_LOADING, 
        EDIT_LESSON, 
        DELETE_LESSON, 
        SET_CURRENT_LESSON 
      } 
      from '../actions/types';
import { copyArrayWithEditedItemById } from '../components/common/arrayTools';

const initialState = {
  lesson: null,
  selectedLesson: null,
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
    case SAVE_LESSON:
        return {
          ...state,
          lesson: action.payload,
          loading: false
        }
    case GET_LESSON:
        return {
          ...state,
          selectedLesson: action.payload,
          loading: false
        }
    case GET_ALL_LESSONS:
        return {
          ...state,
          allLessons: action.payload,
          loading: false
        }
    case EDIT_LESSON:

        console.log('Edit Lesson reducer firing', action.payload, state.selectedCourse)
        return {
          ...state,
          selectedCourse: {
            ...state.selectedCourse, 
            lessons: copyArrayWithEditedItemById( state.selectedCourse.lessons, action.payload) 
          },
          loading: false
        }
    case SET_CURRENT_LESSON:
        return {
          ...state,
          selectedLesson: action.payload,
          loading: false
        }
    case DELETE_LESSON:
        return {
          ...state,
          lessons: state.lessons.filter(lesson => lesson._id !== action.payload),          
          loading: false
        }
    default:
      return state;
  }
}
