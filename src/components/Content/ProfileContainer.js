import React from 'react';
import { connect } from 'react-redux';
import Content from './Content';
import { getUserProfile } from './../../redax/contentPage-reducer'
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {
   componentDidMount () {
    let userId = this.props.match.params.userId; 
    if (!userId) {
        userId = 13120
    }  

    this.props.getUserProfile(userId)

   }
 
   render () {
       return (
        <Content {...this.props} profile={this.props.profile}/>
       )
   }
}


let mapStateToProps = (state) =>{
    return {
        profile: state.contentPage.userProfile
    }
}

const withUrlDataContainerComponent = withRouter(ProfileContainer)

const ProfileContainerConnect = connect(mapStateToProps, {getUserProfile})
(withUrlDataContainerComponent)

export default ProfileContainerConnect

