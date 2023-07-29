import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';



import {DialogsPropsType} from './DialogsContainer';

/*type MessagesPageType={
    dialogs: DialogType[],
    messages: MessageType[],
    newMessageBody: string
}
type DialogsType = {
    //store: StoreType
    updateNewMessageBody:(body:string)=>void
    sendMessage:()=>void
    messagesPage: MessagesPageType
}*/

export const Dialogs = (props: DialogsPropsType) => {
    let state = props.messagesPage

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = state.messages.map(m => <Message message={m.message}/>)
    let newMessage = state.newMessageBody

    const onSendMessageClick = () => {
        props.sendMessage()
        //props.store.dispatch(sendMessageAC())
    }
    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {

        let body = e.currentTarget.value
        props.updateNewMessageBody( body)
      //  props.store.dispatch(updateNewMessageBodyAC(body))
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}


            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea
                        value={newMessage}
                        onChange={onNewMessageChange}
                        placeholder={'Enter your message'}/></div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>

        </div>

    );
};

