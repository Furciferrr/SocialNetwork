import {  photosType, userProfileType } from '../Types/types'
import { instance, ResponseType } from './api'

type SavePhotoResponseDataTYpe = {
    photos: photosType
}
export const profileAPI = {

    getUserProfile(UserId: number | null) {
        return instance.get<userProfileType>(`profile/${UserId}`).then(res => res.data)
    },

    getStatus(UserId: number) {
        return instance.get<string>('profile/status/' + UserId).then(res => res.data)
    },

    updateStatus(status: string) {
        return instance.put<ResponseType>('profile/status', {
            status: status
        }).then(res=> res.data)
    },

    savePhoto(photoFile: File) {
        const formData = new FormData();
        formData.append('image', photoFile)
        return instance.put<ResponseType<SavePhotoResponseDataTYpe>>('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res=> res.data)
    },

    saveProfile(formData: userProfileType) {
        return instance.put<ResponseType>('profile', 
            formData 
        ).then(res=> res.data)
    }
}



