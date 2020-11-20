import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

let postsElem = props.postsData.map((post) => {

  return (
    <Post message={post.message} likenumb={post.likeNumb} avalink={post.avaLink}/>
  );
});

    return (
          <div className={classes.posts}>My posts
              <div>
                  <div>
                    <textarea></textarea>
                  </div>
                  <button>add post</button>
              </div>
          {postsElem}
          </div>
    )
}

export default MyPosts