import React, {ChangeEvent} from 'react';
import s from './ProfileInfo.module.css'
import {ProfileType} from 'redux/profile-reducer';
import {Preloader} from '../../common/Preloader';
import ProfileStatusWithHooks from '../../../components/Profile/ProfileInfo/ProfileStatusWirhHooks';
import userPhoto from 'assetc/images/avatar.png';

type ProfileInfoType = {
    isOwner: boolean
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    savePhoto:(file:File)=>void
}
export const ProfileInfo = ({profile, status, updateStatus, isOwner,savePhoto}: ProfileInfoType) => {
    if (!profile) {
        return <Preloader/>
    }
    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length){
            savePhoto(e.target.files[0])
        }

    }
    return (
        <div>
            {/* картинка на странице profile*/}
            <div>
                <img
                    src="https://bogatyr.club/uploads/posts/2023-02/1675444895_bogatyr-club-p-kirpichnaya-stena-raznotsvetnaya-fon-vkont-1.jpg"/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large || userPhoto} className={s.mainPhoto}/>
                {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>

            </div>
        </div>
    );
};

