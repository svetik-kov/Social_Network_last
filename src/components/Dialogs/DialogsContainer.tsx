import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';

import {sendMessageAC, updateNewMessageBodyAC} from '../../redux/profile-reducer';
import {StoreType} from '../../redux/redux-store';
import {Dialogs} from './Dialogs';


type DialogsType = {
    store: StoreType
}

export const DialogsContainer = (props: DialogsType) => {
    let state = props.store.getState().messagesPage


    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageAC())
    }
    const onNewMessageChange = (body: string) => {
        props.store.dispatch(updateNewMessageBodyAC(body))
    }
    return (

        <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} messagesPage={state}/>
    );
};

