import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assetc/images/avatar.png';

import {UsersPropsType} from '../../redux/users-reducer';
import {NavLink} from 'react-router-dom';

type UsersType={
    onPageChanged:(pageNumber: number)=>void
    follow: (userId: number) => void
    unFollow: (userId: number) => void
}

export const Users = (props: UsersPropsType & UsersType ) => {
    let pagesCounter = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCounter; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div>
                {pages.map(p => <span
                    className={props.currentPage === p ? s.selectedPage : ''}
                    onClick={() => props.onPageChanged(p)}>
                    {p}
                </span>)}

            </div>
            {/*   <button onClick={this.getUsers}>Get users</button>*/}
            {props.users.map(u => <div key={u.id}>
<span>
    <div className={s.usersPhoto}>
        <NavLink to={'/profile/' +u.id}>
        <img src={u.photos.small !== null ? u.photos.small : userPhoto}/>
</NavLink>
    </div>
    <div>
        {u.followed
            ? <button onClick={() => {
                props.unFollow(u.id)
            }}>Follow</button>
            : <button onClick={() => {
                props.follow(u.id)
            }}>Unfollow</button>}

    </div>
</span>
                <span>
    <span>
        <div>{u.name}</div><div> {u.status}</div>
    </span>
    <span>
        <div>{'u.location.city'}</div><div>{'u.location.country'}</div>
    </span>
</span>
            </div>)}
        </div>
    );
};

