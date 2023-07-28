import React from 'react';
import {ActionType, StateType} from './state';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'
export const profileReducer = (state:StateType,action:ActionType) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.messagesPage.newMessageBody = action.body
            return state;
        case SEND_MESSAGE:
            let body = state.messagesPage.newMessageBody
            state.messagesPage.newMessageBody = ''
            state.messagesPage.messages.push({id: 6, message: body})
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