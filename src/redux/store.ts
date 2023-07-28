import {
    AddPostActionType, profileReducer,

    UpdateNewPostTextActionType
} from './dialogs-reducer';
import {
    dialogsReducer,

    SendMessageActionType,
    UpdateNewMessageBodyActionType
} from './profile-reducer';
import {sidebarReducer} from './sidebar-reducer';


export type StoreType = {
    _state: StateType
    _callSubscribe: () => void,
    getState: () => StateType
    subscribe: (observer: () => void) => void

    dispatch: (action: ActionType) => void
}

export type ActionType = AddPostActionType
    | UpdateNewPostTextActionType
    | UpdateNewMessageBodyActionType
    | SendMessageActionType


let store: StoreType = {
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
            ],
            newMessageBody: ''
        },
        sidebar: {}
    },
    _callSubscribe() {
        console.log('state')
    },

    getState() {
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

    dispatch(action: ActionType) {
        dialogsReducer(this._state.messagesPage,action)
        profileReducer(this._state.profilePage,action)
        sidebarReducer(this._state.sidebar,action)
        this._callSubscribe()
       /* if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscribe()
        }
        else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._callSubscribe()
        }
        else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.messagesPage.newMessageBody = action.body
            this._callSubscribe()
        }
        else if (action.type === SEND_MESSAGE) {

            let body = this._state.messagesPage.newMessageBody
            this._state.messagesPage.newMessageBody = ''
            this._state.messagesPage.messages.push({id: 6, message: body})
            this._callSubscribe()
        }*/
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
        messages: MessageType[],
        newMessageBody: string
    }
    sidebar: {}
}


export default store
