import React, {useRef} from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';

import {MyPostType} from './MyPostsContainer';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';


/*type MyPosts = {
    posts: PostType[]
    newPostText: string
    updateNewPostText: (text: string) => void
    addPost: () => void
}*/

export const MyPosts = (props: MyPostType) => {

    let postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.useRef<HTMLTextAreaElement>(null)


    const onAddPost = (values:any) => {
        debugger
        props.addPost(values.newPostText)
        console.log(values)
        /*if (newPostElement.current !== null) {
            /!* props.addPost()*!/
            /!* const action={type:'ADD-POST'} as const
             props.dispatch(action)*!/
            props.dispatch(addPostAC())
        }*/
    }
   /* const onPostChange = () => {
        let text = newPostElement.current?.value
        props.updateNewPostText(text!)
    }*/

    return (
        <div className={s.postsBlock}>

            <h3>My posts</h3>
           {/* <form>
                <div>
                    <textarea onChange={onPostChange} value={props.newPostText} ref={newPostElement}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </form>*/}
            <AddNewPostReduxForm onSubmit={onAddPost}/>
            <div>New post</div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

const AddNewPostForm=(props: InjectedFormProps)=>{
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'textarea'} name={'newPostText'}/>
               {/* <textarea onChange={onPostChange} value={props.newPostText} ref={newPostElement}/>*/}
            </div>
            <div>
               {/* <button onClick={onAddPost}>Add post</button>*/}
                <button >Add post</button>
            </div>
        </form>
    )
}

const AddNewPostReduxForm=reduxForm({form:"ProfileAddNewPostForm"})(AddNewPostForm)