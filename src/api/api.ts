import axios from 'axios';

const instance=axios.create({
    baseURL:"https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        'API-KEY':'45815775-eb1a-429a-98a2-208cd0dc3fe2'
    }
})

export const usersAPI={
    getUsers(pageSize: number,currentPage: number){
        return  instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then((response)=>response.data)
    },
    followUsers(userId: number){
        return  instance.post(`follow/${userId}`, {},)
    },
    unFollowUsers(userId: number){
        return  instance.delete(`follow/${userId}`)
    },
    getHeaders(){
        return  instance.get(`auth/me` )
    },
    getProfile(userId:string){
        return instance.get(`profile/ ${userId}` )
    }
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
