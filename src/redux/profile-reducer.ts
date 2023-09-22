import {Dispatch} from 'redux';
import {usersAPI} from '../api/api';


const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET-USER-PROFILE '

let initialState = {
    posts: [
        {id: 1, message: 'Hi! How are you?', likesCount: 3},
        {id: 2, message: 'It\'s my first post', likesCount: 44},
    ],
    newPostText: '',
    profile: {
        userId: 0,
        lookingForAJob:true,
        lookingForAJobDescription:'',
        fullName:'',
        contacts: { github: '',
            vk: '',
            facebook: '',
            instagram:'',
            twitter: '',
            website: '',
            youtube:'',
            mainLink:'',
        },
        photos: {
            small: '',
            large: '',
        }
    }
}
export type InitialStateType = typeof initialState
export const profileReducer = (state: InitialStateType = initialState, action: ActionProfileReducerType): InitialStateType => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {...state, newPostText: action.newText}
        }
        case 'SET-USER-PROFILE ':
            return {...state,profile:action.profile}
        default:
            return state
    }

};

export type  ActionProfileReducerType = AddPostActionType
    | UpdateNewPostTextActionType
    | SetUserProfileActionType


export type AddPostActionType = ReturnType<typeof addPostAC>
export type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostAC>
export type SetUserProfileActionType = ReturnType<typeof setUserProfile>

export const addPostAC = () => {
    return {
        type: ADD_POST
    } as const
}
export const updateNewPostAC = (text: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT, newText: text
    } as const
}
const setUserProfile = (profile: ProfileType) => {
    return {
        type: SET_USER_PROFILE, profile
    } as const
}
export type ProfileType={
    userId: number
    lookingForAJob:boolean
    lookingForAJobDescription:string
    fullName:string
    contacts: { github: string
        vk: string
        facebook: string
        instagram:string
        twitter: string
        website: string
        youtube:string
        mainLink:string
    }
    photos: {
        small: string
        large: string
        }
}

export const getUserProfile=(userId:string)=>(dispatch:Dispatch)=>{
    usersAPI.getProfile(userId)
        .then((response) => {
            dispatch(setUserProfile(response.data))

        })
}