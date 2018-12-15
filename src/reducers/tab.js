export const tab = (state=0,action) =>{
  switch(action.type){
    case 'TAB_ACTIVE' :
    return action.num
    default: return state
  }
}
