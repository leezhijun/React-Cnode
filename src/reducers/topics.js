const defaultState = {
  all: {
    data: [],
    page: 1,
    limit:20
  },
  good: {
    data: [],
    page: 1,
    limit:20
  },
  share: {
    data: [],
    page: 1,
    limit:20
  },
  ask: {
    data: [],
    page: 1,
    limit:20
  },
  job: {
    data: [],
    page: 1,
    limit:20
  },
  dev: {
    data: [],
    page: 1,
    limit:20
  },
}

export const topics = (state = defaultState, action) => {
  switch (action.type) {
    case "FETCH_LIST_SUCCEEDED" :
    const tabState = Object.assign({},{...state})
    tabState[action.payload.tab].data = action.payload.data
    return {
      ...state,
      ...tabState
    }
    default:
      return state
  }
}
