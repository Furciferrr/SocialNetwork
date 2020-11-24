import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreater, updateChengeMessage} from './../../../redax/state'


const MyPosts = (props) => {

let postsElem = props.state.contentPage.postsData.map((post) => {
  return (
    <Post message={post.message} likenumb={post.likeNumb} avalink={post.avaLink}/>
  );
});

let newPostsElement = React.createRef();

let addPosts = () => {
  props.dispatch(addPostActionCreater());
  
}

let changeText = () => {
  let text = newPostsElement.current.value 
  props.dispatch(updateChengeMessage(text));
}
    return (
          <div className={classes.posts}>My posts
              <div>
                  <div>
                    <textarea onChange={changeText} value={props.store.getValueMessage()} ref={newPostsElement}></textarea>
                  </div>
                  <button onClick={ addPosts }>add post</button>
              </div>
          {postsElem}
          </div>
    )
}

export default MyPosts