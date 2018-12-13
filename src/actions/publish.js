import {
  FETCH_PUBLISH_REQUEST
} from './actionType'
export const fechPublish = (payload) => {
  return {
    type:FETCH_PUBLISH_REQUEST,
    payload
  }
}
