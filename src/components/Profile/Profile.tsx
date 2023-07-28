import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from './Posts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ActionType, PostType} from '../../redux/state';



type ProfileType = {
    profilePage: {
        posts: PostType[],
        newPostText: string
    }
   /* addPost: () => void
    updateNewPostText:(newText:string)=>void*/
    dispatch:(action: ActionType)=>void
}
export const Profile = (props: ProfileType) => {
    return (
        <div>
            <ProfileInfo/>
            < MyPosts
                posts={props.profilePage.posts}
                newPostText={props.profilePage.newPostText}
               /* addPost={props.addPost}
                updateNewPostText={props.updateNewPostText}*/
                dispatch={props.dispatch}
            />

        </div>
    );
};
