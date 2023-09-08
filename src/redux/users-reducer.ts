const FOLLOW = 'FOLLOW'
const UN_FOLLOW = 'UN-FOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT='SET-TOTAL-USERS-COUNT'

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


let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1
}
//export type InitialStateType=typeof initialState
//(state:InitialStateType=initialState,action:ActionType):InitialStateType
export const usersReducer = (state: UsersPropsType = initialState, action: ActionType): UsersPropsType => {
    switch (action.type) {
        case FOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)}
        case UN_FOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)}
        case SET_USERS:
            return {...state, users: [ ...action.users,...state.users]}
        case SET_CURRENT_PAGE:
            return {...state,currentPage:action.currentPage}
        case 'SET-TOTAL-USERS-COUNT':
            return {...state,totalUsersCount:action.count}
        default:
            return state

    }

};

export type ActionType = FollowAT | UnFollowAT | SetUsersAT|SetCurrentPageAT|SetTotalUsersCountAT

export type FollowAT = ReturnType<typeof followAC>
export type UnFollowAT = ReturnType<typeof unFollowAC>
export type SetUsersAT = ReturnType<typeof setUsersAC>
export type SetCurrentPageAT = ReturnType<typeof setCurrentPageAC>
export type SetTotalUsersCountAT = ReturnType<typeof setTotalUsersCountAC>


export const followAC = (userId: number) => ({type: FOLLOW, userId} as const)
export const unFollowAC = (userId: number) => ({type: UN_FOLLOW, userId} as const)
export const setUsersAC = (users: UserType[]) => ({type: SET_USERS, users} as const)
export const setCurrentPageAC=(currentPage:number)=>({type:SET_CURRENT_PAGE,currentPage} as const)
export const setTotalUsersCountAC=(totalUsersCount:number)=>({type:SET_TOTAL_USERS_COUNT,count:totalUsersCount} as const)