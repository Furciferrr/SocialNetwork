import React from 'react';
import {addPostActionCreater, updateChengePost} from '../../../redax/contentPage-reducer'
import MyPosts from './Myposts'


const MypostsContainer = (props) => {

let contentPage = props.store.getState().contentPage

let addPosts = () => {
  props.store.dispatch(addPostActionCreater());
  
}

let changeText = (text) => {
  props.store.dispatch(updateChengePost(text));
}

    return (
      <MyPosts
      updateNewPost={changeText}
      addPostAction={addPosts}
      contentPage={contentPage}/>
    )
}

export default MypostsContainer