import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import { required } from '../../utils/validators/validator'
import { Input } from '../common/FormsControl/FormsControl'
import { loginUserThunk } from '../../redax/auth-reducer'
import classes from './../common/FormsControl/formsControl.module.css'
import {LoginFormDataType} from './../../Types/types'
import { AppStateType } from '../../redax/redux-store'

type LoginFormOwnPropsType = {
    captcha: string | null
}

const LoginForm: React.FC<InjectedFormProps<LoginFormDataType, LoginFormOwnPropsType> & LoginFormOwnPropsType> = (props) => {

    
    return (
        <form onSubmit={props.handleSubmit} >
            <div>
                <Field placeholder={'Email'} name={'email'} component={Input} validate={[required]} />
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} component={Input} validate={[required]} type='password' />
            </div>
            <div>
                <Field type={'checkbox'} name={'remembeMe'} component={Input} />
                <span>remember me</span>
            </div>
            {props.captcha && 
              <div>
                    <img src={props.captcha} alt='captcha'/>
                    <div>
                      <Field placeholder={'captcha'} name={'captcha'} component={Input} validate={[required]}/>
                    </div>
              </div>
            }
            <div>
                {props.error && <div className={classes.errorLogin}>
                    {props.error}
                </div>}
                <button>Login</button>
            </div>
        </form>
    )
}


const LoginReduxForm = reduxForm<LoginFormDataType, LoginFormOwnPropsType>({
    form: 'login'
})(LoginForm)


const Login: React.FC = () => {
   
    
    const captchaURL = useSelector((state:AppStateType) => state.auth.captchaURL)
    const isAuth = useSelector((state:AppStateType) => state.auth.isAuth)

    const dispatch = useDispatch()
   
    
    const onSubmit = (formData: LoginFormDataType) => {
        dispatch(loginUserThunk(formData))
    }

    if (isAuth) {
        return <Redirect to={'/Profile'} />
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captcha={captchaURL}/>
        </div>
    )
}

export default Login