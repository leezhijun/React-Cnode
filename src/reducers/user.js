const defaultState = {
  data:{},
  loading:true,
  error:false
}
export const user = (state=defaultState,action)=>{
  switch(action.type){
    case 'FETCH_USER_SUCCEEDED':
    return {
      data: action.payload.data,
      loading:false,
      error:false
    }
    default : return state;
  }
}
