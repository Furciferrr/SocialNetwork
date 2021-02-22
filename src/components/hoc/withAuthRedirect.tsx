import { Redirect } from "react-router-dom"
import React from 'react'
import { connect } from "react-redux"
import { AppStateType } from "../../redax/redux-store";

let mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth
});

type MapPropsType = {
    isAuth: boolean
}
export function withAuthRedirect <WCP> (Component: React.ComponentType<WCP>) {
   const RedirectComponent: React.FC<MapPropsType> = (props) => {
        let {isAuth, ...restProps} = props
            if (!isAuth) return <Redirect to='/login'/>
            return <Component {...restProps as WCP}/>
  
    }
    
    let ConnectedAuthRedirectComponent = connect (mapStateToProps)(RedirectComponent)    
    return ConnectedAuthRedirectComponent
}