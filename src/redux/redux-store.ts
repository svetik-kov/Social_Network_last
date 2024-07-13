import {AnyAction, applyMiddleware, combineReducers, createStore, Store} from 'redux';
import {sidebarReducer} from './sidebar-reducer';
import {dialogsReducer} from './dialogs-reducer';
import {profileReducer} from './profile-reducer';
import {usersReducer} from './users-reducer';
import {authReducer} from './auth-reducer';
import thunk, {ThunkDispatch} from 'redux-thunk';
import {reducer as formReducer } from 'redux-form'
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {appReducer} from 'redux/app-reducer';
import {composeWithDevTools} from 'redux-devtools-extension';

let reducers=combineReducers({
    sidebar:sidebarReducer,
    messagesPage:dialogsReducer,
    profilePage: profileReducer,
    usersPage:usersReducer,
    auth:authReducer,
    form:formReducer,
    app:appReducer
})

 let store:StoreType=createStore(reducers,
     composeWithDevTools(applyMiddleware(thunk)))



export type StoreType=Store<StateType>
export type StateType=ReturnType<typeof reducers>


//export type AppDispatch = ThunkDispatch<StateType, unknown, AppActionsType>

export type AppThunkDispatch = ThunkDispatch<StateType, unknown, AnyAction>
export const useAppDispatch = () => useDispatch<AppThunkDispatch>();
//type AppDispatchType=ThunkDispatch<AppRootStateType, unknown, AnyAction>
export const useAppSelector: TypedUseSelectorHook<StateType> = useSelector
// @ts-ignore
window.store = store;
export default store