import React from 'react';
import { Field, reduxForm } from 'redux-form';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {required, maxLengthCreator} from './../../../utils/validators/validator'
import {Textarea} from './../../common/FormsControl/FormsControl'

const MyPosts = (props) => {

  let postsElem = props.contentPage.postsData.map((post) => {
    return (
      <Post message={post.message} key={post.id} likenumb={post.likeNumb} avalink={post.avaLink} />
    );
  });

  const onSubmit = (formData) =>{
    props.addPostAction(formData.postMessage);
  }

  return (
    <div className={classes.posts}>My posts
    <PostReduxForm onSubmit={onSubmit} />
      {postsElem}
    </div>
  )
}
const maxLength30 = maxLengthCreator(30);
const PostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} >
        <div>
          <Field name={'postMessage'} component={Textarea} placeholder={'write here'} validate={[required, maxLength30]}></Field>
        </div>
        <button>add post</button>
    </form>
  )
}

const PostReduxForm = reduxForm ({
  form: 'posts'
}) (PostForm)

export default MyPosts