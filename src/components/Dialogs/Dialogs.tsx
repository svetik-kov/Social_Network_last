import React from 'react';
import s from './Dialogs.module.css'

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <div className={s.dialog + ' '+ s.active}>
                    Svetlana
                </div>
                <div className={s.dialog}>
                    Natasha
                </div>
                <div className={s.dialog}>
                    Irina
                </div>
                <div className={s.dialog}>
                    Tanya
                </div>
                <div className={s.dialog}>
                    Zlata
                </div>
                <div className={s.dialog}>
                    Marina
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

