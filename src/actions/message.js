import {
  FETCH_MSG_REQUEST
} from './actionType'
export const fechMsg = (payload) => {
  return {
    type:FETCH_MSG_REQUEST,
    payload
  }
}
