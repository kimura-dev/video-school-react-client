import { GET_COURSE, COURSE_LOADING } from '../../actions/types';

const initialState = {
  course: null,
  courses: null,
  loading: false
}

export default function(state = initialState, action) {
  switch (action.type) {
    case COURSE_LOADING:
      return {
        ...state,
        loading: true
      }
      case GET_COURSE:
        return {
          ...state,
          course: action.payload,
          loading: false
        }
    default:
      return state;
  }
}