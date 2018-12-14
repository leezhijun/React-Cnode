const defaultState = {
  loading:false,
  error:false,
  data:{}
}

export const login = (state = defaultState, action) => {
  switch (action.type) {
    case "FETCH_LOGIN_SUCCEEDED" :
    return {
      data:action.payload.data,
      loading:false,
      error:false
    }
    case "FETCH_LOGIN_LOADING" :
    return {
      data:{},
      loading:true,
      error:false
    }
    case "FETCH_LOGIN_FAILURE" :
    return {
      data:{},
      loading:false,
      error: action.error
    }
    case "LOGIN_OUT" :
    sessionStorage.removeItem('loginname');
    sessionStorage.removeItem('accesstoken');
    return {
      data:{},
      loading:false,
      error: false
    }
    case "PAGE_REFRESH" :
    const loginname = sessionStorage.getItem('loginname') ? sessionStorage.getItem('loginname') : null
    const accesstoken = sessionStorage.getItem('accesstoken') ? sessionStorage.getItem('accesstoken') : null
    return {
      data:{loginname,accesstoken},
      loading:false,
      error: false
    }
    default:
      return state
  }
}
