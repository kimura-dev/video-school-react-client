import isEmpty from '../validation/is-empty';
import { SET_CURRENT_USER, PURCHASE_COURSE } from '../actions/types';

const initialState = {
  isAuthenticated: false,
  user: {}
}

export default function(state = initialState, action) {
  console.log(JSON.stringify(action))
  switch(action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload), // boolean value
        user: action.payload
      }
     case PURCHASE_COURSE:
      state =  {
        ...state,
        user: { user: { ...state.user.user, courses: [...state.user.user.courses, action.payload ]} }
      }
      console.log('NewState: '+ JSON.stringify(state))
    default: 
      return state;
  }
}