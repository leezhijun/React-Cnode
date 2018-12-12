import {
  FETCH_LOGIN_REQUEST,
  LOGIN_OUT
} from './actionType'
export const fechLogin = (payload) => {
  return {
    type:FETCH_LOGIN_REQUEST,
    payload
  }
}

export const loginOut = () => {
  return {
    type: LOGIN_OUT
  }
}
