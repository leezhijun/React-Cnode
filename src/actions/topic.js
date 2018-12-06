import {
  FETCH_TOPIC_REQUEST
} from './actionType'
export const fechTopic = (payload) => {
  return {
    type:FETCH_TOPIC_REQUEST,
    payload
  }
}
