import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { Input, Textarea } from '../../common/FormsControl/FormsControl'
import classes from './ProfileInfo.module.css';
import style from './../../common/FormsControl/formsControl.module.css'

const ProfileDataForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} >
            {props.error && <div className={style.errorLogin}>
                {props.error}
            </div>}
            <div>
                <b>Full name:</b><Field placeholder={'Full name'} name={'fullName'} component={Input} />
            </div>
            <div>
                <b>About me:</b><Field placeholder={'About me'} name={'aboutMe'} component={Input} type='text' />
            </div>
            <div>
                <b>Looking for a job:</b><Field type={'checkbox'} name={'lookingForAJob'} component={Input} />
            </div>
            <div>
                <b>Skills:</b><Field placeholder={'skils'} name={'lookingForAJobDescription'} component={Textarea} type='text' />
            </div>
            <div> Contacts:{Object.keys(props.profile.contacts).map(key => {
                return <div className={classes.contacts} key={key}> 
                {key} 
                <Field placeholder={key} name={'contacts.' + key} component={Input} />
                </div>
            })}
            </div>

            <div>
                <button>Save</button>
            </div>
        </form>
    )
}



const ProfileDataReduxForm = reduxForm({
    form: 'ProfileData'
})(ProfileDataForm)

export default ProfileDataReduxForm