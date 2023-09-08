import React from 'react';
import {UsersContainerType} from './UsersContainer';
import s from './Users.module.css'
import axios from 'axios';
import userPhoto from '../../assetc/images/avatar.png'
import {StateType} from '../../redux/redux-store';

/*export const Users = (props: UsersContainerType) => {
   function getUsers(){
        if (props.users.length===0){
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then((response)=>{
                    props.setUsers(response.data.items)
                })
        }
    }


    return (
        <div>
            <button onClick={getUsers}>Get users</button>
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
};*/

class Users extends React.Component<UsersContainerType, StateType>{

    getUsers=()=>{
        if (this.props.users.length===0){
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then((response)=>{
                    this.props.setUsers(response.data.items)
                })
        }
    }
    render() {
        return <div>
            <button onClick={this.getUsers}>Get users</button>
            {this.props.users.map(u => <div key={u.id}>
<span>
    <div className={s.usersPhoto}>
        <img src={u.photos.small !==null?u.photos.small:userPhoto}/>

    </div>
    <div>
        {u.followed
            ? <button onClick={()=>{this.props.unFollow(u.id)}}>Follow</button>
            : <button onClick={()=>{this.props.follow(u.id)}}>Unfollow</button>}

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
    }

}
export default Users;