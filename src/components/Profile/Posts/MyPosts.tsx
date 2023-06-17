import React from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';

export const MyPosts = () => {
    return (
        <div >

            <div>my posts</div>
            <div>
                <textarea/>
                <button>Add post</button>
            </div>
            <div>New post</div>
            <div className={'posts'}>
             <Post message={'Hi! How are you?'} likesCount={'3'}/>
             <Post message={" It's my first post "} likesCount={'44'}/>
            </div>
        </div>
    );
};