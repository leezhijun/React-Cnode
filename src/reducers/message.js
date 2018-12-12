const defaultState = {
  data:{},
  loading:true,
  error:false
}
export const message = (state=defaultState,action)=>{
  switch(action.type){
    case 'FETCH_MSG_SUCCEEDED':
    return {
      data: action.payload.data,
      loading:false,
      error:false
    }
    case 'FETCH_MSG_FAILURE':
      return {
        data:{},
        loading:false,
        error: action.error
      }
    default : return state;
  }
}

