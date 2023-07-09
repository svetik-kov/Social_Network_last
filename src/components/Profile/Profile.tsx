import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from './Posts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {PostType} from '../redux/state';


type ProfileType={
    //posts:PostType[]
    state:{
        posts: PostType[]
    }
}
export const Profile = (props:ProfileType) => {
    return (
        <div >
         <ProfileInfo/>
            < MyPosts posts={props.state.posts}/>

        </div>
    );
};
