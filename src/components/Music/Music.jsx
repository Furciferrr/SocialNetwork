import React from 'react';
import { Field, reduxForm } from 'redux-form';
import classes from './Music.module.css';


const Music = (props) => {
  const onSubmit = (formData) => {
    console.log(formData)
  }
    return (
      <div className={classes.music}>
         <MusicReduxForm onSubmit={onSubmit} />
      </div>
    )
}


const MusicForm = (props) => {
  return <form onSubmit={props.handleSubmit} >
    <div>
       <Field name="lastName" component="input" type="text"/>
    </div>
    <div>
        <Field name="firstName" component="input" type="text"/>
    </div>
    <div>
        <Field name="email" component="input" type="email" />
    </div>
    <button type="submit">Submit</button>
  </form>
}

const MusicReduxForm = reduxForm({
  form: 'musicForm'
})(MusicForm)

export default Music