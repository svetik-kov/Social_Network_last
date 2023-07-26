export type StoreType = {
    _state: StateType
    _callSubscribe: () => void,
    getState:()=>StateType
    subscribe: (observer: () => void) => void

   /* addPost: () => void
    updateNewPostText: (newText: string) => void*/
   dispatch:(action:ActionType)=>void
}

export type ActionType=AddPostActionType | UpdateNewPostTextActionType

type AddPostActionType={
    type:'ADD-POST'
}
type UpdateNewPostTextActionType={
    type:'UPDATE-NEW-POST-TEXT'
    newText:string
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
    _callSubscribe() {
        console.log('state')
    },

    getState(){
        return this._state
    },
    subscribe(observer: () => void) {
        this._callSubscribe = observer
    },

  /*  addPost() {

        let newPost = {id: 5, message: this._state.profilePage.newPostText, likesCount: 0}
       this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
       this._callSubscribe()
    },
    updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText
       this._callSubscribe()
    },*/

    dispatch(action:ActionType){
       if (action.type==='ADD-POST') {
           let newPost = {
               id: 5,
               message: this._state.profilePage.newPostText,
               likesCount: 0}
           this._state.profilePage.posts.push(newPost)
           this._state.profilePage.newPostText = ''
           this._callSubscribe()
       } else {
           if (action.type==='UPDATE-NEW-POST-TEXT'){
               this._state.profilePage.newPostText = action.newText
               this._callSubscribe()
           }
       }
    }

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
