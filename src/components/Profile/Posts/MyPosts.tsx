import React, {useRef} from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';

import {MyPostType} from './MyPostsContainer';


/*type MyPosts = {
    posts: PostType[]
    newPostText: string
    updateNewPostText: (text: string) => void
    addPost: () => void
}*/

export const MyPosts = (props: MyPostType) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.useRef<HTMLTextAreaElement>(null)

    const onAddPost = () => {
        props.addPost()
        /*if (newPostElement.current !== null) {
            /!* props.addPost()*!/
            /!* const action={type:'ADD-POST'} as const
             props.dispatch(action)*!/
            props.dispatch(addPostAC())
        }*/
    }
    const onPostChange = () => {
        let text = newPostElement.current?.value
        props.updateNewPostText(text!)
        /* if (text) {
             /!*let action={type:'UPDATE-NEW-POST-TEXT',newText:text} as const
             props.dispatch(action)*!/
             props.dispatch(updateNewPostAC(text))
         }*/
    }

    return (
        <div className={s.postsBlock}>

            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.newPostText} ref={newPostElement}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div>New post</div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};
