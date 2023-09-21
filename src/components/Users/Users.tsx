import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assetc/images/avatar.png';

import { UsersPropsType} from '../../redux/users-reducer';
import {NavLink} from 'react-router-dom';
import { usersAPI} from '../../api/api';

type UsersType = {
    onPageChanged: (pageNumber: number) => void
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    toggleFollowingProgress:(followingInProgress: boolean,userId:number)=>void
    //followingInProgress:boolean
    followingInProgress:number[]

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
        <NavLink to={'/profile/' + u.id}>
        <img src={u.photos.small !== null ? u.photos.small : userPhoto}/>
</NavLink>
    </div>
    <div>
        {u.followed
            ? <button disabled={props.followingInProgress.some((id)=>id===u.id)} onClick={() => {
                props.toggleFollowingProgress(true,u.id)
                usersAPI.unFollowUsers(u.id)
                // axios.delete(`https://social-network.samuraijs.com/api/1.0//follow/${u.id}`,  {
                //     withCredentials: true,
                // headers: {
                //         'API-KEY':'45815775-eb1a-429a-98a2-208cd0dc3fe2'
                // }})
                    .then((response) => {
                    if (response.data.resultCode===0){
                        props.unFollow(u.id)
                    }
                        props.toggleFollowingProgress(false,u.id)
                    })
                // props.unFollow(u.id)

            }}>Follow</button>
            : <button disabled={props.followingInProgress.some((id)=>id===u.id)} onClick={() => {
                props.toggleFollowingProgress(true,u.id)
                usersAPI.followUsers(u.id)
               /* axios.post(`https://social-network.samuraijs.com/api/1.0//follow/${u.id}`, {},
                    {withCredentials: true,
                        headers: {
                            'API-KEY':'45815775-eb1a-429a-98a2-208cd0dc3fe2'
                        }
                    })*/
                    .then((response) => {
                        if (response.data.resultCode===0){
                            props.follow(u.id)
                        }
                        props.toggleFollowingProgress(false,u.id)
                    })
               // props.follow(u.id)

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

