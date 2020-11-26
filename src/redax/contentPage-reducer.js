const ADD_POST = 'ADD-POST';
const ON_CHANGE_POST = 'ON-CHANGE-POST';


const contentPageReducer = (state, action) => {

  if (action.type === ADD_POST) {
    let newPost = {
      id: 5,
      message: state.chengePost,
      likeNumb:0,
      avaLink: 'https://i.pinimg.com/170x/a1/9b/83/a19b83023cdb650a17623bf6bf456245.jpg'
    };
    state.postsData.push(newPost);
    state.chengePost = '';

  } else if (action.type === ON_CHANGE_POST){
    state.chengePost = action.mess;

  }
    return state;
}

export const addPostActionCreater = () => {
  return(
    {type: ADD_POST}
  )
} 
export const updateChengePost = (text) =>{
  return(
    {type:ON_CHANGE_POST, mess: text}
  )
}

export default contentPageReducer