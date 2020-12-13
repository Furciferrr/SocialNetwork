
import { connect } from 'react-redux';
import {addPostActionCreater} from '../../../redax/contentPage-reducer'
import MyPosts from './Myposts'



const mapStateToProps = (state) => {
  return {
    contentPage: state.contentPage
  }
}

const mapDispatchToProps =(dispatch) => {
  return{
    addPostAction: (postMessage) =>{
      dispatch(addPostActionCreater(postMessage))
    }
  }
}

const MypostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts);

export default MypostsContainer