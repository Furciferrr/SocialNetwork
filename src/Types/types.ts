export type postsDataType = {
    id: number
    message: string
    likeNumb: number
    avaLink: string
}
export type contactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
export type photosType = {
    small: string | null
    large: string | null
}

export type userProfileType = {
    aboutMe: string
    contacts: contactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: photosType
}

export type userType = {
    name: string,
    id: number,
    photos: photosType
    status: string | null,
    followed: boolean
  }

export type LoginFormDataType = {
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: string
}  

export type contentPageType = {
    postsData: Array<postsDataType>,
    userProfile:userProfileType | null,
    status: string
  }