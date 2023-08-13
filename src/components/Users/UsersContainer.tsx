import React from 'react';
import {connect} from 'react-redux';
import {Users} from './Users';
import {StateType} from '../../redux/redux-store';
import {followAC, setUsersAC, unFollowAC, UsersPropsType, UserType} from '../../redux/users-reducer';
import {Dispatch} from 'redux';

export type UsersContainerType=UsersPropsType & MapDispatchToPropsType

type MapDispatchToPropsType={
    follow:(userId: number)=>void
    unFollow:(userId: number)=>void
    setUsers:(users:UserType[])=>void

}

const mapStateToProps = (state: StateType): UsersPropsType => {
    return {
        users: state.usersPage.users
    }
};
const mapDispatchToProps = (dispatch:Dispatch):MapDispatchToPropsType=>
{
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unFollow: (userId: number) => {
            dispatch(unFollowAC(userId))
        },
        setUsers:(users:UserType[])=>{
            dispatch(setUsersAC(users))
        }
    }
}
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
