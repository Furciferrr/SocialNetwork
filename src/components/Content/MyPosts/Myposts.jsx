import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

let postsElem = props.contentPage.postsData.map((post) => {
  return (
    <Post message={post.message} likenumb={post.likeNumb} avalink={post.avaLink}/>
  );
});

let newPostsElement = React.createRef();

let addPosts = () => {
  props.addPostAction();
  
}

let changeText = () => {
  let text = newPostsElement.current.value 
  props.updateNewPost(text);
}

    return (
          <div className={classes.posts}>My posts
              <div>
                  <div>
                    <textarea onChange={changeText} value={props.contentPage.chengePost} ref={newPostsElement}></textarea>
                  </div>
                  <button onClick={ addPosts }>add post</button>
              </div>
          {postsElem}
          </div>
    )
}

export default MyPosts