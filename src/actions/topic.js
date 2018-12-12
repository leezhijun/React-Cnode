import {
  FETCH_TOPIC_REQUEST,
  FETCH_COLLECT_REQUEST,
  FETCH_DE_COLLECT_REQUEST,
} from './actionType'

export const fechTopic = (payload) => {
  return {
    type:FETCH_TOPIC_REQUEST,
    payload
  }
}

export const fechCollect = (payload) => {
  return {
    type:FETCH_COLLECT_REQUEST,
    payload
  }
}

export const fechDe_collect = (payload) => {
  return {
    type:FETCH_DE_COLLECT_REQUEST,
    payload
  }
}
