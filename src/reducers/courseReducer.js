import { GET_COURSE ,GET_ALL_COURSES, GET_AUTHORED_COURSES, GET_PURCHASED_COURSES, EDIT_COURSE, DELETE_COURSE, COURSE_LOADING } from '../actions/types';

const initialState = {
  // courses: null,
  course: null,
  slectedCourse: null,
  allCourses: [],
  authoredCourses: [{
    title: 'JavaScript 101 Introduction Course',
    description: 'this is a description for an example course',
    price: 10.99,
    lessons:[{
      title: 'Test Lesson',
      description: 'description of test lesson',
      videoUrl: 'http://www.example.com'
    }],
    title: 'Node Development',
    description: 'this is a description for an example course',
    price: 10.99,
    lessons:[{
      title: 'Test Lesson',
      description: 'description of test lesson',
      videoUrl: 'http://www.example.com'
    }]
  }],
  purchasedCourses: [{
    title: 'How to make a Responsive Web App',
    description: 'this is a description for an example course',
    price: 10.99,
    lessons:[{
      title: 'Test Lesson',
      description: 'description of test lesson',
      videoUrl: 'http://www.example.com'
    }],
    title: 'Working with CSS',
    description: 'this is a description for an example course',
    price: 10.99,
    lessons:[{
      title: 'Test Lesson',
      description: 'description of test lesson',
      videoUrl: 'http://www.example.com'
    }]
  }],
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
        loading: true
      }
    case GET_ALL_COURSES:
      return {
        ...state,
        aLLCourses: action.payload,
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
    // case EDIT_COURSE:
    //     return {
    //       ...state,
    //       aLLCourses: action.payload,
    //       loading: true
    //     }
    case DELETE_COURSE:
        return {
          ...state,
          courses: state.posts.filter(post => post._id !== action.payload),
          loading: true
        }
    default:
      return state;
  }
}