import * as axios from 'axios'


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY' : 'c3824144-a684-4fa7-836c-9c70cb84d6fb'
    }
})

const usersAPI = {
    getUsers (currentPage = 1, pageSize = 3) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
                return response.data;
            })
    },

    unfollowUser (id) {
       return instance.delete(`follow/${id}`)
   },

    followUser (id) {
        return instance.post(`follow/${id}`, {})
    },

    getUserProfile (UserId) {
        return instance.get(`profile/${UserId}`)
    },

    authUserData () {
        return instance.get(`auth/me`)
              
    }

    

}


export default usersAPI