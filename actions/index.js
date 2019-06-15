import {
  CREATE_USER_COMPLETE,
  CREATE_USER_ERROR,
  CREATE_USER_START,
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
import { _storeData } from '../services/LocalStorage';
// import axios from 'axios';
import NavigationService from '../services/NavigationService';
// import http from '../services/AxiosService';

const baseUrl = 'http://localhost:3000';

export function startLoginToFacebook() {
  return dispatch => {
    dispatch({ type: FB_LOGIN_START });
    Expo.Facebook.logInWithReadPermissionsAsync('562632967585735', {
      // TODO: Add user_friends, user_birthday to permissions after FB app review
      permissions: ['public_profile', 'email']
    })
      .then(res => {
        if (res.type === 'success') {
          // http
          //   .get(
          //     `https://graph.facebook.com/me?access_token=${
          //       res.token
          //     }&fields=id,first_name,last_name,picture,email`
          //   )
          //   .then(res => {
          //     dispatch({ type: RECEIVE_FB_PROFILE, payload: res.data });
          //     dispatch(getUser(res.data.email));
          //   })
          //   .catch(err => {
          //     dispatch({ type: FB_PROFILE_ERROR, payload: err });
          //   });
        } else {
          //TODO: Add action dispatch for if FB login is unsuccessful
          dispatch({ type: FB_LOGIN_CANCELLED });
        }
      })
      .catch(err => {
        dispatch({ type: FB_LOGIN_ERROR, payload: err });
      });
  };
}

export function getUser(email) {
  return dispatch => {
    dispatch({ type: GET_USER_START });
    // http
    //   .get('http://192.168.1.188:8080/api/user/email/' + email)
    //   .then(res => {
    //     // TODO: Switch when error code is changed
    //     if (res.data.status === 'NOT_FOUND') {
    //       dispatch({ type: GET_USER_NOT_FOUND });
    //       NavigationService.navigate('Profile');
    //     } else {
    //       dispatch({ type: GET_USER_RECEIVED, payload: res });
    //       NavigationService.navigate('Main');
    //     }
    //   })
    //   .catch(err => {
    //     // 401 unauthorized
    //     // 404 user not found
    //     dispatch({ type: GET_USER_ERROR, payload: err });
    //   });
  };
}

export function createUser(userObj) {
  return dispatch => {
    dispatch({ type: CREATE_USER_START });
    // Post user to database
    let user = {
      first_name: userObj.firstName,
      last_name: userObj.lastName,
      email: userObj.email,
      prof_url: userObj.avatarUrl
    };
    // http
    //   .post('http://192.168.1.188:8080/api/user', user)
    //   .then(res => {
    //     dispatch({ type: CREATE_USER_COMPLETE, payload: res.data });
    //     NavigationService.navigate('Main');
    //   })
    //   .catch(err => {
    //     dispatch({ type: CREATE_USER_ERROR, payload: err });
    //   });
  };
}

export function fetchDestinations() {
  return dispatch => {
    dispatch({ type: GET_DESTINATION_DATA_START });
    fetch(baseUrl + '/destinations', {})
      .then(res => res.json())
      .then(res => {
        console.log(res);
        dispatch({ type: GET_DESTINATION_DATA_RECEIVED, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: GET_DESTINATION_DATA_ERROR, payload: err });
      });
  };
}

export function addGroup(payload) {
  return { type: ADD_GROUP, payload };
}

export function addFriend(payload) {
  return { type: ADD_FRIEND, payload };
}

export function createGroup(payload) {
  return { type: CREATE_GROUP, payload };
}

export function setDestination(payload) {
  return { type: SET_DESTINATION, payload };
}

export function sendNudge(payload) {
  return { type: SEND_NUDGE, payload };
}

export function hideUser(payload) {
  return { type: HIDE_USER, payload };
}

export function leaveGroup(payload) {
  return { type: LEAVE_GROUP, payload };
}

export function changeFilters(payload) {
  return { type: CHANGE_FILTERS, payload };
}

export function login(payload) {
  return { type: LOGIN, payload };
}
