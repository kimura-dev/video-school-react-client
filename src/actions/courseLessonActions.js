import axios from 'axios';
import {API_BASE_URL} from '../config';
import {
  ADD_NEW_COURSE_LESSON,
  ADD_SELECTED_COURSE_LESSON,
  DELETE_LESSON,
  DELETE_NEW_COURSE_LESSON,
  DELETE_SELECTED_COURSE_LESSON,
  UPDATE_NEW_LESSON
  } from './types';

   //Save A Lesson
   export const addNewCourseLesson = (lessonData, history) => dispatch => {
    dispatch({
      type: ADD_NEW_COURSE_LESSON,
      payload: lessonData,
      history: history.goBack()
    })
  };

  
  // addselectedCourseLesson
  // type change and history changes lessonData still payload
  export const addSelectedCourseLesson = (lessonData, history) => dispatch => {
    dispatch({
      type: ADD_SELECTED_COURSE_LESSON,
      payload: lessonData,
      history: history.goBack(/*`/edit-course/${courseId}`*/)
    })
  };

  //Update a new Course
export const updateNewLesson = (newData) => dispatch => {
  dispatch({
    type: UPDATE_NEW_LESSON,
    payload: newData
  })
}
 
// Delete A Lesson
export const deleteLesson = (id) => dispatch => {
  // dispatch(setLessonLoading());
  axios.delete(`${API_BASE_URL}/lesson/${id}`)
    .then(res => 
      dispatch({
        type: DELETE_LESSON,
        payload: res.data
      })
    )
    .catch(err => console.log(err))
}

// Delete Course
export const deleteSelectedCourseLesson = (index) => dispatch => {
  dispatch({
    type: DELETE_SELECTED_COURSE_LESSON,
    payload: index
  })
}

// Delete Course
export const deleteNewCourseLesson = (index) => dispatch => {
  dispatch({
    type: DELETE_NEW_COURSE_LESSON,
    payload: index
  })

}


