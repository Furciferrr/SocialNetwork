import { LoginFormDataType } from '../Types/types'
import {instance, ResponseType, ResultCodeEnum, ResultCodeForCaptchaEnum} from './api'


type AuthResponseType = {
     id: number 
     email: string 
     login: string 
}

type LoginResponseType = {
    userId: number   
}


export const authAPI = {

    authUserData() {
        return instance.get<ResponseType<AuthResponseType>>(`auth/me`).then(res => res.data)

    },

    loginUser(formData: LoginFormDataType) {
        return instance.post<ResponseType<LoginResponseType, ResultCodeForCaptchaEnum | ResultCodeEnum>>('/auth/login', {
            email: formData.email,
            password: formData.password,
            rememberMe: formData.rememberMe,
            captcha: formData.captcha
        }).then(res => res.data)
    },

    logoutUser () {
        return instance.delete(`auth/login`)
    }

}