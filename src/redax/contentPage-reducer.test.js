import contentPageReducer, { addPostActionCreater, removePostAC } from "./contentPage-reducer";


let state = {
  postsData: [{
      id: 1,
      message: 'Hi, bro..,',
      likeNumb: '32',
      avaLink: 'https://i.pinimg.com/170x/a1/9b/83/a19b83023cdb650a17623bf6bf456245.jpg'
    },
    {
      id: 2,
      message: 'Hello world!',
      likeNumb: '20',
      avaLink: 'https://i.pinimg.com/170x/a1/9b/83/a19b83023cdb650a17623bf6bf456245.jpg'
    },
  ]
}


it('length of posts should be incremented', () => {

  let action = addPostActionCreater('hello')

  let newState = contentPageReducer(state, action)

  expect(newState.postsData.length).toBe(3);

});

it('added post hello', () => {

  let action = addPostActionCreater('hello')

  let newState = contentPageReducer(state, action)

  expect(newState.postsData[2].message).toBe('hello');

});


 it('length of post should be decrimented', () => {

  let postId = 1

  let action = removePostAC(postId)

  let newPostData = contentPageReducer(state, action)

  expect(newPostData.postsData.length).toBe(1);
});
