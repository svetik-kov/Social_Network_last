import React, {ComponentType} from 'react';
import {StateType} from '../../redux/redux-store';
import {Profile} from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {getStatus, getUserProfile, ProfileType, updateStatus} from '../../redux/profile-reducer';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';

type PathParamsType = {
    userId: any
}
type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerType
//type PropsType = <PathParamsType> & ProfileContainerType

type MapStateToPropsType = {
    profile: ProfileType,
    status: string
    authorizedUserId:number
    isAuth:boolean

}
type MapDispatchToPropsType = {
    //setUserProfile: (profile: ProfileType) => void
    getUserProfile: (userId: number) => void,
    getStatus: (userId: number) => void
    updateStatus: (status: string) => void
}

type ProfileContainerType = MapStateToPropsType & MapDispatchToPropsType

class ProfileContainer extends React.Component<PropsType, StateType> {
    componentDidMount() {
debugger
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId
        }
        /*axios.get(`https://social-network.samuraijs.com/api/1.0/profile/ ${userId}` )*/
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
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
                <Profile {...this.props}
                         profile={this.props.profile}
                         status={this.props.status}
                         updateStatus={this.props.updateStatus}/>

            </div>
        )
    }
}

/*let AuthRedirectComponent=(props:PropsType)=>{
    if (!props.isAuth) return < Redirect to={'/login'}/>
    return <ProfileContainer {...props} />
}*/
let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

let mapStateToProps = (state: StateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId:state.auth.data.id,
    isAuth:state.auth.isAuth
    //isAuth:state.auth.isAuth

})


export default compose<ComponentType>(
    connect(mapStateToProps, {
        getUserProfile,
        getStatus,
        updateStatus
    }),
    withRouter,
)(ProfileContainer)