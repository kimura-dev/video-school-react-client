import { GET_AUTHORED_COURSES, GET_PURCHASED_COURSES, COURSE_LOADING } from '../actions/types';

const initialState = {
  // courses: null,
  slectedCourse: null,
  allCourses: [],
  authoredCourses: null,
  purchasedCourses: [],
  loading: false
}

export default function(state = initialState, action) {
  switch (action.type) {
    case COURSE_LOADING:
      return {
        ...state,
        loading: true
      }
      case GET_AUTHORED_COURSES:
        return {
          ...state,
          authoredCourses: action.payload,
          loading: false
        }
      case GET_PURCHASED_COURSES:
        return {
          ...state,
          purchasedCourses: action.payload,
          loading: false
        }
    default:
      return state;
  }
}