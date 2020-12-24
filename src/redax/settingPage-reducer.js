const SET_CHOISE_SUMM = 'SET_CHOISE_SUMM'


const initialState = {
  choiseSumm: ''
}


const settingReducer = (state = initialState, action) => {
   switch(action.type) {
    case SET_CHOISE_SUMM:
      return {
        ...state,
        choiseSumm: action.summ
      }
      default:
        return state;
   }
}


export const setSummAC = (summ) => {
  return (
    {
      type: SET_CHOISE_SUMM,
      summ
    }
  )
}


export default settingReducer