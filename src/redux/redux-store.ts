import {combineReducers, createStore, Store} from 'redux';
import {sidebarReducer} from './sidebar-reducer';
import {dialogsReducer} from './dialogs-reducer';
import {profileReducer} from './profile-reducer';
import {usersReducer} from './users-reducer';


let reducers=combineReducers({
    sidebar:sidebarReducer,
    messagesPage:dialogsReducer,
    profilePage: profileReducer,
    usersPage:usersReducer
})

 let store:StoreType=createStore(reducers)


export type StoreType=Store<StateType>
export type StateType=ReturnType<typeof reducers>


// @ts-ignore
window.store = store;
export default store