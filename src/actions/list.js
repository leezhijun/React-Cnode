import {
  FETCH_TOPICS_REQUEST
} from './actionType'
export const fechTopics = (payload) => {
  return {
    type:FETCH_TOPICS_REQUEST,
    payload
  }
}

export const tabActive = (num) => {
  return {
    type:"TAB_ACTIVE",
    num
  }
}
