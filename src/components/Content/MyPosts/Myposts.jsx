import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreater, updateChengePost} from './../../../redax/contentPage-reducer'


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
  props.dispatch(updateChengePost(text));
}
    return (
          <div className={classes.posts}>My posts
              <div>
                  <div>
                    <textarea onChange={changeText} value={props.store.getValuePost()} ref={newPostsElement}></textarea>
                  </div>
                  <button onClick={ addPosts }>add post</button>
              </div>
          {postsElem}
          </div>
    )
}

export default MyPosts