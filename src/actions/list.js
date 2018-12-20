import {
  FETCH_TOPICS_REQUEST,
  GET_SCROLL_TOP
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

export const getScrollTop = (scrollTop, tab) => {
  return {
    type: GET_SCROLL_TOP,
    scrollTop,
    tab
  }
}
