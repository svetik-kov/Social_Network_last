import React, {ReactNode} from 'react';
import {createField, Input, Textarea} from 'components/common/FormsControls/FormsControls';
import {InjectedFormProps, reduxForm} from 'redux-form';
import {ProfileType} from 'redux/profile-reducer';
import s from './ProfileInfo.module.css'
import styles from 'components/common/FormsControls/FormsControls.module.css';


const ProfileDataForm = ({handleSubmit,error,profile}:any ) => {

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <button>save</button>
            </div>
            {error && <div className={styles.formSummaryError}>
                {error}
            </div>}
            <div><b>Full name:</b>
                {createField('Full name', 'fullName', [], Input, '')}
            </div>
            <div><b>Looking for a job:</b>
                {createField('', 'lookingForAJob', [], Input, {type: 'checkbox'})}
            </div>

            <div><b>My professional skills:</b>
                {createField('My professional skills', 'lookingForAJobDescription', [], Textarea, '')}
            </div>
            <div><b>About me:</b>
                {createField('About me', 'aboutMe', [], Textarea, '')}
            </div>
             <div>
                 <b>Contacts:</b>
                 {Object.keys(profile.contacts).map((key: string) => {
                // @ts-ignore
               /* return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>*/
                     return <div key={key} className={s.contact}>
                         <b>{key}: {createField(key, 'contacts.'+key, [], Input, '')}</b>
                     </div>
            })}</div>
        </form>
    )
}

const ProfileDataFormReduxForm = reduxForm<Partial<ProfileType>>({form: 'edit-profile'})(ProfileDataForm)
export default ProfileDataFormReduxForm