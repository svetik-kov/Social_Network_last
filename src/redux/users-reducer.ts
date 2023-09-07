const FOLLOW = 'FOLLOW'
const UN_FOLLOW = 'UN-FOLLOW'
const SET_USERS = 'SET-USERS'

export type UserType = {
    /* id: number,
     photoUser:string,
     followed:boolean,
     fullName: string,
     status:string,
     location:{city:string,country:string}*/
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
    //totalCount:number,
    // error:string
}

//{
//   "items": [
//   {
//     name: "Shubert",
//     id: 1,
//     photos: {
//       small: null,
//       large: null
//     },
//     status: null,
//     followed: false
//   }],
//   "totalCount": 30,
//   "error": null

let initialState = {
    users: []
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
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state

    }

};

export type ActionType = FollowAT | UnFollowAT | SetUsersAT

export type FollowAT = ReturnType<typeof followAC>
export type UnFollowAT = ReturnType<typeof unFollowAC>
export type SetUsersAT = ReturnType<typeof setUsersAC>


export const followAC = (userId: number) => ({type: FOLLOW, userId} as const)
export const unFollowAC = (userId: number) => ({type: UN_FOLLOW, userId} as const)
export const setUsersAC = (users: UserType[]) => ({type: SET_USERS, users} as const)