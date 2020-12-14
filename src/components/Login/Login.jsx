import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { compose } from 'redux'
import { Field, reduxForm } from 'redux-form'
import { required } from '../../utils/validators/validator'
import { Input } from '../common/FormsControl/FormsControl'
import {loginUserThunk} from './../../redax/auth-reducer'
import classes from './../common/FormsControl/formsControl.module.css'


const LoginForm = (props) => {
    
    return (
        <form onSubmit={props.handleSubmit} >
            <div>
                <Field placeholder={'Email'} name={'email'} component={Input} validate={[required]}/>
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} component={Input} validate={[required]} type='password'/>
            </div>
            <div>
                <Field type={'checkbox'} name={'remembeMe'} component={Input}/>
                <span>remember me</span>
            </div>
            <div>
                {props.error && <div className={classes.errorLogin}>
                    {props.error}
                </div>}
                <button>Login</button>
            </div>
        </form>
    )
}


const LoginReduxForm = reduxForm({
  form: 'login'
})(LoginForm)


const Login = (props) => {
const onSubmit = (formData) => {
    props.loginUserThunk(formData)
}

if (props.isAuth) {
    return <Redirect to={'/Profile'}/>
}
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

const LoginContainer = compose (
   connect (mapStateToProps, {loginUserThunk})
)(Login)

export default LoginContainer