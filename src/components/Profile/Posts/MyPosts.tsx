import React, {useRef} from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';
import {PostType} from '../../redux/state';


type MyPosts={
    posts:PostType[]
    addPost:(newMessage:string)=>void
}
export const MyPosts = (props:MyPosts) => {

    let postsElements=props.posts.map(p=> <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement=React.useRef<HTMLTextAreaElement>(null)

    const addPost=()=>{
            let text=newPostElement.current?.value
            props.addPost(text!)

    }
    return (
        <div className={s.postsBlock}>

            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
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
