import React from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';
import {PostType} from '../../../index';

type MyPosts={
    posts:PostType[]
}
export const MyPosts = (props:MyPosts) => {
    /*let posts=[
        {id:1, message:'Hi! How are you?',likesCount:3},
        {id:2, message:'It\'s my first post',likesCount:44},
    ]*/
    let postsElements=props.posts.map(p=> <Post message={p.message} likesCount={p.likesCount}/>)
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
                {postsElements}
                {/*<Post message={postData[0].message} likesCount={postData[0].likesCount}/>
                <Post message={postData[1].message} likesCount={postData[1].likesCount}/>*/}

            </div>
        </div>
    );
};
