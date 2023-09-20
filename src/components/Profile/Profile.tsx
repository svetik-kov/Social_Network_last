import React from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './Posts/MyPostsContainer';
import {ProfileType} from '../../redux/profile-reducer';


type ProfilePropsType={
    profile:ProfileType
}

export const Profile = (props:ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            < MyPostsContainer/>

        </div>
    );
};
