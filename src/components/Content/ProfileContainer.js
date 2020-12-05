import React from 'react';
import { connect } from 'react-redux';
import Content from './Content';
import {setUserProfile} from './../../redax/contentPage-reducer'
import * as axios from 'axios'
import { withRouter } from 'react-router-dom';


class ProfileContainer extends React.Component {
   componentDidMount () {
    let userId = this.props.match.params.userId; 
    if (!userId) {
        userId = 2
    }  
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
        this.props.setUserProfile(response.data)
        });
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

const ProfileContainerConnect = connect(mapStateToProps, {setUserProfile})
(withUrlDataContainerComponent)

export default ProfileContainerConnect

