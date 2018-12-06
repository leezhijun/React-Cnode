const defaultState = {
  data:null,
  loading:true,
  error:false
}

export const topic = (state = defaultState, action) => {
  switch (action.type) {
    case "FETCH_TOPIC_SUCCEEDED" :
    return {
      data:action.payload.data,
      loading:false,
      error:false
    }
    default:
      return state
  }
}
