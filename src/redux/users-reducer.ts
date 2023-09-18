const FOLLOW = 'FOLLOW'
const UN_FOLLOW = 'UN-FOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT='SET-TOTAL-USERS-COUNT'
const TOGGLE_IS_FETCHING='TOGGLE-IS-FETCHING'

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
 export type InitialStateType=UsersPropsType & {
      isFetching:boolean
 }

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching:false
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
            return {...state, users: [ ...action.users,...state.users]}
        case SET_CURRENT_PAGE:
            return {...state,currentPage:action.currentPage}
        case 'SET-TOTAL-USERS-COUNT':
            return {...state,totalUsersCount:action.count}
        case 'TOGGLE-IS-FETCHING':
            return {...state,isFetching:action.isFetching}
        default:
            return state

    }

};

export type ActionType = FollowAT
    | UnFollowAT
    | SetUsersAT
    |SetCurrentPageAT
    |SetTotalUsersCountAT
|ToggleIsFetchingAT

export type FollowAT = ReturnType<typeof follow>
export type UnFollowAT = ReturnType<typeof unFollow>
export type SetUsersAT = ReturnType<typeof setUsers>
export type SetCurrentPageAT = ReturnType<typeof setCurrentPage>
export type SetTotalUsersCountAT = ReturnType<typeof setTotalUsersCount>
export type ToggleIsFetchingAT = ReturnType<typeof toggleIsFetching>


export const follow = (userId: number) => ({type: FOLLOW, userId} as const)
export const unFollow = (userId: number) => ({type: UN_FOLLOW, userId} as const)
export const setUsers = (users: UserType[]) => ({type: SET_USERS, users} as const)
export const setCurrentPage=(currentPage:number)=>({type:SET_CURRENT_PAGE,currentPage} as const)
export const setTotalUsersCount=(totalUsersCount:number)=>({type:SET_TOTAL_USERS_COUNT,count:totalUsersCount} as const)
export const toggleIsFetching=(isFetching:boolean)=>({type:TOGGLE_IS_FETCHING,isFetching} as const)