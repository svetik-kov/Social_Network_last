import React from 'react';
import axios from 'axios';
import {getAuthUserData} from '../../redux/auth-reducer';
import {Header} from './Header';
import {StateType} from '../../redux/redux-store';
import {connect} from 'react-redux';
import {usersAPI} from '../../api/api';


type MapDispatchToPropsType = {
    getAuthUserData: () => void
}
type MapStateToPropsType = {
    isAuth: boolean,
    login: string
}
type HeaderContainerType = MapStateToPropsType & MapDispatchToPropsType & { isAuth: boolean }


class HeaderContainer extends React.Component<HeaderContainerType, StateType> {

    componentDidMount() {
       this.props.getAuthUserData()
        /*usersAPI.me()
                  .then((response) => {
                if(response.data.resultCode===0){
                    let {id, email, login}=response.data.data
                    this.props.setAuthUserData (id, email, login)
                }
            })*/
    }

    render() {
        return (
            <Header {...this.props} />
        )
    }

};

let mapStateToProps = (state: StateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.data.login

})

export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer)