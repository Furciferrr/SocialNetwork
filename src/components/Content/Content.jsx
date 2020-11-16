import React from 'react';
import classes from './Content.module.css';
import Posts from './MyPosts/Myposts';


const Content = () => {
    return (
      <div className={classes.content}>
          <div>
              <img alt='decorate' src='https://apod.nasa.gov/apod/image/2008/PerseidBridge_Zhang_4032.jpg'/>
          </div>
          <div>
              <img className={classes.avatar} alt='ava' src='https://i.pinimg.com/236x/43/bb/21/43bb2164835246925c3f1a597c182f61.jpg'/>
              <h3>Janny Mariall</h3>
          </div>
         <Posts/>
      </div>
    )
}

export default Content