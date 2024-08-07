import axios from 'axios';
import {ProfileType} from 'redux/profile-reducer';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'b4dc19d8-55f1-4770-bc69-c775ff6af43b'
    }
})

export const usersAPI= {
    getUsers(pageSize: number, currentPage: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then((response) => response.data)
    },
    followUsers(userId: number) {
        return instance.post(`follow/${userId}`, {},)
    },
    unFollowUsers(userId: number) {
        return instance.delete(`follow/${userId}`)
    },

    getProfile(userId: number|null) {
        //console.warn('obsolete method. Please profileAPI object ')
        return profileAPI.getProfile(userId)
    }

}

export const profileAPI = {
    getProfile(userId: number|null) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status})
    },
    savePhoto(photoFile:File){
        let formData=new FormData()
        formData.append('image',photoFile)
        return instance.put(`/profile/photo`,formData,{
            headers:{
                'Content-Type':'multipart/form-data'
            }
        })
    },
    saveProfile(profile:ProfileType){
        return instance.put(`profile`, profile)
    },
}
export const authAPI = {
    me() {
        return instance.get<ResponseType<{ id: number, email: string, login: string }>>(`auth/me`)
    },
    login(email: string, password: string, rememberMe: boolean = false) {
        return instance.post<ResponseType<{ userId: number }>>(`/auth/login`, {email, password, rememberMe})
    },
    logout() {
        return instance.delete<ResponseType>(`/auth/login`,)
    }
}

export type ResponseType<D = {}> = {
    resultCode: number
    messages: Array<string>
    data: D
}

