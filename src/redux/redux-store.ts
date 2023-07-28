import {combineReducers, createStore, Store} from 'redux';
import {sidebarReducer} from './sidebar-reducer';
import {dialogsReducer} from './profile-reducer';
import {profileReducer} from './dialogs-reducer';


let reducers=combineReducers({
    sidebar:sidebarReducer,
    messagesPage:dialogsReducer,
    profilePage: profileReducer
})

 let store:StoreType=createStore(reducers)

export type StoreType=Store<StateType>
export type StateType=ReturnType<typeof reducers>

export default store