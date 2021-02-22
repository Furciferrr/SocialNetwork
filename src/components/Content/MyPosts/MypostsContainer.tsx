
import { connect } from 'react-redux';
import {actions} from '../../../redax/contentPage-reducer'
import { AppStateType } from '../../../redax/redux-store';
import { contentPageType } from '../../../Types/types';
import MyPosts from './Myposts'


type MapStateToPropsType = {
  contentPage: contentPageType
}



const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    contentPage: state.contentPage
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return{
    addPostAction: (postMessage: string) =>{
      dispatch(actions.addPostActionCreater(postMessage))
    }
  }
}

const MypostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts);

export default MypostsContainer