import {Dispatch} from 'redux';
import {getAuthUserData} from '../redux/auth-reducer';
import {AppThunkDispatch} from '../redux/redux-store';

const INITIALIZED_SUCCESS = 'INITIALIZED-SUCCESS'


let initialState = {
    initialized: false,
}
type InitialStateType = typeof initialState


export const appReducer = (state: InitialStateType = initialState, action: ActionType) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {...state, initialized: true}
        default:
            return state
    }

};

export type ActionType = InitializedSuccessType


export type InitializedSuccessType = ReturnType<typeof initializedSuccess>

export const initializedSuccess = () => ({
    type: INITIALIZED_SUCCESS,
} as const)


export const initializeApp = () => (dispatch: AppThunkDispatch) => {
    let promise = dispatch(getAuthUserData())
    Promise.all([promise])
        .then(() => {
        dispatch(initializedSuccess())
    })
}

/*
export const login = (email: string, password: string, rememberMe: boolean) => (dispatch: Dispatch<any>) => {

       authAPI.login(email, password, rememberMe)
        .then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            } else {
                let message=response.data.messages.length>0?response.data.messages[0]:'Some error'
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
}*/
