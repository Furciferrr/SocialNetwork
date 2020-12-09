import React from 'react';
import { connect } from 'react-redux';
import Content from './Content';
import { getUserProfileThunk } from './../../redax/contentPage-reducer'
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
   componentDidMount () {
    let userId = this.props.match.params.userId; 
    if (!userId) {
        userId = 13120
    }  

    this.props.getUserProfileThunk(userId)

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
    }
}

const ProfileContainerConnect = compose(
    connect(mapStateToProps, {getUserProfileThunk}),
    withRouter,
    withAuthRedirect
) (ProfileContainer)


export default ProfileContainerConnect

