import React from 'react';
import Preloader from '../../common/preloader/preloader';
import classes from './ProfileInfo.module.css';
import userPhotoDefault from './../../../assets/images/users.png'
import ProfileStatus from './ProfileStatus'



const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader/>
  }
  
  return (
    <div>
          <div>
              <img className={classes.avatar} alt='ava' src={props.profile.photos.large != null ? props.profile.photos.large : userPhotoDefault}/>
              <h3>{props.profile.fullName}</h3>
              <ProfileStatus status={props.status} updateStatusThunk={props.updateStatusThunk}/>
              <div>Поиск работы: {props.profile.lookingForAJobDescription} </div>
              <div>нужна работа: {props.profile.lookingForAJob} </div>
          </div>
    </div>
  )
}
export default ProfileInfo