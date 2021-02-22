import React from 'react';
import { userProfileType } from '../../Types/types';
import classes from './Content.module.css';
import MypostsContainer from './MyPosts/MypostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';


type propsContentType = {
    profile: userProfileType | null
    savePhotoThunk: (photo: File) => void
    setFormDataThunk: (formData: userProfileType) => Promise<any>
    updateStatusThunk: (status: string) => void
    status: string
    isOwner: boolean
}

const Content: React.FC<propsContentType> = (props) => {
    return (
      <div className={classes.content}>
          <div>
              <img alt='decorate' src='https://apod.nasa.gov/apod/image/2008/PerseidBridge_Zhang_4032.jpg'/>
          </div>
         <ProfileInfo profile={props.profile} status={props.status} 
         updateStatusThunk={props.updateStatusThunk} isOwner={props.isOwner} savePhotoThunk={props.savePhotoThunk}
         setFormDataThunk={props.setFormDataThunk}/>
         <MypostsContainer/>
      </div>
    )
}

export default Content