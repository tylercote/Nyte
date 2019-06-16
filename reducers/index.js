import {
  CREATE_USER_COMPLETE,
  CREATE_USER_ERROR,
  FB_LOGIN_CANCELLED,
  FB_LOGIN_ERROR,
  FB_LOGIN_START,
  FB_PROFILE_ERROR,
  GET_DESTINATION_DATA_ERROR,
  GET_DESTINATION_DATA_RECEIVED,
  GET_DESTINATION_DATA_START,
  GET_USER_ERROR,
  GET_USER_NOT_FOUND,
  GET_USER_RECEIVED,
  GET_USER_START,
  RECEIVE_FB_PROFILE
} from '../constants/action-types';
import NavigationService from '../services/NavigationService';
const initialState = {
  fbToken: '',
  userProfile: {},
  user: {},
  destinationData: {}
};

function rootReducer(state = initialState, action) {
  //TODO: Error handling
  switch (action.type) {
    case RECEIVE_FB_PROFILE:
      return Object.assign({}, state, {
        fbToken: action.payload.token,
        userProfile: action.payload
      });
    case FB_PROFILE_ERROR:
      console.log('FB_PROFILE_ERROR', action.payload);
      return state;
    case FB_LOGIN_ERROR:
      console.log('Error logging into facebook', action.payload);
      return state;
    case FB_LOGIN_CANCELLED:
      console.log('FB login cancelled');
      return state;
    case GET_USER_START:
      console.log('GET_USER_START');
      return state;
    case GET_USER_NOT_FOUND:
      console.log('User not found');
      return state;
    case GET_USER_ERROR:
      console.log('Error finding user');
      return state;
    case GET_USER_RECEIVED:
      console.log('User received');
      return Object.assign({}, state, { userProfile: action.payload });
    case CREATE_USER_COMPLETE:
      console.log('User created');
      return Object.assign({}, state, { user: action.payload });
    case CREATE_USER_ERROR:
      console.log('Error creating user', JSON.stringify(action.payload));
      return state;
    case GET_DESTINATION_DATA_START:
      return Object.assign({}, state, { destinationsLoading: true });
    case GET_DESTINATION_DATA_RECEIVED:
      console.log('Received destination data', JSON.stringify(action.payload));
      return Object.assign({}, state, {
        destinationData: action.payload,
        destinationsLoading: false
      });
    case GET_DESTINATION_DATA_ERROR:
      console.log('Error getting destination data', action.payload);
      return Object.assign({}, state, { destinationsLoading: false });
    default:
      return state;
  }
}

export default rootReducer;
