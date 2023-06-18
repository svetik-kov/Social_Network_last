import React from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';

export const MyPosts = () => {
    return (
        <div className={s.postsBlock}>

            <h3>My posts</h3>
            <div>
                <div>
                    <textarea/>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div>New post</div>
            <div className={s.posts}>
                <Post message={'Hi! How are you?'} likesCount={'3'}/>
                <Post message={' It\'s my first post '} likesCount={'44'}/>
            </div>
        </div>
    );
};
