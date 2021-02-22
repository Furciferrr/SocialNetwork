import {instance} from './api'



type SecurityType = {
    url: string
}

export const securityAPI = {
    getCaptchaURL () {
        return instance.get<SecurityType>(`security/get-captcha-url`).then(res=> res.data)
    }
}
