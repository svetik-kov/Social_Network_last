import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';

import {sendMessageAC, updateNewMessageBodyAC} from '../../redux/profile-reducer';
import {StoreType} from '../../redux/redux-store';
import {Dialogs} from './Dialogs';
import StoreContext from '../../StoreContext';


type DialogsType = {
    //store: StoreType
}

export const DialogsContainer = (props: DialogsType) => {

    return (
<StoreContext.Consumer>
    {
    (store)=>{
        let state = store.getState().messagesPage


        const onSendMessageClick = () => {
           store.dispatch(sendMessageAC())
        }
        const onNewMessageChange = (body: string) => {
            store.dispatch(updateNewMessageBodyAC(body))
        }
        return(
            <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} messagesPage={state}/>
        )
    }
    }
</StoreContext.Consumer>

    );
};

