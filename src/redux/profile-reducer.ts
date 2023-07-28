import React from 'react';
import {ActionType, StateType} from './store';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState= {
    dialogs: [
        {id: 1, name: 'Svetlana'},
        {id: 2, name: 'Natasha'},
        {id: 3, name: 'Irina'},
        {id: 4, name: 'Tanya'},
        {id: 5, name: 'Zlata'},
        {id: 6, name: 'Marina'},
    ],
    messages: [
        {id: 1, message: 'Hello!'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Yo!'},
    ],
    newMessageBody: ''
}
type InitialStateType=typeof initialState
export const dialogsReducer = (state:InitialStateType=initialState,action:ActionType) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody
            state.newMessageBody = ''
            state.messages.push({id: 6, message: body})
            return state
        default:
            return state
    }

};

export type ActionProfileReducerType =
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