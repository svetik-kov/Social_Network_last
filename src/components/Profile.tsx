import React from 'react';
import s from './Profile.module.css'

export const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://avatars.mds.yandex.net/i?id=73b1ef3734c95c8255c0f3669492b58d280f4dc9-8410613-images-thumbs&n=13" />
            </div>
            <div>
                ava+description
                <img src={''}/>
            </div >
                <div>my posts</div>
                <div >New post</div>
            <div className={'posts'}>
                <div className={s.item}>post 1</div>
                <div className={s.item}>post 2</div>
            </div>


        </div>
    );
};
