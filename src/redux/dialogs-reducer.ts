import React from 'react';
import { AddPostActionType, UpdateNewPostTextActionType} from './profile-reducer';
export type ActionType = AddPostActionType
    | UpdateNewPostTextActionType
    | UpdateNewMessageBodyActionType
    | SendMessageActionType

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'


type DialogType = {
    id: number
    name: string
}
type MessageType = {
    id: number
    message: string
}
let initialState= {
    dialogs: [
        {id: 1, name: 'Svetlana'},
        {id: 2, name: 'Natasha'},
        {id: 3, name: 'Irina'},
        {id: 4, name: 'Tanya'},
        {id: 5, name: 'Zlata'},
        {id: 6, name: 'Marina'},
    ] as DialogType[],
    messages: [
        {id: 1, message: 'Hello!'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Yo!'},
    ] as MessageType[],
    newMessageBody: ''
}
export type InitialStateType=typeof initialState
export const dialogsReducer = (state:InitialStateType=initialState,action:ActionDialogsReducerType):InitialStateType => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return    {...state,
                newMessageBody:action.body
            }

        case SEND_MESSAGE:
            let body =state.newMessageBody
            return {...state,
                newMessageBody :'',
                messages:[...state.messages,{id: 6, message: body}]
            }

        default:
            return state
    }

};

export type ActionDialogsReducerType =
    | UpdateNewMessageBodyActionType
    | SendMessageActionType


export type UpdateNewMessageBodyActionType = ReturnType<typeof updateNewMessageBodyAC>
export type SendMessageActionType = ReturnType<typeof sendMessageAC>
export const updateNewMessageBodyAC = (body: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY, body: body
    } as const
}
export const sendMessageAC = () => {
    return {
        type: SEND_MESSAGE
    } as const
}