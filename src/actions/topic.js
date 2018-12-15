import {
  FETCH_TOPIC_REQUEST,
  FETCH_COLLECT_REQUEST,
  FETCH_DE_COLLECT_REQUEST,
  FETCH_REPLIES_REQUEST,
  FETCH_REPLIES_UP_REQUEST
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

export const fechReplies = (payload) => {
  return {
    type:FETCH_REPLIES_REQUEST,
    payload
  }
}

export const fechRepliesUp = (payload) => {
  return {
    type:FETCH_REPLIES_UP_REQUEST,
    payload
  }
}

export const clearTopic = () => {
  return {
    type:"CLEAR_TOPIC"
  }
}

