import React from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './Posts/MyPostsContainer';
import {ProfileType} from 'redux/profile-reducer';


type ProfilePropsType={
    isOwner:boolean
    profile:ProfileType
    status:string
    updateStatus:(status:string)=>void
    savePhoto:(file:File)=>void
    saveProfile:( formData:ProfileType)=>Promise<ProfileType>
}

export const Profile = (props:ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo
                isOwner={props.isOwner}
                profile={props.profile}
                status={props.status}
                updateStatus={props. updateStatus}
                savePhoto={props.savePhoto}
                saveProfile={props.saveProfile}
            />
            < MyPostsContainer/>

        </div>
    );
};
