import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import {DialogType, MessageType, PostType} from './index';

type AppType={
    posts:PostType[]
    dialogs:DialogType[]
    messages:MessageType[]
}
function App(props:AppType) {

  return (
      <BrowserRouter>
    <div className={'app-wrapper'}>
       <Header/>
       <Navbar/>
        <div className={'app-wrapper-content'}>
            {/*<Route exact  path={'/dialogs'} component={Dialogs} />
            <Route path={'/profile'} component={Profile} />*/}
            <Route exact  path={'/dialogs'} render={()=><Dialogs dialogs={props.dialogs} messages={props.messages}/> } />
            <Route path={'/profile'} render={()=><Profile posts={props.posts}/>} />
        </div>
    </div>
      </BrowserRouter>
  );
}

export default App;
