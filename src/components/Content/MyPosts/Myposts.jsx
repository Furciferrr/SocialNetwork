import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {
    return (
          <div className={classes.posts}>My posts
              <div>
                  <textarea></textarea>
                  <button>add post</button>
              </div>
<Post/>
          </div>
    )
}

export default MyPosts