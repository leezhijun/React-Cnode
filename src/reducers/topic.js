const defaultState = {
  data: null,
  loading: true,
  error: false,
  is_collect: false
}

export const topic = (state = defaultState, action) => {
  switch (action.type) {
    case "FETCH_TOPIC_SUCCEEDED":
      const is_collect = action.payload.data.is_collect ? action.payload.data.is_collect : false
      return {
        data: action.payload.data,
        loading: false,
        error: false,
        is_collect
      }
    case "FETCH_TOPIC_FAILURE":
      return {
        data: null,
        loading: false,
        error: action.error
      }
    case 'COLLECT_SUCCEEDED':
      return {
        ...state,
        is_collect: true
      }
    case 'DE_COLLECT_SUCCEEDED':
      return {
        ...state,
        is_collect: false
      }
    default:
      return state
  }
}
