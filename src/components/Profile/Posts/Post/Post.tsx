import React from 'react';
import s from './Post.module.css'

type PostPropsType={
    message:string
    likesCount:number
}
export const Post = (props:PostPropsType) => {
    return (
        <div className={s.item}>
            <img
                src={'https://avatars.mds.yandex.net/i?id=e2b5f60e9ae39ff17bf9de1effba6a32352e9205-4825378-images-thumbs&n=13'}/>
            {props.message}
            <div>
                <span> Like: {props.likesCount}</span>

            </div>
        </div>

    );
};
