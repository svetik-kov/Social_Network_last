import React from 'react';


import {InitialStateType, sendMessageAC, updateNewMessageBodyAC} from '../../redux/dialogs-reducer';
import {StateType} from '../../redux/redux-store';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';

type MapStateToPropsType={
    messagesPage:InitialStateType
}
type MapDispatchToPropsType={
    updateNewMessageBody:(body:string)=>void
    sendMessage:()=>void
}
export type DialogsPropsType=MapStateToPropsType & MapDispatchToPropsType
let mapStateToProps=(state:StateType):MapStateToPropsType=>{
    return{
        messagesPage:state.messagesPage
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
////
export const DialogsContainer=connect(mapStateToProps,mapDispatchToProps)(Dialogs);


