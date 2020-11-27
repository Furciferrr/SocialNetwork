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
         <ProfileInfo name="Albert Einstein" avasrc="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Frainerzitelmann%2Ffiles%2F2019%2F06%2FE0MG76-e1560965378507-1200x1270.jpg"/>
         <MypostsContainer
                store={props.store}/>
      </div>
    )
}

export default Content