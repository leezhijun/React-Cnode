import {
  FETCH_LOGIN_REQUEST,
  LOGIN_OUT,
  PAGE_REFRESH
} from './actionType'
export const fechLogin = (payload) => {
  return {
    type:FETCH_LOGIN_REQUEST,
    payload
  }
}

export const loginOut = () => {
  return {
    type: LOGIN_OUT
  }
}

export const pageRefresh = () => {
  return {
    type: PAGE_REFRESH
  }
}
