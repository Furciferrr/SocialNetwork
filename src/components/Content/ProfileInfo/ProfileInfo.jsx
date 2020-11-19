import React from 'react';
import classes from './ProfileInfo.module.css';


const ProfileInfo = (props) => {
  return (
    <div>
          <div>
              <img className={classes.avatar} alt='ava' src={props.avasrc}/>
              <h3>{props.name}</h3>
          </div>
    </div>
  )
}
export default ProfileInfo