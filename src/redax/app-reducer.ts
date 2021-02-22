import { authUserDataThunk } from "./auth-reducer";
import { BaseThunkType } from "./redux-store";

const INITIALIZED_SUCCESS = 'SN/APP/INITIALIZED_SUCCESS';





let initialState = {
  inizialized: false,
}

export type initialStateType = typeof initialState


const appReducer = (state = initialState, action: ActionTypes): initialStateType => {
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
type ActionTypes = initializedSuccesActionType
type ThunkType = BaseThunkType<ActionTypes>

type initializedSuccesActionType = {
  type: typeof INITIALIZED_SUCCESS
}

export const initializedSucces = (): initializedSuccesActionType => {
  return(
    {type: INITIALIZED_SUCCESS}
  )
} 


export const initializeAppThunk = (): ThunkType => async (dispatch) => { 
  await dispatch(authUserDataThunk()).then( () => {
    dispatch(initializedSucces());
  })
}



export default appReducer