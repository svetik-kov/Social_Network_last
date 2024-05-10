import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assetc/images/avatar.png';

import {UsersPropsType, UserType} from 'redux/users-reducer';
import {NavLink} from 'react-router-dom';


type PropsType = {
    user:UserType
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    followingInProgress: number[]


}

export const User = ({user,followingInProgress,follow,unFollow}: PropsType ) => {


    return (
        <div>

<span>
    <div className={s.usersPhoto}>
        <NavLink to={'/profile/' + user.id}>
        <img src={user.photos.small !== null ? user.photos.small : userPhoto}/>
</NavLink>
    </div>
    <div>
        {user.followed
            ? <button disabled={followingInProgress.some((id) => id === user.id)}
                      onClick={() => {
                          unFollow(user.id)


                      }}>Follow</button>
            : <button disabled={followingInProgress.some((id) => id === user.id)}
                      onClick={() => {
                          follow(user.id)

                      }}>Unfollow</button>}

    </div>
</span>
            <span>
    <span>
        <div>{user.name}</div><div> {user.status}</div>
    </span>
    <span>
        <div>{'user.location.city'}</div><div>{'user.location.country'}</div>
    </span>
</span>

        </div>
    );
};

