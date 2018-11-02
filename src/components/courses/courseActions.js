import axios from 'axios';
import { GET_COURSE, COURSE_LOADING } from '../../actions/types';


// Get current course
export const getCurrentCourse = () => dispatch => {
  dispatch(setCourseLoading());
  axios.get('/api/course')
    .then(res => 
      dispatch({
        type: GET_COURSE,
        payload: res.data
      })
    )
    .catch(err => console.log(err))
}

// Course Loading
export const setCourseLoading = () => {
  return {
    type: COURSE_LOADING
  }
}