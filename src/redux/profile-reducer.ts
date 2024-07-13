import {Dispatch} from 'redux';
import {profileAPI, usersAPI} from '../api/api';
import {AppThunkDispatch, StateType, useAppDispatch} from 'redux/redux-store';
import {stopSubmit} from 'redux-form';


const ADD_POST = 'ADD-POST'
const DELETE_POST = 'DELETE-POST'
const SET_USER_PROFILE = 'SET-USER-PROFILE '
const SET_STATUS = 'SET-STATUS '
const SAVE_PHOTO_SUCCESS = 'SAVE-PHOTO-SUCCESS'
const SAVE_PROFILE_SUCCESS = 'SAVE-PROFILE-SUCCESS'


let initialState = {
    posts: [
        {id: 1, message: 'Hi! How are you?', likesCount: 3},
        {id: 2, message: 'It\'s my first post', likesCount: 44},
    ],
    newPostText: '',
    profile: {
        userId: 0,
        lookingForAJob: true,
        lookingForAJobDescription: '',
        fullName: '',
        contacts: {
            github: '',
            vk: '',
            facebook: '',
            instagram: '',
            twitter: '',
            website: '',
            youtube: '',
            mainLink: '',
        },
        photos: {
            small: '',
            large: '',
        }
    },
    status: ''
}
export type InitialStateType = typeof initialState
export const profileReducer = (state: InitialStateType = initialState, action: ActionProfileReducerType): InitialStateType => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        }
        case DELETE_POST:
            return {...state, posts: state.posts.filter(p => p.id !== action.id)}
        case 'SET-USER-PROFILE ':
            return {...state, profile: action.profile}
        case 'SET-STATUS ':
            return {...state, status: action.status}
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    photos: action.photos
                }
            }

        default:
            return state
    }

};

export type  ActionProfileReducerType = AddPostActionType
    //| UpdateNewPostTextActionType
    | SetUserProfileActionType
    | SetStatusProfileActionType
    | DeletePostActionType
    | SavePhotoSuccessActionType
//| SaveProfileSuccessActionType


export type AddPostActionType = ReturnType<typeof addPostAC>
export type DeletePostActionType = ReturnType<typeof deletePostAC>
export type SetUserProfileActionType = ReturnType<typeof setUserProfile>
export type SetStatusProfileActionType = ReturnType<typeof setStatusProfile>
export type SavePhotoSuccessActionType = ReturnType<typeof savePhotoSuccess>
//export type SaveProfileSuccessActionType = ReturnType<typeof saveProfileSuccess>


export const addPostAC = (newPostText: string) => {
    return {
        type: ADD_POST, newPostText
    } as const
}

export const deletePostAC = (id: number) => {
    return {
        type: 'DELETE-POST', id
    } as const
}
const setUserProfile = (profile: ProfileType) => {
    return {
        type: SET_USER_PROFILE, profile
    } as const
}
const setStatusProfile = (status: string) => {
    return {
        type: SET_STATUS, status
    } as const
}
const savePhotoSuccess = (photos: SavePhoto) => {
    return {
        type: SAVE_PHOTO_SUCCESS, photos
    } as const
}
/*const saveProfileSuccess = (profile: ProfileType) => {
    return {
        type: SAVE_PROFILE_SUCCESS, profile
    } as const
}*/

export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    aboutMe: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
    photos: {
        small: string
        large: string
    }
}

export const getUserProfile = (userId: number|null) => async (dispatch: Dispatch) => {
    const response = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(response.data))
}
export const getStatus = (userId: number) => async (dispatch: Dispatch) => {
    const response = await profileAPI.getStatus(userId)

    dispatch(setStatusProfile(response.data))
}
export const updateStatus = (status: string) => async (dispatch: Dispatch) => {
    const response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatusProfile(status))
    }
}
export const savePhoto = (file: File) => async (dispatch: Dispatch) => {
    const response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}
export const saveProfile = (profile: ProfileType) => async (dispatch: AppThunkDispatch, getState: () => StateType) => {
    const userId = getState().auth.id
    const response = await profileAPI.saveProfile(profile)
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId))
    } else {
        dispatch(stopSubmit('edit-profile', {_error:response.data.messages[0]}))
    //return Promise.reject(response.data.messages[0])
    }
}


export type SavePhoto =
    {
        small: string;
        large: string;
    }

