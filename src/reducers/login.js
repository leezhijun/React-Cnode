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
    default:
      return state
  }
}
