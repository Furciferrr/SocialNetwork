
import { connect } from 'react-redux';
import {addPostActionCreater, updateChengePost} from '../../../redax/contentPage-reducer'
import MyPosts from './Myposts'


/* const MypostsContainer = (props) => {

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
} */
 




const mapStateToProps = (state) => {
  return {
    contentPage: state.contentPage
  }
}

const mapDispatchToProps =(dispatch) => {
  return{
    updateNewPost: (text) => {
      let action = updateChengePost(text);
      dispatch(action);
    },
    addPostAction: () =>{
      dispatch(addPostActionCreater())
    }
  }
}

const MypostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts);

export default MypostsContainer