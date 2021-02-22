import React, { ChangeEvent, useState } from 'react';
import Preloader from '../../common/preloader/preloader';
import classes from './ProfileInfo.module.css';
import userPhotoDefault from './../../../assets/images/users.png'
import ProfileStatus from './ProfileStatus'
import ProfileDataForm from './ProfileDataForm';
import { contactsType, userProfileType } from '../../../Types/types';


type PropsType = {
  profile: userProfileType | null
  savePhotoThunk: (photo: File) => void
  setFormDataThunk: (formData: userProfileType) => Promise<any>
  updateStatusThunk: (status: string) => void
  status: string
  isOwner: boolean

}
const ProfileInfo: React.FC <PropsType> = (props) => {

  const [editMode, setEditMode] = useState(false)

  if (!props.profile) {
    return <Preloader />
  }
  const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>): void => {
   
    if (e.target.files?.length) {
      props.savePhotoThunk(e.target.files[0])
    }
  }

  const onSubmit = (formData: any) => {
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
            ? <ProfileDataForm onSubmit={onSubmit} profile={props.profile}/> 
            : <ProfileData profile={props.profile} 
                           isOwner={props.isOwner} 
                           goToEditMode={()=> {
                                setEditMode(true)
        }} />}
        
      </div>
    </div>
  )
}

type ContactPropsType = {
  contactTitle: string
  contactValue: string
}

const Contact: React.FC <ContactPropsType> = ({ contactTitle, contactValue }) => {
  return <div>{contactTitle} : {contactValue}</div>
}

type ProfileDataPropsType = {
  profile: userProfileType
  isOwner: boolean
  goToEditMode: () => void
}
const ProfileData: React.FC <ProfileDataPropsType> = (props) => {
  return (
    <div>
      {props.isOwner && <div><button onClick={ ()=> {props.goToEditMode()} } >edit</button></div>}
      <div>{props.profile.aboutMe}</div>
      <div>нужна работа: {props.profile.lookingForAJob ? 'Yes' : 'No'} </div>
      {props.profile.lookingForAJob && <div>Навыки: {props.profile.lookingForAJobDescription} </div>}
      <div className={classes.contacts}> Contacts:{Object.keys(props.profile.contacts).map(key => {
        return <Contact contactTitle={key}
          contactValue={props.profile.contacts[key as keyof contactsType]}
          key={key} />
      })}
      </div>
    </div>
  )
}



export default ProfileInfo