export type StoreType = {
    _state: StateType
    getState:()=>StateType
    _callSubscribe: () => void,
    addPost: () => void
    updateNewPostText: (newText: string) => void
    subscribe: (observer: () => void) => void
}


let store:StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi! How are you?', likesCount: 3},
                {id: 2, message: 'It\'s my first post', likesCount: 44},
            ],
            newPostText: ''
        },
        messagesPage: {
            dialogs: [
                {id: 1, name: 'Svetlana'},
                {id: 2, name: 'Natasha'},
                {id: 3, name: 'Irina'},
                {id: 4, name: 'Tanya'},
                {id: 5, name: 'Zlata'},
                {id: 6, name: 'Marina'},
            ],
            messages: [
                {id: 1, message: 'Hello!'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Yo!'},
            ]
        },
        sidebar: {}
    },
    getState(){
        return this._state
    },
     _callSubscribe() {
        console.log('state')
    },
    addPost() {

        let newPost = {id: 5, message: this._state.profilePage.newPostText, likesCount: 0}
       this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
       this._callSubscribe()
    },
    updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText
       this._callSubscribe()
    },
    subscribe(observer: () => void) {
        this._callSubscribe = observer
    },

}


export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}
export type StateType = {
    profilePage: {
        posts: PostType[],
        newPostText: string
    }
    messagesPage: {
        dialogs: DialogType[],
        messages: MessageType[]
    }
    sidebar: {}
}

/*let state={
    profilePage:{
        posts: [
            {id:1, message:'Hi! How are you?',likesCount:3},
            {id:2, message:'It\'s my first post',likesCount:44},
        ],
        newPostText:''
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
    },
    sidebar:{}
}
let  rerenderEntireTree=()=>{
    console.log('state')
}
export const addPost=()=>{

    let newPost={id:5, message:state.profilePage.newPostText,likesCount:0}
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText=''
    rerenderEntireTree()
}
export const updateNewPostText=(newText:string)=>{
    state.profilePage.newPostText=newText
    rerenderEntireTree()
}
export const subscribe=(observer:()=>void)=>{
rerenderEntireTree=observer
}*/

export default store
