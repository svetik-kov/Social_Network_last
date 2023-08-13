import React from 'react';
import {UsersContainerType} from './UsersContainer';
import s from './Users.module.css'

export const Users = (props: UsersContainerType) => {
    if (props.users.length===0){
        props.setUsers(
            [
                {id: 1,photoUser:'https://flomaster.club/uploads/posts/2021-12/1638885351_4-flomaster-club-p-risunki-parnei-v-stile-krasivie-risunki-5.jpg', followed:false, fullName: 'Dmitry', status:'I am a boss', location:{city:'Minsk',country:'Belarus'}},
                {id: 2,photoUser:'https://99px.ru/sstorage/56/2012/02/image_561402122132546240443.jpg', followed:true, fullName: 'Masha', status:'I am a boss too', location:{city:'Moscow',country:'Russia'}},
                {id: 3,photoUser:'https://avatars.mds.yandex.net/i?id=da87b9f958b1cdb0bf6d514ea48ac92c8f1a141c-8257511-images-thumbs&n=13', followed:false, fullName: 'Sasha', status:'I am a boss too', location:{city:'Kiev',country:'Ukraine'}},
            ]
        )
    }

    return (
        <div>
            {props.users.map(u => <div key={u.id}>
<span>
    <div className={s.usersPhoto}>
        <img src={u.photoUser}/>

    </div>
    <div>
        {u.followed
            ? <button onClick={()=>{props.unFollow(u.id)}}>Follow</button>
            : <button onClick={()=>{props.follow(u.id)}}>Unfollow</button>}

    </div>
</span>
                <span>
    <span>
        <div>{u.fullName}</div><div> {u.status}</div>
    </span>
    <span>
        <div>{u.location.city}</div><div>{u.location.country}</div>
    </span>
</span>
            </div>)}
        </div>
    );
};

