import React from 'react';
import {PostType} from '../../../redux/store';
import {ActionProfileReducerType, sendMessageAC, updateNewMessageBodyAC} from '../../../redux/profile-reducer';
import {ActionDialogsReducerType, addPostAC, InitialStateType, updateNewPostAC} from '../../../redux/dialogs-reducer';
import {MyPosts} from './MyPosts';
import {StateType, StoreType} from '../../../redux/redux-store';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';




type MapDispatchPropsType={
    updateNewPostText:(text:string)=>void
    addPost:()=>void
}

export type MyPostType=InitialStateType &  MapDispatchPropsType

let mapStateToProps=(state:StateType):InitialStateType=>{
    return{
        posts:state.profilePage.posts,
        newPostText:state.profilePage.newPostText
    }
}

let mapDispatchToProps=(dispatch:Dispatch):MapDispatchPropsType=>{
    return {
        addPost:()=>{
            dispatch(addPostAC())
        },
        updateNewPostText:(text:string)=>{
            dispatch(updateNewPostAC(text))
        }
        }

}

export const MyPostsContainer=connect(mapStateToProps,mapDispatchToProps)(MyPosts)