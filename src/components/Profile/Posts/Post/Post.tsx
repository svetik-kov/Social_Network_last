import React from 'react';
import s from './Post.module.css'

export const Post = () => {
    return (
        <div className={s.item}>
            <img
                src={'https://avatars.mds.yandex.net/i?id=e2b5f60e9ae39ff17bf9de1effba6a32352e9205-4825378-images-thumbs&n=13'}/>
            post 1
            <div>
                <span>Like</span>
            </div>
        </div>

    );
};
