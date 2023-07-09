import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import {StateType} from './components/redux/state';

type AppType={
    state:StateType
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
            <Route exact  path={'/dialogs'} render={()=><Dialogs
                /*dialogs={props.appState.messagesPage.dialogs}
                messages={props.appState.messagesPage.messages}*/
            state={props.state.messagesPage}
            /> } />
            <Route path={'/profile'} render={()=><Profile
                //posts={props.appState.profilePage.posts}
                state={props.state.profilePage}
            />} />
        </div>
    </div>
      </BrowserRouter>
  );
}

export default App;
