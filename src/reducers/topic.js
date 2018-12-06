const defaultState = {}

export const topic = (state = defaultState, action) => {
  switch (action.type) {
    case "FETCH_TOPIC_SUCCEEDED" :
    return action.payload.data
    default:
      return state
  }
}
