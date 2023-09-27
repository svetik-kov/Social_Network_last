import {Dispatch} from 'redux';
import {authAPI, usersAPI} from '../api/api';

const SET_USER_DATA = 'SET-USER-DATA'

export type DataType= {
    id: number,
    email: string,
    login:string
}
export type AuthType = {
    resultCode: number
    messages: string[],
    data: DataType
}


let initialState = {
    resultCode: 0,
    messages: [],
    data: {
        id: 0,
        email: '',
        login: 'hello'
    },
    isAuth:false
}
type InitialStateType =AuthType & {isAuth:boolean}
export const authReducer = (state: InitialStateType = initialState, action: ActionType)=> {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state,...action.data,isAuth:true}
        default:
            return state

    }

};

export type ActionType = SetUserDaraType


export type SetUserDaraType = ReturnType<typeof setAuthUserData >



//export const setUserDara = (data: DataType) => ({type: SET_USER_DATA, data} as const)
export const setAuthUserData = ( id: number,
                             email: string,
                             login:string) => ({type: SET_USER_DATA, data:{id,email,login}} as const)

export const getAuthUserData=()=>(dispatch:Dispatch)=>{
    authAPI.me()
        .then((response) => {
            if(response.data.resultCode===0){
                let {id, email, login}=response.data.data
                dispatch(setAuthUserData (id, email, login))
            }
        })
}