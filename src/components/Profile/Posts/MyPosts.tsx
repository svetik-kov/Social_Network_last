import React, {useRef} from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';
import {ActionType, PostType} from '../../../redux/state';


type MyPosts = {
    posts: PostType[]
    newPostText: string
    /*addPost: () => void
    updateNewPostText: (newText: string) => void*/
    dispatch:(action:ActionType)=>void
}
export const MyPosts = (props: MyPosts) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.useRef<HTMLTextAreaElement>(null)

    const addPost = () => {
        if (newPostElement.current !== null) {
           /* props.addPost()*/
            const action={type:'ADD-POST'} as const
            props.dispatch(action)

        }
    }
    const onPostChange = () => {
        let text = newPostElement.current?.value
       /* props.updateNewPostText(text!)*/
        if (text){
        let action={type:'UPDATE-NEW-POST-TEXT',newText:text} as const
        props.dispatch(action)
    }}

    return (
        <div className={s.postsBlock}>

            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.newPostText} ref={newPostElement}/>
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
