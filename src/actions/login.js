import {
  FETCH_LOGIN_REQUEST
} from './actionType'
export const fechLogin = (payload) => {
  return {
    type:FETCH_LOGIN_REQUEST,
    payload
  }
}
