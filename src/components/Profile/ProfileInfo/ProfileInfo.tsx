import React from 'react';
import s from './ProfileInfo.module.css'
import {ProfileType} from 'redux/profile-reducer';
import {Preloader} from '../../common/Preloader';
import ProfileStatusWithHooks from '../../../components/Profile/ProfileInfo/ProfileStatusWirhHooks';

type ProfileInfoType={
    profile: ProfileType
    status:string
    updateStatus:(status:string)=>void
}
export const ProfileInfo = ({profile,status,updateStatus}:ProfileInfoType) => {
    if (!profile){
        return <Preloader/>
    }
    return (
        <div>
           {/* картинка на странице profile*/}
            <div>
                <img
                    src="https://bogatyr.club/uploads/posts/2023-02/1675444895_bogatyr-club-p-kirpichnaya-stena-raznotsvetnaya-fon-vkont-1.jpg"/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large}/>
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>

            </div>
        </div>
    );
};

