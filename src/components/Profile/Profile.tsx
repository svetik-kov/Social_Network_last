import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from './Posts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ActionType, PostType} from '../../redux/store';
import {MyPostsContainer} from './Posts/MyPostsContainer';
import {StoreType} from '../../redux/redux-store';


/*type ProfileType = {
    profilePage: {
        posts: PostType[],
        newPostText: string
    }
    /!* addPost: () => void
     updateNewPostText:(newText:string)=>void*!/
    store:StoreType
    dispatch: (action: ActionType) => void
}*/
export const Profile = (/*props: ProfileType*/) => {
    return (
        <div>
            <ProfileInfo/>
            < MyPostsContainer
                /*store={props.store}*/

            />

        </div>
    );
};
