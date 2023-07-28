import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {  StoreType} from '../../redux/state';
import {sendMessageAC, updateNewMessageBodyAC} from '../../redux/profile-reducer';



type DialogsType={
   // dialogs:DialogType[]
   // messages:MessageType[]
 /*   state:{
        dialogs:DialogType[]
        messages:MessageType[]
        newMessageBody: string
    }*/
    store:StoreType
    //dispatch:(action:ActionType)=>void
}

export const Dialogs = (props:DialogsType) => {
let state=props.store.getState().messagesPage
    let dialogsElements=state.dialogs.map(d=><DialogItem  name={d.name} id={d.id}/>)
    let messagesElements=state.messages.map(m=> <Message message={m.message}/>)
    let newMessage=state.newMessageBody

    const onSendMessageClick=()=>{
        props.store.dispatch(sendMessageAC())
    }
    const onNewMessageChange=(e:ChangeEvent<HTMLTextAreaElement>)=>{
       let body= e.currentTarget.value
        props.store.dispatch(updateNewMessageBodyAC(body))
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

