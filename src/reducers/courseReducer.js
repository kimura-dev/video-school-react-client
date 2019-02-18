import { 
  CREATE_COURSE,
  GET_COURSE ,
  GET_ALL_COURSES, 
  GET_AUTHORED_COURSES, 
  GET_PURCHASED_COURSES,
  ADD_NEW_COURSE_LESSON, 
  ADD_SELECTED_COURSE_LESSON,
  UPDATE_NEW_COURSE, 
  UPDATE_NEW_LESSON, 
  EDIT_COURSE, 
  DELETE_COURSE, 
  DELETE_NEW_COURSE_LESSON, 
  DELETE_SELECTED_COURSE_LESSON,
  COURSE_LOADING,
  SET_CURRENT_COURSE,
  SET_CURRENT_USER,
  PURCHASE_COURSE,
  GET_PURCHASE_TOKEN,
  SELECTED_COURSE_FIELD_CHANGE,
  SET_COURSE_LOADED,
  GET_LESSON
} from '../actions/types';
import { copyArrayWithEditedItemById } from '../components/common/arrayTools';

const initialState = {
  course: null, // for viewing
  // brand new course on course form no ajax calls on newCourse or newLessson
  newCourse: {
    title: '',
    description:'',
    price: 0,
    lessons:[]
  }, 
  // for adding a newLesson onto a newCourse so they can be sent together
  newLesson: {
    title:'',
    description:'',
    videoUrl:''
  },
  selectedCourse: null, // viewing of the course on course-view and course-desc
  allCourses: [], // use on course-catalog page

  // authoredCourse and purchasedCourses are for courseView's on the dashboard
  authoredCourses: [],
  purchasedCourses: [],

  purchaseToken: '', // For the purchase of the course
  loading: false,
  loaded: false
}

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
    if(action.payload) {
      // Set the defaults
      return {
        ...state,
        authoredCourses : state.allCourses.filter(function(course){
          return course.username === action.payload.username
        }),
        purchasedCourses : state.allCourses.filter(function(course) {
          return   action.payload.courses && action.payload.courses.includes(course._id)
        })
      }
    } else {
      // Clear any info on the user
      return {
        ...state,
        authoredCourses: [],
        purchasedCourses: []
      }
    }
    case COURSE_LOADING:
      return {
        ...state,
        loading: true
      }
    case SET_COURSE_LOADED:
      return {
        ...state,
        loaded: action.payload
      }
    case CREATE_COURSE:
      return {
        ...state,
        authoredCourses: [ ...state.authoredCourses, action.payload],
        allCourses: [ ...state.allCourses, action.payload],
        newCourse: {},
        loading: false
      }
    case GET_COURSE:
      return {
        ...state,
        selectedCourse: action.payload,
        loading: false
      }
    case GET_LESSON:
      if(!action.payload.course){
        return {
          ...state,
          loading: false
        };
      }
      return {
        ...state,
        selectedCourse: action.payload.course,
        loading: false
      }
    case GET_PURCHASE_TOKEN:
      return {
        ...state,
        purchaseToken: action.payload,
        loading: false
      }
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
        loading: false,
        loaded: false
      }

    case ADD_NEW_COURSE_LESSON:
      // return {
      //   ...state,
      //   newCourse:  {...state.newCourse, lessons: [ ...state.newCourse.lessons, action.payload]},
      //   newLesson: {},
      //   loading: false,
      //   loaded: true
      // }
      
    case ADD_SELECTED_COURSE_LESSON:
      
      let newState = {
        ...state, 
        newLesson: {},
        loading: false
      };

      let courseName = 'newCourse';

      if( state.selectedCourse ){
        courseName = 'selectedCourse';
      }
      let theCourse = {...state[courseName]};

      if( state[courseName] ){
        action.payload.courseId = theCourse._id
        theCourse.lessons = [...theCourse.lessons, action.payload]
      }
      // not having a new course means we are in edit mode or view mode
      // meaning we HAVE loaded a course from the server API
      newState.loaded = !!state.selectedCourse;

      newState[courseName] = theCourse;

      return newState;
      
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
        loading: false,
        loaded: true
      }
    case SELECTED_COURSE_FIELD_CHANGE:
      let course = {...state.selectedCourse}
             
      course[action.name] = action.value
      
      return {
        ...state,
        selectedCourse: course,
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
    case PURCHASE_COURSE:
        return {
          ...state,
          purchasedCourses: [ ...state.purchasedCourses, action.payload ],
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
    case EDIT_COURSE:
        let editedCourse = action.payload // Find the old array state.allCourses

        return {
          ...state,
          allCourses: copyArrayWithEditedItemById(editedCourse, state.allCourses),
          authoredCourses: copyArrayWithEditedItemById(editedCourse, state.authoredCourses),
          selectedCourse: null,
          loading: true
        }
    case DELETE_SELECTED_COURSE_LESSON:
        return {
          ...state,
          selectedCourses: state.selectedCourse.lessons.splice(action.payload,1),
          loading: false
        }
    case DELETE_NEW_COURSE_LESSON:
      return {
        ...state,
        newCourses: state.newCourse.lessons.splice(action.payload,1),
        loading: false
      }
    case DELETE_COURSE:
        return {
          ...state,
          courses: state.courses.filter(course => course._id !== action.payload),
          loading: true
        }
    default:
      return state;
  }
}