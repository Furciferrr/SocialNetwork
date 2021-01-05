import * as axios from 'axios'


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'c3824144-a684-4fa7-836c-9c70cb84d6fb'
    }
})



export const usersAPI = {
    
    getUsers(currentPage = 1, pageSize = 3) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            })
    },

    unfollowUser(id) {
        return instance.delete(`follow/${id}`)
    },

    followUser(id) {
        return instance.post(`follow/${id}`, {})
    },

    getUserProfile(UserId) {
        console.warn('use profileAPI')
        return profileAPI.getUserProfile(UserId)
    },

    authUserData() {
        return instance.get(`auth/me`)

    }

}



export const profileAPI = {

    getUserProfile(UserId) {
        return instance.get(`profile/${UserId}`)
    },

    getStatus(UserId) {
        return instance.get('profile/status/' + UserId)
    },

    updateStatus(status) {
        return instance.put('profile/status', {
            status: status
        })
    },

    savePhoto(photoFile) {
        const formData = new FormData();
        formData.append('image', photoFile)
        return instance.put('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },

    saveProfile(formData) {
        return instance.put('profile', 
            formData 
        )
    }

}

export const authAPI = {

    authUserData() {
        return instance.get(`auth/me`)

    },

    loginUser(formData) {
        return instance.post('/auth/login', {
            email: formData.email,
            password: formData.password,
            rememberMe: formData.remembeMe,
            captcha: formData.captcha
        })
    },

    logoutUser () {
        return instance.delete(`auth/login`)
    }

}

export const securityAPI = {
    getCaptchaURL () {
        return instance.get(`security/get-captcha-url`)
    }
}
