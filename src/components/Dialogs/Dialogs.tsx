import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';



export const Dialogs = () => {
    let dialogs=[
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
    ]
    let dialogsElements=dialogs.map(d=><DialogItem name={d.name} id={d.id}/>)
    let messagesElements=messages.map(m=> <Message message={m.message}/>)
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

