import React from 'react';

const Content = () => {
    return (
      <div className='content'>
          <div>
              <img src='https://apod.nasa.gov/apod/image/2008/PerseidBridge_Zhang_4032.jpg'/>
          </div>
          <div>
              <img className='avatar' src='https://i.pinimg.com/236x/43/bb/21/43bb2164835246925c3f1a597c182f61.jpg'/>
              <h3>Janny Mariall</h3>
          </div>
          <div className="posts">My posts
              <div>New post</div>
              <div>
                <div>Post 1</div>
                <div>Post 2</div>
              </div>
          </div>
      </div>
    )
}

export default Content