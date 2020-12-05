import React from 'react';
import classes from './Content.module.css';
import MypostsContainer from './MyPosts/MypostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';




const Content = (props) => {
    return (
      <div className={classes.content}>
          <div>
              <img alt='decorate' src='https://apod.nasa.gov/apod/image/2008/PerseidBridge_Zhang_4032.jpg'/>
          </div>
         <ProfileInfo profile={props.profile}/>
         <MypostsContainer
                store={props.store}/>
      </div>
    )
}

export default Content