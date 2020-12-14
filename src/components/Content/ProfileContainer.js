import React from 'react';
import { connect } from 'react-redux';
import Content from './Content';
import { getUserProfileThunk, getStatusThunk, updateStatusThunk } from './../../redax/contentPage-reducer'
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
   componentDidMount () {
    let userId = this.props.match.params.userId; 
    if (!userId) {
        userId = this.props.authorizedUserId;
    }  if (!userId) {
        this.props.history.push('/login');
    }

    this.props.getUserProfileThunk(userId)
    this.props.getStatusThunk(userId)

   }
 
   render () {
       return (
        <Content {...this.props} profile={this.props.profile}/>
       )
   }
}


let mapStateToProps = (state) =>{
    return {
        profile: state.contentPage.userProfile,
        status: state.contentPage.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth
    }
}

const ProfileContainerConnect = compose(
    connect(mapStateToProps, {getUserProfileThunk,getStatusThunk, updateStatusThunk}),
    withRouter,
    withAuthRedirect
) (ProfileContainer)


export default ProfileContainerConnect

