import React from 'react';
import s from './ProfileInfo.module.css'
import {ProfileType} from '../../../redux/profile-reducer';
import {Preloader} from '../../common/Preloader';

type ProfileInfoType={
    profile: ProfileType
}
export const ProfileInfo = (props:ProfileInfoType) => {
    if (!props.profile){
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img
                    src="https://bogatyr.club/uploads/posts/2023-02/1675444895_bogatyr-club-p-kirpichnaya-stena-raznotsvetnaya-fon-vkont-1.jpg"/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                ava+description

            </div>
        </div>
    );
};

