import React from 'react';


import {InitialStateType, sendMessageAC, updateNewMessageBodyAC} from '../../redux/dialogs-reducer';
import {StateType} from '../../redux/redux-store';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {Redirect} from 'react-router-dom';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';

type MapStateToPropsType={
    messagesPage:InitialStateType
    //isAuth:boolean
}
type MapDispatchToPropsType={
    updateNewMessageBody:(body:string)=>void
    sendMessage:()=>void
}
export type DialogsPropsType=MapStateToPropsType & MapDispatchToPropsType
let mapStateToProps=(state:StateType):MapStateToPropsType=>{
    return{
        messagesPage:state.messagesPage,
        //isAuth:state.auth.isAuth
    }
}
let mapDispatchToProps=(dispatch:Dispatch):MapDispatchToPropsType=>{
    return {
        updateNewMessageBody:(body:string)=>{
            dispatch(updateNewMessageBodyAC(body))
        },
        sendMessage:()=>{
            dispatch(sendMessageAC())
        }
    }
}

// let AuthRedirectComponent=(props:DialogsPropsType)=>{
//     if (!props.isAuth) return < Redirect to={'/login'}/>
//     return <Dialogs {...props} />
// }
let AuthRedirectComponent=withAuthRedirect(Dialogs)
////
export const DialogsContainer=connect(mapStateToProps,mapDispatchToProps)(AuthRedirectComponent);


