import React from 'react';
import Preloader from '../../common/preloader/preloader';
import classes from './ProfileInfo.module.css';
import userPhotoDefault from './../../../assets/images/users.png'
import * as axios from 'axios'



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

              <button onClick={ () => {
                        axios.put(`https://social-network.samuraijs.com/api/1.0/profile`, 
                            {lookingForAJob: true}, {
                            withCredentials: true, 
                            headers: {'API-KEY' : 'c3824144-a684-4fa7-836c-9c70cb84d6fb'}}).then(response => { 
                        });
                        }}>Chenge Status</button>

              



              <div>Поиск работы: {props.profile.lookingForAJobDescription} </div>
              <div>нужна работа: {props.profile.lookingForAJob} </div>
          </div>
    </div>
  )
}
export default ProfileInfo