import React from 'react';

import { addPostAC, InitialStateType} from '../../../redux/profile-reducer';
import {MyPosts} from './MyPosts';
import {StateType, StoreType} from '../../../redux/redux-store';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';




type MapDispatchPropsType={
    //updateNewPostText:(text:string)=>void
    addPost:(newPostText:string)=>void
}

export type MyPostType=InitialStateType &  MapDispatchPropsType

let mapStateToProps=(state:StateType):InitialStateType=>{
    return{
        posts:state.profilePage.posts,
        newPostText:state.profilePage.newPostText,
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}

let mapDispatchToProps=(dispatch:Dispatch):MapDispatchPropsType=>{
    return {
        addPost:(newPostText:string)=>{
            dispatch(addPostAC(newPostText))
        },
        /*updateNewPostText:(text:string)=>{
            dispatch(updateNewPostAC(text))
        }*/
        }

}

export const MyPostsContainer=connect(mapStateToProps,mapDispatchToProps)(MyPosts)