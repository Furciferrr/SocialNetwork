import React, { useState } from 'react';
import Preloader from '../../common/preloader/preloader';
import classes from './ProfileInfo.module.css';
import userPhotoDefault from './../../../assets/images/users.png'
import ProfileStatus from './ProfileStatus copy'
import ProfileDataForm from './ProfileDataForm';



const ProfileInfo = (props) => {

  const [editMode, setEditMode] = useState(false)

  if (!props.profile) {
    return <Preloader />
  }
  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhotoThunk(e.target.files[0])
    }
  }

  const onSubmit = (formData) => {
     props.setFormDataThunk(formData).then(
      () => {
        setEditMode(false)
       }
     )
  }  
  


  return (
    <div>
      <div>
        <img className={classes.avatar} alt='ava' src={props.profile.photos.large != null ? props.profile.photos.large : userPhotoDefault} />
        <h3>{props.profile.fullName}</h3>
        <ProfileStatus status={props.status} updateStatusThunk={props.updateStatusThunk} />
        <div className={classes.clear}></div>
        {props.isOwner && <input type='file' onChange={onMainPhotoSelected} />}
        { editMode 
            ? <ProfileDataForm onSubmit={onSubmit} initialValues={props.profile} profile={props.profile}/> 
            : <ProfileData profile={props.profile} 
                           isOwner={props.isOwner} 
                           goToEditMode={()=> {
                                setEditMode(true)
        }} />}
        
      </div>
    </div>
  )
}

const Contact = ({ contactTitle, contactValue }) => {
  return <div>{contactTitle} : {contactValue}</div>
}

const ProfileData = (props) => {
  return (
    <div>
      {props.isOwner && <div><button onClick={ ()=> {props.goToEditMode()} } >edit</button></div>}
      <div>{props.profile.aboutMe}</div>
      <div>нужна работа: {props.profile.lookingForAJob ? 'Yes' : 'No'} </div>
      {props.profile.lookingForAJob && <div>Навыки: {props.profile.lookingForAJobDescription} </div>}
      <div className={classes.contacts}> Contacts:{Object.keys(props.profile.contacts).map(key => {
        return <Contact contactTitle={key}
          contactValue={props.profile.contacts[key]}
          key={key} />
      })}
      </div>
    </div>
  )
}



export default ProfileInfo