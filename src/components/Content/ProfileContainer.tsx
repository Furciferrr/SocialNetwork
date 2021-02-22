import { AppStateType } from '../../redax/redux-store';
import React from 'react';
import { connect } from 'react-redux';
import Content from './Content';
import { getUserProfileThunk, getStatusThunk, updateStatusThunk, savePhotoThunk, setFormDataThunk } from '../../redax/contentPage-reducer'
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';
import { userProfileType } from '../../Types/types';


type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
    getUserProfileThunk: (userId: number) => void
    getStatusThunk: (userId: number) => void
    updateStatusThunk: (status: string) => void
    savePhotoThunk: (photo: File) => void
    setFormDataThunk: (formData: userProfileType) => Promise<any>
}
type PathParamsType = {
    userId: string
}

type PropsType = MapPropsType & DispatchPropsType & RouteComponentProps<PathParamsType>

class ProfileContainer extends React.Component<PropsType> {

    refreshProfile () {
        let userId: number | null = +this.props.match.params.userId; 
        if (!userId) {
            userId = this.props.authorizedUserId;
        }  if (!userId) {
            this.props.history.push('/login');
        }
    
        this.props.getUserProfileThunk(userId as number)
        this.props.getStatusThunk(userId as number)

    }
   componentDidMount () {
    this.refreshProfile()
   }

   componentDidUpdate (prevProps: PropsType, prevState: PropsType) {
       if (this.props.match.params.userId !== prevProps.match.params.userId) {
        this.refreshProfile()
       }
   }
 
   render () {
       return (
        <Content {...this.props} 
        profile={this.props.profile} 
        isOwner={!this.props.match.params.userId}/>
       )
   }
}


let mapStateToProps = (state: AppStateType) =>{
    return {
        profile: state.contentPage.userProfile,
        status: state.contentPage.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth,
    }
}

const ProfileContainerConnect = compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfileThunk,getStatusThunk, updateStatusThunk, savePhotoThunk, setFormDataThunk}),
    withRouter,
    withAuthRedirect
) (ProfileContainer)


export default ProfileContainerConnect

