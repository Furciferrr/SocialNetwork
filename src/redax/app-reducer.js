import { authUserDataThunk } from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';


let initialState = {
  inizialized: false,
}

const appReducer = (state = initialState, action) => {
  switch(action.type) {
    case INITIALIZED_SUCCESS: 
        return {
          ...state,
          inizialized: true
        }        
      default:
        return state;    
  }
}
export const initializedSucces = () => {
  return(
    {type: INITIALIZED_SUCCESS}
  )
} 


export const initializeAppThunk = () => (dispatch) => { 
  let promise = dispatch(authUserDataThunk());
  promise.then( () => {
    dispatch(initializedSucces());
  })
}



export default appReducer