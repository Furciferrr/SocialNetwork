import contentPageReducer from './contentPage-reducer'
import messagePageReducer from './messagePage-reducer'
import bestFriendsReducer from './bestFriends-reducer'

 

 let store = {

   rerenderEntireTree() {
    console.log('state changed')
   },

  
  dispatch(action) {

    contentPageReducer(this._state.contentPage, action) 
    messagePageReducer(this._state.messagesPage, action)
    bestFriendsReducer(this._state.bestFriends, action)
    this.rerenderEntireTree(this._state);

    /* if (action.type === 'ADD-POST') {
      let newPost = {
        id: 5,
        message: this._state.contentPage.chengePost,
        likeNumb:0,
        avaLink: 'https://i.pinimg.com/170x/a1/9b/83/a19b83023cdb650a17623bf6bf456245.jpg'
      };
      this._state.contentPage.postsData.push(newPost);
      this.rerenderEntireTree(this._state);
      this._state.contentPage.chengePost = '';

    } else if (action.type === 'ON-CHANGE-POST'){
      this._state.contentPage.chengePost = action.mess;
      this.rerenderEntireTree(this._state);
    } else if (action.type === 'ON-CHANGE-MESSAGE'){
      this._state.messagesPage.chengeMessage = action.mess;
      this.rerenderEntireTree(this._state);
      
    } else if (action.type === 'ADD-MESSAGE') {
      let newMessage = {
        id: this._state.messagesPage.messagesData.length + 1,
        message: this._state.messagesPage.chengeMessage,
      };
      this._state.messagesPage.messagesData.push(newMessage);
      this.rerenderEntireTree(this._state);
      this._state.messagesPage.chengeMessage = '';
  
    } */
  },

  subscribe(observer) {
    this.rerenderEntireTree = observer;
  },

  getState() {
    return(
      this._state
    )
  },

  getValueMessage() {
    return(
      this._state.messagesPage.chengeMessage
    )
  },

  getValuePost() {
    return(
      this._state.contentPage.chengePost
    )
  },


   _state: {

    messagesPage: {
          dialogData:[
            {id: 1, name: 'Dimych', dialogAvaLink:'https://i.pinimg.com/236x/54/13/e2/5413e250d1eecb821fc49c3213d7d661--search.jpg'},
            {id: 2, name: 'Masha', dialogAvaLink:'https://bipbap.ru/wp-content/uploads/2018/02/1378847521_1806552374.jpg'},
            {id: 3, name: 'Sveta', dialogAvaLink:'https://sun9-17.userapi.com/impf/4WuzlR38g8VZ7SDAE26PZMvN8ymWBgFKfvnJcg/mh2Zr1zacro.jpg?size=200x0&quality=90&crop=22,0,560,580&sign=ce0a6e9cd38861cbf30a89d01eb50ce1&ava=1'},
            {id: 4, name: 'Saha', dialogAvaLink:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCo1Qx_f-i5jibEv8Aa7D5lOYSClFPsq6b8g&usqp=CAU'},
            {id: 5, name: 'Vadim', dialogAvaLink:'https://sun9-58.userapi.com/impf/c627624/v627624661/2fe3/b_qSlC2kZIo.jpg?size=200x0&quality=90&crop=0,0,501,604&sign=f020e3d674d8d1299729deee44221885&ava=1'}],

          messagesData: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'What the fuck?'}],

          chengeMessage: 'it-kamasutra.com'
    },

    contentPage: {
      postsData: [
          {id: '1', message:'Hi, bro..,', likeNumb: '32', avaLink: 'https://i.pinimg.com/170x/a1/9b/83/a19b83023cdb650a17623bf6bf456245.jpg'},
          {id: '2', message:'Hello world!', likeNumb: '20', avaLink: 'https://i.pinimg.com/170x/a1/9b/83/a19b83023cdb650a17623bf6bf456245.jpg'},],
      chengePost: 'it-kamasutra.com',
    },

    bestFriends: [
      {id: 1, name: 'Dimych', dialogAvaLink:'https://i.pinimg.com/236x/54/13/e2/5413e250d1eecb821fc49c3213d7d661--search.jpg'},
      {id: 2, name: 'Masha', dialogAvaLink:'https://bipbap.ru/wp-content/uploads/2018/02/1378847521_1806552374.jpg'},
      {id: 3, name: 'Sveta', dialogAvaLink:'https://sun9-17.userapi.com/impf/4WuzlR38g8VZ7SDAE26PZMvN8ymWBgFKfvnJcg/mh2Zr1zacro.jpg?size=200x0&quality=90&crop=22,0,560,580&sign=ce0a6e9cd38861cbf30a89d01eb50ce1&ava=1'},],
  },
 }

  export default store