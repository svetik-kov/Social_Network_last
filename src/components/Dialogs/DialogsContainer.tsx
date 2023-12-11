import React, {ComponentType} from 'react';
import {InitialStateType, sendMessageAC} from '../../redux/dialogs-reducer';
import {StateType} from '../../redux/redux-store';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {compose, Dispatch} from 'redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';

type MapStateToPropsType = {
    messagesPage: InitialStateType
    //isAuth:boolean
}
type MapDispatchToPropsType = {
    //updateNewMessageBody: (body: string) => void
    sendMessage: (newMessageBody: string) => void
}
export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType
let mapStateToProps = (state: StateType): MapStateToPropsType => {
    return {
        messagesPage: state.messagesPage,
        //isAuth:state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        sendMessage: (newMessageBody: string) => {
            dispatch(sendMessageAC(newMessageBody))
        }
    }
}
/*let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageBodyAC(body))
        },
        sendMessage: (newMessageBody:string) => {
            dispatch(sendMessageAC(newMessageBody))
        }
    }
}*/

/*compose(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect,
)(Dialogs)*/

/*let AuthRedirectComponent=withAuthRedirect(Dialogs)
////
export const DialogsContainer=connect(mapStateToProps,mapDispatchToProps)(AuthRedirectComponent);*/

export default compose<ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,
)(Dialogs)

