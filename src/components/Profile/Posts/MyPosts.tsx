import React, {memo} from 'react';
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
/* shouldComponentUpdate(nextProps: Readonly<MyPostType>, nextState: Readonly<{}>): boolean {
         return nextProps !== this.props || nextState !== this.state
     }*/

export const  MyPosts=memo((props: MyPostType)=> {
    console.log('render')
    let postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

      let newPostElement = React.useRef<HTMLTextAreaElement>(null)
   /* let newPostElement = React.createRef<HTMLTextAreaElement>()*/

    const onAddPost = (values: any) => {
        props.addPost(values.newPostText)
    }


    return (
        <div className={s.postsBlock}>

            <h3>My posts</h3>
            <AddNewPostReduxForm onSubmit={onAddPost}/>
            <div>New post</div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
})

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
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostReduxForm = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm)