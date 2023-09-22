import {applyMiddleware, combineReducers, createStore, Store} from 'redux';
import {sidebarReducer} from './sidebar-reducer';
import {dialogsReducer} from './dialogs-reducer';
import {profileReducer} from './profile-reducer';
import {usersReducer} from './users-reducer';
import {authReducer} from './auth-reducer';
import thunk from 'redux-thunk';


let reducers=combineReducers({
    sidebar:sidebarReducer,
    messagesPage:dialogsReducer,
    profilePage: profileReducer,
    usersPage:usersReducer,
    auth:authReducer
})

 let store:StoreType=createStore(reducers,applyMiddleware(thunk))


export type StoreType=Store<StateType>
export type StateType=ReturnType<typeof reducers>


// @ts-ignore
window.store = store;
export default store