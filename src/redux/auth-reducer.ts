import {Dispatch} from 'redux';
import {authAPI} from '../api/api';
import {stopSubmit} from 'redux-form';
import {AppThunkDispatch} from '../redux/redux-store';

const SET_USER_DATA = 'SET-USER-DATA'

export type DataType = {
    id: number,
    email: string,
    login: string
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
    isAuth: false
}
type InitialStateType = AuthType & { isAuth: boolean }


export const authReducer = (state: InitialStateType = initialState, action: ActionType) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state, ...action.payload}
        default:
            return state
    }

};

export type ActionType = SetUserDaraType


export type SetUserDaraType = ReturnType<typeof setAuthUserData>


//export const setUserDara = (data: DataType) => ({type: SET_USER_DATA, data} as const)
export const setAuthUserData = (id: number | null,
                                email: string | null,
                                login: string | null,
                                isAuth: boolean) => ({
    type: SET_USER_DATA,
    payload: {id, email, login, isAuth}
} as const)

export type GetAuthUserDataType = ReturnType<typeof getAuthUserData>
export const getAuthUserData = () => (dispatch: AppThunkDispatch) => {
    return authAPI.me()
        .then((response) => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                dispatch(setAuthUserData(id, email, login, true))
            }
        })
}

export const login = (email: string, password: string, rememberMe: boolean) => (dispatch: Dispatch<any>) => {

    authAPI.login(email, password, rememberMe)
        .then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            } else {
                let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
                dispatch(stopSubmit('login', {_error: message}))
            }
        })
}

export const logout = () => (dispatch: Dispatch<ActionType>) => {
    authAPI.logout()
        .then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
}