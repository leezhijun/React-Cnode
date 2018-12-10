import {
  FETCH_USER_REQUEST
} from './actionType'
export const fechUser = (payload) => {
  return {
    type:FETCH_USER_REQUEST,
    payload
  }
}
