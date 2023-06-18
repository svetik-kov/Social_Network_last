import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <div className={s.dialog + ' '+ s.active}>
                   <NavLink to={'/dialogs/1'}> Svetlana</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={'/dialogs/2'}> Natasha</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={'/dialogs/3'}>  Irina</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={'/dialogs/4'}> Tanya</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={'/dialogs/5'}>  Zlata</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={'/dialogs/6'}>  Marina</NavLink>
                </div>


            </div>
        <div className={s.messages}>
            <div className={s.message}>Hello!</div>
            <div className={s.message}>How are you?</div>
            <div className={s.message}>Yo!</div>
        </div>

        </div>

    );
};

