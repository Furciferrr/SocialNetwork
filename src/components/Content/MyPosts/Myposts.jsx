import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {
    return (
          <div className={classes.posts}>My posts
              <div>
                  <div>
                    <textarea></textarea>
                  </div>
                  <button>add post</button>
              </div>
            <Post message='Hi, bro..,'
                  likenumb="32"  
                  avalink='https://i.pinimg.com/170x/a1/9b/83/a19b83023cdb650a17623bf6bf456245.jpg'/>
            <Post message='Hello world'
                  likenumb="20"
                  avalink='https://sun9-17.userapi.com/c303205/g37357819/a_7a7e0de6.jpg?ava=1'/>
          </div>
    )
}

export default MyPosts