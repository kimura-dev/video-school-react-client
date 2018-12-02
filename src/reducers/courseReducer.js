import { 
  CREATE_COURSE,
  GET_COURSE ,
  GET_ALL_COURSES, 
  GET_AUTHORED_COURSES, 
  GET_PURCHASED_COURSES,
  // UPDATE_AUTHORED_COURSE,
  // UPDATE_PURCHASED_COURSE, 
  ADD_NEW_COURSE_LESSON, 
  ADD_COURSE_LESSON, 
  UPDATE_NEW_COURSE, 
  UPDATE_NEW_LESSON, 
  EDIT_COURSE, 
  DELETE_COURSE, 
  DELETE_NEW_COURSE_LESSON, 
  COURSE_LOADING,
  SET_CURRENT_COURSE,
  // PURCHASE_COURSE,
  GET_PURCHASE_TOKEN,
  GET_LESSON
} from '../actions/types';

const initialState = {
  // courses: null,
  course: null, // for viewing
  // brand new course on course form no ajax calls on newCourse or newLessson
  newCourse: {
    title: '',
    description:'',
    price: 0,
    lessons:[]
  }, // for adding
  newLesson: {
    title:'',
    description:'',
    videoUrl:''
  }, // for adding a lesson onto newCourse
  selectedCourse: null, // viewing of the course on course-view and course-desc
  allCourses: [], // use on course-catalog page
  // authoredCourse and purchasedCourses are for course views on the dashboard
  authoredCourses: [],
  purchasedCourses: [],
  purchaseToken: '',
  loading: false
}

export default function(state = initialState, action) {
  switch (action.type) {
    case COURSE_LOADING:
      return {
        ...state,
        loading: true
      }
    case CREATE_COURSE:
      return {
        ...state,
        // authoredCourses: [ ...state.authoredCourses, action.payload],
        allCourses: [ ...state.allCourses, action.payload],
        loading: false
      }
    case GET_COURSE:
      return {
        ...state,
        selectedCourse: action.payload,
        loading: false
      }
    case GET_PURCHASE_TOKEN:
      return {
        ...state,
        purchaseToken: action.payload,
        loading: false
      }
    // case PURCHASE_COURSE:
    //   return {
    //     ...state,
    //     : action.payload,
    //     loading: false
    //   }
    case UPDATE_NEW_COURSE:
      const newCourse = {
        ...state.newCourse
      }

      Object.keys(action.payload).forEach(key => {
        newCourse[key] = action.payload[key]
      })

      return {
        ...state,
        newCourse,
        loading: false
      }
    case ADD_NEW_COURSE_LESSON:
      return {
        ...state,
        newCourse:  {...state.newCourse, lessons: [ ...state.newCourse.lessons, action.payload]},
        loading: false
      }
    case GET_LESSON:
      return {
        ...state,
        selectedCourse: action.payload.courseId,
        loading: false
      }
    case UPDATE_NEW_LESSON:
      const newLesson = {
        ...state.newLesson
      }

      Object.keys(action.payload).forEach(key => {
        newLesson[key] = action.payload[key]
      })
       
      return {
        ...state,
        newLesson,
        loading: false
      }
    case ADD_COURSE_LESSON:
      return {
        ...state,
        lesson: [ ...state.lessons, action.payload],
        loading: false
      }
    case GET_ALL_COURSES:
      return {
        ...state,
        allCourses: action.payload || [],
        loading: false
      }
    case GET_AUTHORED_COURSES:
        return {
          ...state,
          authoredCourses: action.payload || [],
          loading: false
        }
    case GET_PURCHASED_COURSES:
        return {
          ...state,
          purchasedCourses: action.payload || [],
          loading: false
        }
    case SET_CURRENT_COURSE:
        return {
          ...state,
          selectedCourse: action.payload,
          loading: false
        }
    // case EDIT_COURSE:
    //     return {
    //       ...state,
    //       aLLCourses: action.payload,
    //       loading: true
    //     }
    case DELETE_NEW_COURSE_LESSON:
      return {
        ...state,
        courses: state.courses.splice(action.payload,1),
        loading: false
      }
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