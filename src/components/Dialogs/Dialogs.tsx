import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {DialogType, MessageType} from '../redux/state';


type DialogsType={
   // dialogs:DialogType[]
   // messages:MessageType[]
    state:{
        dialogs:DialogType[]
        messages:MessageType[]
    }
}

export const Dialogs = (props:DialogsType) => {
   /* let dialogs=[
        {id:1, name:'Svetlana'},
        {id:2, name:'Natasha'},
        {id:3, name:'Irina'},
        {id:4, name:'Tanya'},
        {id:5, name:'Zlata'},
        {id:6, name:'Marina'},
    ]
    let messages=[
        {id:1, message:'Hello!'},
        {id:2, message:'How are you?'},
        {id:3, message:'Yo!'},
    ]*/
    let dialogsElements=props.state.dialogs.map(d=><DialogItem  name={d.name} id={d.id}/>)
    let messagesElements=props.state.messages.map(m=> <Message message={m.message}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}


            </div>
        <div className={s.messages}>
            {messagesElements}

        </div>

        </div>

    );
};

