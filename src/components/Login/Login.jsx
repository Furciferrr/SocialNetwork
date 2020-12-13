import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { Field, reduxForm } from 'redux-form'
import { required } from '../../utils/validators/validator'
import { Input } from '../common/FormsControl/FormsControl'
import {loginUserThunk} from './../../redax/auth-reducer'

const LoginForm = (props) => {
    
    return (
        <form onSubmit={props.handleSubmit} >
            <div>
                <Field placeholder={'Login'} name={'login'} component={Input} validate={[required]}/>
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} component={Input} validate={[required]}/>
            </div>
            <div>
                <Field type={'checkbox'} name={'remembeMe'} component={Input} validate={[required]}/>
                <span>remember me</span>
            </div>
            <div>
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
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    userId: state.auth.userId
})

const LoginContainer = compose (
   connect (mapStateToProps, {loginUserThunk})
)(Login)

export default LoginContainer