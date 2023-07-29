import {ActionType} from './profile-reducer';


const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState={
    posts: [
        {id: 1, message: 'Hi! How are you?', likesCount: 3},
        {id: 2, message: 'It\'s my first post', likesCount: 44},
    ],
    newPostText: ''
}
export type InitialStateType=typeof initialState
export const profileReducer = (state:InitialStateType=initialState,action:ActionType):InitialStateType => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
           return state
        default:
            return state
    }

};

export type ActionDialogsReducerType = AddPostActionType
    | UpdateNewPostTextActionType


export type AddPostActionType = ReturnType<typeof addPostAC>
export type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostAC>
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