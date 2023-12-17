import {AnyAction, applyMiddleware, combineReducers, createStore, Store} from 'redux';
import {sidebarReducer} from './sidebar-reducer';
import {dialogsReducer} from './dialogs-reducer';
import {profileReducer} from './profile-reducer';
import {usersReducer} from './users-reducer';
import {authReducer} from './auth-reducer';
import thunk, {ThunkDispatch} from 'redux-thunk';
import {reducer as formReducer } from 'redux-form'
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

let reducers=combineReducers({
    sidebar:sidebarReducer,
    messagesPage:dialogsReducer,
    profilePage: profileReducer,
    usersPage:usersReducer,
    auth:authReducer,
    form:formReducer
})

 let store:StoreType=createStore(reducers,applyMiddleware(thunk))


export type StoreType=Store<StateType>
export type StateType=ReturnType<typeof reducers>
//export type AppDispatch = ThunkDispatch<StateType, unknown, AppActionsType>

export type AppThunkDispatch = ThunkDispatch<StateType, any, AnyAction>
export const useAppDispatch = () => useDispatch<AppThunkDispatch>();
export const useAppSelector: TypedUseSelectorHook<StateType> = useSelector
// @ts-ignore
window.store = store;
export default store