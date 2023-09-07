import React from 'react';
import {UsersContainerType} from './UsersContainer';
import s from './Users.module.css'
import axios from 'axios';
import userPhoto from '../../assetc/images/avatar.png'

export const Users = (props: UsersContainerType) => {
    if (props.users.length===0){
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then((response)=>{
                props.setUsers(response.data.items)
            })

    }

    return (
        <div>
            {props.users.map(u => <div key={u.id}>
<span>
    <div className={s.usersPhoto}>
        <img src={u.photos.small !==null?u.photos.small:userPhoto}/>

    </div>
    <div>
        {u.followed
            ? <button onClick={()=>{props.unFollow(u.id)}}>Follow</button>
            : <button onClick={()=>{props.follow(u.id)}}>Unfollow</button>}

    </div>
</span>
                <span>
    <span>
        <div>{u.name}</div><div> {u.status}</div>
    </span>
    <span>
        <div>{"u.location.city"}</div><div>{"u.location.country"}</div>
    </span>
</span>
            </div>)}
        </div>
    );
};

