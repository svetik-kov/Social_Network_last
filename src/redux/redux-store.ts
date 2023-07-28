import {combineReducers, createStore} from 'redux';
import {sidebarReducer} from './sidebar-reducer';
import {dialogsReducer} from './profile-reducer';
import {profileReducer} from './dialogs-reducer';


let reducers=combineReducers({
    sidebar:sidebarReducer,
    messagesPage:dialogsReducer,
    profilePage: profileReducer
})

let store=createStore(reducers)

export type StateType=ReturnType<typeof reducers>

export default store