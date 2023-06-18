import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';
import {message} from 'antd';

type DialogItemType={
    name:string
    id:string
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
    title:string
}
const Message=(props:MessageType)=>{
    return(
        <div className={s.message}>{props.title}</div>
    )
}
export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <DialogItem name={'Svetlana'} id={'1'}/>
                <DialogItem name={'Natasha'} id={'2'}/>
                <DialogItem name={'Irina'} id={'3'}/>
                <DialogItem name={'Tanya'} id={'4'}/>
                <DialogItem name={'Zlata'} id={'5'}/>
                <DialogItem name={'Marina'} id={'6'}/>

            </div>
        <div className={s.messages}>
            <Message title={'Hello!'}/>
            <Message title={'How are you?'}/>
            <Message title={'Yo!'}/>
        </div>

        </div>

    );
};

