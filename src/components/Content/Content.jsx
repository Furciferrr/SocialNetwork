import React from 'react';
import classes from './Content.module.css';
import MyPosts from './MyPosts/Myposts';


const Content = () => {
    return (
      <div className={classes.content}>
          <div>
              <img alt='decorate' src='https://apod.nasa.gov/apod/image/2008/PerseidBridge_Zhang_4032.jpg'/>
          </div>
          <div>
              <img className={classes.avatar} alt='ava' src='https://vignette.wikia.nocookie.net/all-interesting/images/6/6a/23f69a4_b.jpg/revision/latest/window-crop/width/200/x-offset/143/y-offset/0/window-width/353/window-height/352?cb=20150112184837&path-prefix=ru'/>
              <h3>Albert Einstein</h3>
           </div>
         <MyPosts/>
      </div>
    )
}

export default Content