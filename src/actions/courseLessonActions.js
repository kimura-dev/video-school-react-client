import axios from 'axios';
import {
  ADD_NEW_COURSE_LESSON,
  ADD_COURSE_LESSON,
  DELETE_LESSON,
  DELETE_NEW_COURSE_LESSON,
  UPDATE_NEW_COURSE,
  UPDATE_NEW_LESSON,
  GET_ERRORS
  } from './types';

   //Save A Lesson
   export const addNewCourseLesson = (lessonData, history) => dispatch => {
    dispatch({
      type: ADD_NEW_COURSE_LESSON,
      payload: lessonData,
      history: history.push('/course-form')
    })
  };

  //Update a new Course
export const updateNewLesson = (newData) => dispatch => {
  dispatch({
    type: UPDATE_NEW_LESSON,
    payload: newData
  })
}
 

  // A
  export const addCourseLesson = (lessonData, history) => dispatch => {
    axios.post('/api/lesson')
      .then(lesson => 
        dispatch({
          type: ADD_COURSE_LESSON,
          payload: lessonData,
          history: history.push('/course-form')
        })
      )
  };

// Delete A Lesson
export const deleteLesson = (id) => dispatch => {
  // dispatch(setLessonLoading());
  axios.delete(`/api/lesson/${id}`)
    .then(res => 
      dispatch({
        type: DELETE_LESSON,
        payload: res.data
      })
    )
    .catch(err => console.log(err))
}

// Delete Course
export const deleteNewCourseLesson = (index) => dispatch => {
  dispatch({
    type: DELETE_NEW_COURSE_LESSON,
    payload: index
  })

}
