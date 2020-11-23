import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

let postsElem = props.state.contentPage.postsData.map((post) => {
  return (
    <Post message={post.message} likenumb={post.likeNumb} avalink={post.avaLink}/>
  );
});

let newPostsElement = React.createRef();

let addPosts = () => {
  let text = newPostsElement.current.value
  props.store.addPost(text);
  newPostsElement.current.value = '';
}


    return (
          <div className={classes.posts}>My posts
              <div>
                  <div>
                    <textarea ref={newPostsElement}></textarea>
                  </div>
                  <button onClick={ addPosts }>add post</button>
              </div>
          {postsElem}
          </div>
    )
}

export default MyPosts