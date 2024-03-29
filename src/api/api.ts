import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '45815775-eb1a-429a-98a2-208cd0dc3fe2'
    }
})

export const usersAPI = {
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

    getProfile(userId: number) {
        //console.warn('obsolete method. Please profileAPI object ')
        return profileAPI.getProfile(userId)
    }

}

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get(`profile/ ${userId}`)
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status})
    }
}
export const authAPI = {
    me() {
        return instance.get<ResponseType< { id: number, email: string, login:string }>>(`auth/me`)
    },
    login(email: string, password:string, rememberMe: boolean=false){
        return instance.post<ResponseType<{ userId: number }>>(`/auth/login`,{email,password,rememberMe,})
    },
    logout(){
        return instance.delete<ResponseType>(`/auth/login`,)
    }
}

export type ResponseType<D = {}> = {
    resultCode: number
    messages: Array<string>
    data: D
}
/*
export const getUsers=(pageSize: number,currentPage: number)=>{
   return  instance.get(`users?page=${currentPage}&count=${pageSize}`)
       .then((response)=>response.data)
}
export const followUsers=(userId: number)=>{
    return  instance.post(`follow/${userId}`, {},)
}
export const unFollowUsers=(userId: number)=>{
   return  instance.delete(`follow/${userId}`)
}

export const  getHeaders=()=>{
return  instance.get(`auth/me` )
}

export const getProfile=(userId:string)=>{
    return instance.get(`profile/ ${userId}` )
}*/
