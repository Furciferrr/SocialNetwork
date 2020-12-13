import React from 'react';
import { Field, reduxForm } from 'redux-form';
import classes from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

  let postsElem = props.contentPage.postsData.map((post) => {
    return (
      <Post message={post.message} key={post.id} likenumb={post.likeNumb} avalink={post.avaLink} />
    );
  });

/*   let newPostsElement = React.createRef();

  let addPosts = () => {
    props.addPostAction();
  }

  let changeText = () => {
    let text = newPostsElement.current.value
    props.updateNewPost(text);
  } */

  const onSubmit = (formData) =>{
    props.addPostAction(formData.postMessage);
  }

  return (
    <div className={classes.posts}>My posts
    <PostReduxForm onSubmit={onSubmit} />
{/*       <div>
        <div>
          <textarea onChange={changeText} value={props.contentPage.chengePost} ref={newPostsElement}></textarea>
        </div>
        <button onClick={addPosts}>add post</button>
      </div> */}
      {postsElem}
    </div>
  )
}

const PostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} >
        <div>
          <Field name={'postMessage'} component='textarea' placeholder={'write here'} ></Field>
        </div>
        <button>add post</button>
    </form>
  )
}

const PostReduxForm = reduxForm ({
  form: 'posts'
}) (PostForm)

export default MyPosts