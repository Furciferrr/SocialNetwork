import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Field, reduxForm } from 'redux-form';
import {Textarea} from './../common/FormsControl/FormsControl'
import { required, maxLengthCreator } from '../../utils/validators/validator';

const Dialogs = (props) => {


  let dialogsElements = props.messagesPage.dialogData.map((element) => {
    return (
      <DialogItem name={element.name} key={element.id} id={element.id} dialogAvaLink={element.dialogAvaLink} />
    );
  });


  let messagesElements = props.messagesPage.messagesData.map(message => <Message message={message.message} />);


  const onSubmit = (formData) => {
    props.addMessageAction(formData.messageValue);
  } 

  return (
    <div className={classes.dialogs}>
        <div className={classes.dialogItems}>
          {dialogsElements}
        </div>
        <div className={classes.messagesBlock}>
          {messagesElements}
        </div>
        <DialogReduxForm onSubmit={onSubmit}/>
    </div>
  )
}
const maxLength50 = maxLengthCreator(50)
const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
        <div>
          <Field placeholder={'Message'} name={'messageValue'} component={Textarea} validate={[required, maxLength50]}/>
        </div>
        <button>add message</button>
    </form>
  )
}

const DialogReduxForm = reduxForm ({
  form: 'dialogs'
}) (AddMessageForm)



export default Dialogs