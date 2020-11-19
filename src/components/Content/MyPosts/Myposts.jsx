import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {
  let postsData = [
    {id: '1', message:'Hi, bro..,', likeNumb: '32', avaLink: 'https://i.pinimg.com/170x/a1/9b/83/a19b83023cdb650a17623bf6bf456245.jpg'},
    {id: '1', message:'Hello world!', likeNumb: '20', avaLink: 'https://i.pinimg.com/170x/a1/9b/83/a19b83023cdb650a17623bf6bf456245.jpg'},
  ]
    return (
          <div className={classes.posts}>My posts
              <div>
                  <div>
                    <textarea></textarea>
                  </div>
                  <button>add post</button>
              </div>
            <Post message={postsData[0].message}
                  likenumb={postsData[0].likeNumb}  
                  avalink={postsData[0].avaLink}/>
                  
            <Post message={postsData[1].message}
                  likenumb={postsData[1].likeNumb}
                  avalink={postsData[1].avaLink}/>
          </div>
    )
}

export default MyPosts