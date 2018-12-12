const defaultState = {
  all: {
    data: [],
    page: 1,
    limit: 20,
    error: false
  },
  good: {
    data: [],
    page: 1,
    limit: 20,
    error: false
  },
  share: {
    data: [],
    page: 1,
    limit: 20,
    error: false
  },
  ask: {
    data: [],
    page: 1,
    limit: 20,
    error: false
  },
  job: {
    data: [],
    page: 1,
    limit: 20,
    error: false
  },
  dev: {
    data: [],
    page: 1,
    limit: 20,
    error: false
  },
}

export const topics = (state = defaultState, action) => {
  switch (action.type) {
    case "FETCH_LIST_SUCCEEDED":
      let tabState = Object.assign({}, { ...state
      })
      tabState[action.payload.tab].data = tabState[action.payload.tab].data.concat(action.payload.data)
      tabState[action.payload.tab].page += 1
      return {
        ...state,
        ...tabState
      }
    case 'FETCH_LIST_FAILURE':
      tabState = Object.assign({}, { ...state
      })
      tabState[action.payload.tab].error = action.payload.error
      return {
        ...state,
        ...tabState
      }
    default:
      return state
  }
}
