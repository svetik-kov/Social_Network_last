import {Dispatch} from 'redux';
import {usersAPI} from '../api/api';

const FOLLOW = 'FOLLOW'
const UN_FOLLOW = 'UN-FOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS'

export type UserType = {
    name: string
    id: number
    photos: {
        small: string
        large: string
    },
    status: string
    followed: boolean

}

export type UsersPropsType = {
    users: UserType[],
    pageSize: number
    totalUsersCount: number
    currentPage: number
    //totalCount:number,
    // error:string
}


export type InitialStateType = UsersPropsType & {
    isFetching: boolean,
    //followingInProgress: boolean
    followingInProgress: number[]
}

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}
//export type InitialStateType=typeof initialState
//(state:InitialStateType=initialState,action:ActionType):InitialStateType
export const usersReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)}
        case UN_FOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)}
        case SET_USERS:
            return {...state, users: [...action.users, ...state.users]}
        case SET_CURRENT_PAGE:

            return {...state, currentPage: action.currentPage}
        case 'SET-TOTAL-USERS-COUNT':
            return {...state, totalUsersCount: action.count}
        case 'TOGGLE-IS-FETCHING':
            return {...state, isFetching: action.isFetching}
        case 'TOGGLE-IS-FOLLOWING-PROGRESS':
            /*return {...state,followingInProgress: action.followingInProgress}*/
       return {...state,followingInProgress:action.followingInProgress
               ?[...state.followingInProgress,action.userId]
               : state.followingInProgress.filter(id=>id!==action.userId)}
        default:
            return state

    }

};

export type ActionType = FollowAT
    | UnFollowAT
    | SetUsersAT
    | SetCurrentPageAT
    | SetTotalUsersCountAT
    | ToggleIsFetchingAT
    | ToggleIsFollowingProgressAT

export type FollowAT = ReturnType<typeof followSuccess>
export type UnFollowAT = ReturnType<typeof unFollowSuccess>
export type SetUsersAT = ReturnType<typeof setUsers>
export type SetCurrentPageAT = ReturnType<typeof setCurrentPage>
export type SetTotalUsersCountAT = ReturnType<typeof setTotalUsersCount>
export type ToggleIsFetchingAT = ReturnType<typeof toggleIsFetching>
export type ToggleIsFollowingProgressAT = ReturnType<typeof toggleFollowingProgress>


export const followSuccess = (userId: number) => ({type: FOLLOW, userId} as const)
export const unFollowSuccess = (userId: number) => ({type: UN_FOLLOW, userId} as const)
export const setUsers = (users: UserType[]) => ({type: SET_USERS, users} as const)
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const)
export const setTotalUsersCount = (totalUsersCount: number) => ({
    type: SET_TOTAL_USERS_COUNT,
    count: totalUsersCount
} as const)
export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching} as const)
export const toggleFollowingProgress = (followingInProgress: boolean,userId:number) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    followingInProgress,
    userId
} as const)


export const getUsers=(page: number, currentPage: number)=>(dispatch:Dispatch)=>{
    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(page))

    usersAPI.getUsers(page,currentPage)
        .then((data) => {

            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
        })
}

export const unFollow=(userId: number)=>(dispatch:Dispatch)=>{
    dispatch(toggleFollowingProgress(true,userId))
    usersAPI.unFollowUsers(userId)
        .then((response) => {
            if (response.data.resultCode===0){
                dispatch(unFollowSuccess(userId))
            }
            dispatch(toggleFollowingProgress(false,userId))
        })
}

export const follow=(userId: number)=>(dispatch:Dispatch)=>{
    dispatch(toggleFollowingProgress(true,userId))
    usersAPI.followUsers(userId)
        .then((response) => {
            if (response.data.resultCode===0){
                dispatch(followSuccess(userId))
            }
            dispatch(toggleFollowingProgress(false,userId))
        })
}