import React, {ComponentType} from 'react';
import './App.css';
import {Navbar} from './components/Navbar/Navbar';
import {BrowserRouter, Route, withRouter} from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import {connect, Provider} from 'react-redux';
import {compose} from 'redux';
import {initializeApp} from 'redux/app-reducer';
import store, {StateType} from 'redux/redux-store';
import {Preloader} from 'components/common/Preloader';


type AppType = {
    initialized:boolean
    initializeApp: () => void
}
type MapStateToPropsType = {
    initialized: boolean
}

class  App extends React.Component<AppType,StateType> {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return (<Preloader/>)
        }
        return (
                        <div className={'app-wrapper'}>
                    <HeaderContainer/>
                    <Navbar/>
                    <div className={'app-wrapper-content'}>
                        <Route exact path={'/dialogs'} render={() => <DialogsContainer/>}/>
                        <Route path={'/profile/:userId?'} render={() => <ProfileContainer/>}/>
                        <Route path={'/users'} render={() => <UsersContainer/>}/>
                        <Route path={'/login'} render={() => <LoginPage/>}/>
                    </div>
                </div>

        );
    }
}

const mapStateToProps = (state: StateType): MapStateToPropsType => ({
    initialized: state.app.initialized
})

export default compose<ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App)


const  AppContainer=compose<ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App)

export const SamuraiJSApp=()=>{
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer />
        </Provider>

    </BrowserRouter>
}

