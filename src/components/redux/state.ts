export type PostType={
    id:number
    message:string
    likesCount:number
}
export type DialogType={
    id:number
    name:string}
export type MessageType={
    id:number
    message:string
}

/*let posts: PostType[]=[
    {id:1, message:'Hi! How are you?',likesCount:3},
    {id:2, message:'It\'s my first post',likesCount:44},
]
let dialogs:DialogType[]=[
    {id:1, name:'Svetlana'},
    {id:2, name:'Natasha'},
    {id:3, name:'Irina'},
    {id:4, name:'Tanya'},
    {id:5, name:'Zlata'},
    {id:6, name:'Marina'},
]
let messages:MessageType[]=[
    {id:1, message:'Hello!'},
    {id:2, message:'How are you?'},
    {id:3, message:'Yo!'},
]*/
/*export type StateType={
    posts: PostType[] ,
    dialogs:DialogType[],
    messages:MessageType[]
}*/

/*let state={
    posts: [
        {id:1, message:'Hi! How are you?',likesCount:3},
        {id:2, message:'It\'s my first post',likesCount:44},
    ],
    dialogs:[
        {id:1, name:'Svetlana'},
        {id:2, name:'Natasha'},
        {id:3, name:'Irina'},
        {id:4, name:'Tanya'},
        {id:5, name:'Zlata'},
        {id:6, name:'Marina'},
    ],
    messages:[
        {id:1, message:'Hello!'},
        {id:2, message:'How are you?'},
        {id:3, message:'Yo!'},
    ]
}*/

export type StateType={
    profilePage:{
        posts: PostType[]
    }
    messagesPage:{
        dialogs:DialogType[],
        messages:MessageType[]}
}
let state={
    profilePage:{
        posts: [
            {id:1, message:'Hi! How are you?',likesCount:3},
            {id:2, message:'It\'s my first post',likesCount:44},
        ]
    },
    messagesPage:{
        dialogs:[
            {id:1, name:'Svetlana'},
            {id:2, name:'Natasha'},
            {id:3, name:'Irina'},
            {id:4, name:'Tanya'},
            {id:5, name:'Zlata'},
            {id:6, name:'Marina'},
        ],
        messages:[
            {id:1, message:'Hello!'},
            {id:2, message:'How are you?'},
            {id:3, message:'Yo!'},
        ]
    }
}
export default state