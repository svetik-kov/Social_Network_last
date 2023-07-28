import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import {ActionType} from './redux/store';
import {StateType, StoreType} from './redux/redux-store';
import {DialogsContainer} from './components/Dialogs/DialogsContainer';

/*type AppType = {
    state: StateType
    dispatch: (action: ActionType) => void
    store: StoreType
}*/

function App(/*props: AppType*/) {

    return (
        <BrowserRouter>

            <div className={'app-wrapper'}>
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Route exact path={'/dialogs'} render={() => <DialogsContainer
                        // store={props.store}
                    />}/>
                    <Route path={'/profile'} render={() => <Profile
                        /*profilePage={props.state.profilePage}
                        store={props.store}
                        dispatch={props.dispatch}*/
                    />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
