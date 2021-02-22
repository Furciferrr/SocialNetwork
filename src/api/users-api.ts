import { userType } from '../Types/types'
import {instance, ResponseType} from './api'


type GetUsersType = {
    items: Array <userType>
    totalCount: number
    error: null | string
}


export const usersAPI = {
    
    getUsers(currentPage = 1, pageSize = 3, term: string = '', friend: null | boolean = null) {
        return instance.get<GetUsersType>(`users?page=${currentPage}&count=${pageSize}&term=${term}` + (friend === null ? '': `&friend=${friend}`))
            .then(response => {
                return response.data;
            })
    },

    unfollowUser(id: number) {
        return instance.delete<ResponseType>(`follow/${id}`).then(res => res.data)
    },

    followUser(id: number) {
        return instance.post<ResponseType>(`follow/${id}`).then(res => res.data)
    }

}


