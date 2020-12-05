import React from 'react';
import Preloader from '../../common/preloader/preloader';
import classes from './ProfileInfo.module.css';
import userPhotoDefault from './../../../assets/images/users.png'

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader/>
  }
  
  return (
    <div>
          <div>
              <img className={classes.avatar} alt='ava' src={props.profile.photos.large != null ? props.profile.photos.large : userPhotoDefault}/>
              <h3>{props.profile.fullName}</h3>
              <div> Статус: {props.profile.aboutMe}</div>
              <div>Поиск работы: {props.profile.lookingForAJobDescription} </div>
          </div>
    </div>
  )
}
export default ProfileInfo