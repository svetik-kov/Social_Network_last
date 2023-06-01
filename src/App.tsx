import React from 'react';
import './App.css';

function App() {
  return (
    <div className={'app-wrapper'}>
        <header className={'header'}>
            <img src={'https://w7.pngwing.com/pngs/526/232/png-transparent-earth-airplane-earth-3d-computer-graphics-globe-computer-wallpaper.png'}/>
        </header >
        <nav className={'nav'}>
            <div><a>Profile</a></div>
            <div><a>Messages</a></div>
            <div><a>News</a></div>
            <div><a>Music</a></div>
            <div><a>Settings</a></div>

        </nav>
        <div className={'content'}>
            <div>
                <img src="https://avatars.mds.yandex.net/i?id=73b1ef3734c95c8255c0f3669492b58d280f4dc9-8410613-images-thumbs&n=13" />
            </div>
            <div>
                ava+description
                <img src={''}/>
            </div>
            <div>my posts</div>
            <div>New post</div>
            <div>post 1</div>
            <div>post 2</div>

        </div>

    </div>
  );
}

export default App;
