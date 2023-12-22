
import React from 'react';
import {StateType} from '.././redux/redux-store';
import {createSelector} from 'reselect';
import {UserType} from '../redux/users-reducer';

export const getUserSelector=(state:StateType)=>{
    return state.usersPage.users
}

/*export const getUserSelector=(state:StateType)=>{
    return getUser(state).filter(u=>true)
}*/
export const getUser=createSelector(getUserSelector,(users:UserType[])=>{
    return users.filter(u=>true)
})

export const getPageSize=(state:StateType)=>{
    return state.usersPage.pageSize
}

export const getTotalUsersCount=(state:StateType)=>{
    return state.usersPage.totalUsersCount
}

export const getCurrentPage=(state:StateType)=>{
    return state.usersPage.currentPage
}
export const getIsFetching=(state:StateType)=>{
    return state.usersPage.isFetching
}
export const getFollowingInProgress=(state:StateType)=>{
    return state.usersPage.followingInProgress
}