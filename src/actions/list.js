import {
  FETCH_TOPICS_REQUEST
} from './actionType'
export const fechTopics = (payload) => {
  return {
    type:FETCH_TOPICS_REQUEST,
    payload
  }
}
