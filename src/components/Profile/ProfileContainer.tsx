import React, {ComponentType} from 'react';
import {StateType} from '../../redux/redux-store';
import {Profile} from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {getUserProfile, InitialStateType, ProfileType} from '../../redux/profile-reducer';
import {Redirect, RouteComponentProps, withRouter} from 'react-router-dom';
import { usersAPI} from '../../api/api';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';

type PathParamsType={
    userId:string
}
type PropsType=RouteComponentProps<PathParamsType> & ProfileContainerType

type MapStateToPropsType = {
    profile: ProfileType,
    //isAuth:boolean

}
type MapDispatchToPropsType = {
    //setUserProfile: (profile: ProfileType) => void
    getUserProfile:(userId:string)=>void
}

type ProfileContainerType = MapStateToPropsType & MapDispatchToPropsType

class ProfileContainer extends React.Component<PropsType, StateType> {
    componentDidMount() {

        let userId=this.props.match.params.userId
        if (!userId){
            userId='2'
        }
        /*axios.get(`https://social-network.samuraijs.com/api/1.0/profile/ ${userId}` )*/
        this.props.getUserProfile(userId)
      /*  usersAPI.getProfile(userId)
            .then((response) => {
                this.props.setUserProfile(response.data)
                console.log(response.data)
            })*/
    }

    render() {
      /*  if (!this.props.isAuth) return < Redirect to={'/login'}/>*/
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>

            </div>
        )
    }
}

/*let AuthRedirectComponent=(props:PropsType)=>{
    if (!props.isAuth) return < Redirect to={'/login'}/>
    return <ProfileContainer {...props} />
}*/
let AuthRedirectComponent=withAuthRedirect(ProfileContainer)

let mapStateToProps = (state: StateType):MapStateToPropsType=> ({
    profile: state.profilePage.profile,
    //isAuth:state.auth.isAuth

})


export default compose<ComponentType>(
    connect(mapStateToProps, {getUserProfile}),
    withRouter,
)(ProfileContainer)