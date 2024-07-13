import React, {ChangeEvent, useState} from 'react';
import s from './ProfileInfo.module.css'
import {ProfileType} from 'redux/profile-reducer';
import {Preloader} from '../../common/Preloader';
import ProfileStatusWithHooks from '../../../components/Profile/ProfileInfo/ProfileStatusWirhHooks';
import userPhoto from 'assetc/images/avatar.png';
import ProfileDataForm from 'components/Profile/ProfileInfo/ProfileDataForm';


type ProfileInfoType = {
    isOwner: boolean
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    savePhoto: (file: File) => void
    saveProfile:(formData:ProfileType)=>Promise<ProfileType>
}
export const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto,saveProfile}: ProfileInfoType) => {

    const [editMode, setEditMode] = useState(false)
    if (!profile) {
        return <Preloader/>
    }
    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            savePhoto(e.target.files[0])
        }
    }

    const onSubmit= (formData:any)=>{
       saveProfile(formData)
           .then (()=>{
           setEditMode(false)
       })

        // setEditMode(false)
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
                {editMode
                    ? <ProfileDataForm initialValues={profile} onSubmit={onSubmit} profile={profile} />

                    : <ProfileData
                        goToEditMode={() => setEditMode(true)}
                        profile={profile}
                        isOwner={isOwner}/>}


                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>

            </div>
        </div>
    );
};

type ProfileData = {
    profile: ProfileType,
    isOwner: boolean,
    goToEditMode: () => void
}
const ProfileData = ({profile, isOwner, goToEditMode}: ProfileData,) => {
    return (
        <div>
            {isOwner && <div>
                <button onClick={goToEditMode}>edit</button>
            </div>}
            <div><b>Full name:</b>{profile.fullName}</div>
            <div><b>Looking for a job:</b>{profile.lookingForAJob ? 'yes' : 'no'}</div>
            {profile.lookingForAJob &&
                <div><b>My professional skills:</b>{profile.lookingForAJobDescription}</div>
            }
            <div><b>About me:</b>{profile.aboutMe}</div>
            <div><b>Contacts:</b>{Object.keys(profile.contacts).map((key: string) => {
                // @ts-ignore
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>

            })}</div>
        </div>
    )
}

type ContactType = {
    contactTitle: string,
    contactValue: string
}
const Contact = ({contactTitle, contactValue}: ContactType) => {
    return (
        <div className={s.contact}><b>{contactTitle}</b>:{contactValue}</div>)
}