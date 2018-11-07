import axios from 'axios';
import {
   GET_LESSON, 
   GET_ALL_LESSONS,
   EDIT_LESSON,
   DELETE_LESSON,
   LESSON_LOADING, 
   GET_ERRORS
  } from './types';


  // Create A Lesson
  export const createLesson = (lessonData, history)  => dispatch => {
    axios
        .post('/api/lesson', lessonData)
        .then(res => history.push('/course-form'))
        .catch(err => 
          // since this is an ajax call and we are waiting we need to call dispatch - Redux Thunk
          dispatch({
            type: GET_ERRORS,
            payload: err.response.data.message
          })
        
        )
        .catch(err => console.log(`${err.response.data.location} ${err.response.data.message}`));
  };
  
  // Get A Lesson
  export const getLesson = () => dispatch => {
    dispatch(setLessonLoading());
    axios.get('/api/lesson/:id')
      .then(res => 
        dispatch({
          type: GET_LESSON,
          payload: res.data
        })
      )
      .catch(err => console.log(err))
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
export const editLesson = () => dispatch => {
  dispatch(setLessonLoading());
  axios.put('/api/lesson/:id')
    .then(res => 
      dispatch({
        type: EDIT_LESSON,
        payload: res.data
      })
    )
    .catch(err => console.log(err))
}

// Delete A Lesson
export const deleteLesson = () => dispatch => {
  dispatch(setLessonLoading());
  axios.delete('/api/lesson/:id')
    .then(res => 
      dispatch({
        type: DELETE_LESSON,
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