import React, { useEffect, useState } from 'react';
import classes from './ProfileInfo.module.css';




const ProfileStatus = (props) => {

  const [editMode, setEditMode] = useState(false)
  const [status, setStatus] = useState(props.status);


  const activatedEditMode = () => {
    setEditMode(true)
  }

  const deactivatedEditMode = () => {
    setEditMode(false)
    props.updateStatusThunk(status);
  }

  const onChangeStatus = (e) => {
    setStatus(e.currentTarget.value)
  }


  useEffect(() => {
    setStatus(props.status)
  },[props.status]);


  return (
    <div className={classes}>
      {!editMode &&
        <div>
          <span onDoubleClick={activatedEditMode}>{props.status ? props.status : 'Not status'}</span>
        </div>
      }
      {editMode &&
        <div>
          <input autoFocus={true} onChange={onChangeStatus} onBlur={deactivatedEditMode} value={status} />
        </div>
      }

    </div>
  )
}

export default ProfileStatus