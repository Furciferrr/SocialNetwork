import React from 'react';
import { connect } from 'react-redux';
import Content from './Content';
import { getUserProfileThunk, getStatusThunk, updateStatusThunk, savePhotoThunk, setFormDataThunk } from './../../redax/contentPage-reducer'
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

    refreshProfile () {
        let userId = this.props.match.params.userId; 
        if (!userId) {
            userId = this.props.authorizedUserId;
        }  if (!userId) {
            this.props.history.push('/login');
        }
    
        this.props.getUserProfileThunk(userId)
        this.props.getStatusThunk(userId)

    }
   componentDidMount () {
    this.refreshProfile()
   }

   componentDidUpdate (prevProps, prevState, snapshot) {
       if (this.props.match.params.userId !== prevProps.match.params.userId) {
        this.refreshProfile()
       }
   }
 
   render () {
       return (
        <Content {...this.props} profile={this.props.profile} isOwner={!this.props.match.params.userId}/>
       )
   }
}


let mapStateToProps = (state) =>{
    return {
        profile: state.contentPage.userProfile,
        status: state.contentPage.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth,
    }
}

const ProfileContainerConnect = compose(
    connect(mapStateToProps, {getUserProfileThunk,getStatusThunk, updateStatusThunk, savePhotoThunk, setFormDataThunk}),
    withRouter,
    withAuthRedirect
) (ProfileContainer)


export default ProfileContainerConnect

