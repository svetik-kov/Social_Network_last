
const FOLLOW = 'FOLLOW'
const UN_FOLLOW = 'UN-FOLLOW'
const SET_USERS = 'SET-USERS'

export type UserType={id: number,photoUser:string, followed:boolean, fullName: string, status:string, location:{city:string,country:string}}
export type UsersPropsType={
    users:UserType[]
}

let initialState={
    users: [

        {id: 1,photoUser:'https://flomaster.club/uploads/posts/2021-12/1638885351_4-flomaster-club-p-risunki-parnei-v-stile-krasivie-risunki-5.jpg', followed:false, fullName: 'Dmitry', status:'I am a boss', location:{city:'Minsk',country:'Belarus'}},
        {id: 2,photoUser:'https://99px.ru/sstorage/56/2012/02/image_561402122132546240443.jpg', followed:true, fullName: 'Masha', status:'I am a boss too', location:{city:'Moscow',country:'Russia'}},
         {id: 3,photoUser:'https://avatars.mds.yandex.net/i?id=da87b9f958b1cdb0bf6d514ea48ac92c8f1a141c-8257511-images-thumbs&n=13', followed:false, fullName: 'Sasha', status:'I am a boss too', location:{city:'Kiev',country:'Ukraine'}},

    ]
}
export type InitialStateType=typeof initialState
                            //(state:InitialStateType=initialState,action:ActionType):InitialStateType
export const usersReducer = (state:InitialStateType=initialState,action:ActionType):InitialStateType => {
    switch (action.type) {
        case FOLLOW:
       return  {...state,users:state.users.map(u=>u.id===action.userId?{...u,followed:true}:u)}
        case UN_FOLLOW:
            return  {...state,users:state.users.map(u=>u.id===action.userId?{...u,followed:false}:u)}
        case SET_USERS:
            return {...state,users: [...state.users,...action.users]}
        default:
            return state

    }

};

export type ActionType =  FollowAT | UnFollowAT |SetUsersAT

export type FollowAT = ReturnType<typeof followAC>
export type UnFollowAT = ReturnType<typeof unFollowAC>
export type SetUsersAT = ReturnType<typeof setUsersAC>


export const followAC = (userId:number) =>  ({type: FOLLOW,userId} as const)
export const unFollowAC = (userId:number) =>  ({type: UN_FOLLOW,userId } as const)
export const setUsersAC = (users:UserType[]) =>  ({type: SET_USERS,users } as const)