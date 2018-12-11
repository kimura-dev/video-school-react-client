import axios from 'axios';
import {
  ADD_NEW_COURSE_LESSON,
  ADD_COURSE_LESSON,
  ADD_SELECTED_COURSE_LESSON,
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

  // addselectedCourseLesson
  // type change and history changes lessonData still payload
  export const addSelectedCourseLesson = (lessonData, history, courseId) => dispatch => {
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
 
  // export const addCourseLesson = (lessonData, history) => dispatch => {
  //   axios.post('/api/lesson')
  //     .then(lesson => 
  //       dispatch({
  //         type: ADD_COURSE_LESSON,
  //         payload: lessonData,
  //         history: history.push('/course-form')
  //       })
  //     )
  // };


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
