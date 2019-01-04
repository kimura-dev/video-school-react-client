import axios from 'axios';
import {
   GET_LESSON, 
   GET_ALL_LESSONS,
   EDIT_LESSON,
   LESSON_LOADING, 
   GET_ERRORS,
   SET_CURRENT_LESSON,
   SET_CURRENT_COURSE,
   DELETE_LESSON,
  } from './types';
import {setCourseLoading } from './courseActions';

  
// Get A Lesson
export const getLesson = (id) => dispatch => {
  dispatch(setCourseLoading());
  axios.get(`/api/lesson/${id}`)
    .then(res => {  
      dispatch({
        type: SET_CURRENT_LESSON,
        payload: res.data
      });

      let course = res.data.course;
      
      if(course){
        dispatch({
          type: SET_CURRENT_COURSE,
          payload: course
        })
      }
    })
    .catch(err => console.log(err))
}

  
export const setCurrentLesson = (id) => dispatch => {
  dispatch({
    type: SET_CURRENT_LESSON,
    payload: id
  })
}
  

// Get All Lessons 
export const getAllLessons = () => dispatch => {
  dispatch(setLessonLoading());
  axios.get('/api/lesson')
    .then(res => 
      dispatch({
        type: GET_ALL_LESSONS,
        payload: res.data
      })
    )
    // .catch(err => dispatch({
    //   type: GET_ERRORS,
    //   payload: {}
    // }))
    .catch(err => console.log(err))
}

// Edit A Lesson
export const editLesson = (lesson, history) => dispatch => {
  dispatch(setLessonLoading());
  axios.put(`/api/lesson/${lesson._id}`, lesson)
    .then(res => 
      dispatch({
        type: EDIT_LESSON,
        history: history.goBack(),
        payload: res.data
      })
    )
    .catch(err => console.log(err))
}


// Lesson Loading
export const setLessonLoading = () => {
  return {
    type: LESSON_LOADING
  }
}

// Delete Course
export const deleteLesson = (id) => dispatch => {
  dispatch(setCourseLoading());
  axios.delete(`/api/course/${id}`)
    .then(res => 
      dispatch({
        type: DELETE_LESSON,
        payload: res.data
      })
    )
    .catch(err => console.log(err))
}