import React from 'react';
import s from './Paginator.module.css';

import {UsersPropsType, UserType} from 'redux/users-reducer';


type PropsType = {
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void

}

export const Paginator = (props:  PropsType) => {
    let pagesCounter = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCounter; i++) {
        pages.push(i)
    }
    return (
        <div>
            {pages.map((p, index) => {

                return (
                    <span
                        key={index}
                        className={props.currentPage === p ? s.selectedPage : ''}
                        onClick={() => {
                            props.onPageChanged(p)
                        }}>
                    {p}
                </span>)
            })}
        </div>
    );
};

