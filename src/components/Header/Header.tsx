import React from 'react';
import s from './Header.module.css'
import {NavLink} from 'react-router-dom';

type HeaderPropsType={
    isAuth:boolean
    login: string
    logout:()=>void
}
export const Header = (props:HeaderPropsType) => {
    return <header className={s.header}>
        <img
            src={'https://st2.depositphotos.com/3223811/7792/i/450/depositphotos_77928500-stock-photo-blue-block.jpg'}/>

        <div className={s.loginBlock}>
            {props.isAuth
                ?<div> {props.login} - <button onClick={props.logout}>Log out</button> </div>
                :<NavLink to={'/login'}>Login</NavLink>
            }

        </div>
    </header>

};

