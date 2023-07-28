import React from 'react';
import {PostType} from '../../../redux/store';
import {ActionProfileReducerType} from '../../../redux/profile-reducer';
import {ActionDialogsReducerType, addPostAC, updateNewPostAC} from '../../../redux/dialogs-reducer';
import {MyPosts} from './MyPosts';
import {StoreType} from '../../../redux/redux-store';
import StoreContext from '../../../StoreContext';


type MyPostsContainerType = {
    //store: StoreType

}

export const MyPostsContainer = (props: MyPostsContainerType) => {

    //let state = props.store.getState()
   /* const addPost = () => {
        props.store.dispatch(addPostAC())

    }
    const onPostChange = (text: string) => {
        //let action={type:'UPDATE-NEW-POST-TEXT',newText:text} as const
        props.store.dispatch(updateNewPostAC(text))
    }*/

    return (
        <StoreContext.Consumer>
            {
            (store)=>{
                let state = store.getState()
                const addPost = () => {
                    store.dispatch(addPostAC())

                }
                const onPostChange = (text: string) => {
                    store.dispatch(updateNewPostAC(text))
                }
                return(
                    <MyPosts
                        updateNewPostText={onPostChange}
                        addPost={addPost}
                        posts={state.profilePage.posts}
                        newPostText={state.profilePage.newPostText}/>
                )
            }
           }
        </StoreContext.Consumer>

    );
};
