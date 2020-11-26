const ON_CHANGE_MESSAGE = 'ON-CHANGE-MESSAGE';
const ADD_MESSAGE = 'ADD-MESSAGE';

const messagePageReducer = (state, action) => {
    if (action.type === ON_CHANGE_MESSAGE){
        state.chengeMessage = action.mess;
        
        
      } else if (action.type === ADD_MESSAGE) {
        let newMessage = {
          id: state.messagesData.length + 1,
          message: state.chengeMessage,
        };
        state.messagesData.push(newMessage);
        state.chengeMessage = '';
    
      }
    return state;
}

export const addMessageActionCreater = () => {
    return(
      {type: ADD_MESSAGE}
    )
   }
  
  export const updateChengeMessage = (text) =>{
    return(
      {type:ON_CHANGE_MESSAGE, mess: text}
    )
  }

export default messagePageReducer