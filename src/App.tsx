import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import {ActionType, StateType} from './redux/state';

type AppType={
    state:StateType
    /*addPost:()=>void
    updateNewPostText:(newText:string)=>void*/
    dispatch:(action:ActionType)=>void
}
function App(props:AppType) {

  return (
      <BrowserRouter>
    <div className={'app-wrapper'}>
       <Header/>
       <Navbar/>
        <div className={'app-wrapper-content'}>
            <Route exact  path={'/dialogs'} render={()=><Dialogs
            state={props.state.messagesPage}
            /> } />
            <Route path={'/profile'} render={()=><Profile
                profilePage={props.state.profilePage}
                dispatch={props.dispatch}
                /*addPost={props.addPost}
                updateNewPostText={ props.updateNewPostText}*/
            />} />
        </div>
    </div>
      </BrowserRouter>
  );
}

export default App;
