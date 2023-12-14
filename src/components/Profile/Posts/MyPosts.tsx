import React from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';

import {MyPostType} from './MyPostsContainer';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {maxLengthCreator, required} from '../../../utils/validators/validators'
import {Textarea} from '../../common/FormsControls/FormsControls';


/*type MyPosts = {
    posts: PostType[]
    newPostText: string
    updateNewPostText: (text: string) => void
    addPost: () => void
}*/

export const MyPosts = (props: MyPostType) => {

    let postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.useRef<HTMLTextAreaElement>(null)


    const onAddPost = (values: any) => {
        props.addPost(values.newPostText)
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
const maxLength10 = maxLengthCreator(10)

const AddNewPostForm = (props: InjectedFormProps) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={Textarea}
                    name={'newPostText'}
                    validate={[required, maxLength10]}
                    placeholder={'Post message'}
                />
                {/* <textarea onChange={onPostChange} value={props.newPostText} ref={newPostElement}/>*/}
            </div>
            <div>
                {/* <button onClick={onAddPost}>Add post</button>*/}
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostReduxForm = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm)