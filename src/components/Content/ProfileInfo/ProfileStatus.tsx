import React, { ChangeEvent, useEffect, useState } from 'react';

type PropsType = {
  updateStatusThunk: (status: string) => void
  status: string
}




const ProfileStatus = (props: PropsType) => {

  const [editMode, setEditMode] = useState(false)
  const [status, setStatus] = useState(props.status);


  const activatedEditMode = () => {
    setEditMode(true)
  }

  const deactivatedEditMode = () => {
    setEditMode(false)
    props.updateStatusThunk(status);
  }

  const onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
    setStatus(e.currentTarget.value)
  }


  useEffect(() => {
    setStatus(props.status)
  },[props.status]);


  return (
    <div>
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