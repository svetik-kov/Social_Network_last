import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';
import {message} from 'antd';

type DialogItemType={
    name:string
    id:number
}
const DialogItem=(props:DialogItemType)=>{
    let path=`/dialogs/${props.id}`
    return (
        <div className={s.dialog + ' '+ s.active}>
            <NavLink to={path}> {props.name}</NavLink>
        </div>
    )
}

type MessageType={
    message:string
}
const Message=(props:MessageType)=>{
    return(
        <div className={s.message}>{props.message}</div>
    )
}
export const Dialogs = () => {
    let dialogsData=[
        {id:1, name:'Svetlana'},
        {id:2, name:'Natasha'},
        {id:3, name:'Irina'},
        {id:4, name:'Tanya'},
        {id:5, name:'Zlata'},
        {id:6, name:'Marina'},
    ]
    let messagesData=[
        {id:1, message:'Hello!'},
        {id:2, message:'How are you?'},
        {id:3, message:'Yo!'},
    ]
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>


            </div>
        <div className={s.messages}>
            <Message message={messagesData[0].message}/>
            <Message message={messagesData[1].message}/>

        </div>

        </div>

    );
};

