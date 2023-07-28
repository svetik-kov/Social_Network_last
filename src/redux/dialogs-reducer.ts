import {ActionType, StateType} from './state';

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'


export const dialogsReducer = (state:StateType,action:ActionType) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.profilePage.newPostText,
                likesCount: 0
            }
            state.profilePage.posts.push(newPost)
            state.profilePage.newPostText = ''
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.profilePage.newPostText = action.newText
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