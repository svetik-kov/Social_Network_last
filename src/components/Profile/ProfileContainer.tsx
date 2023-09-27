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
    userId: string
}
type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerType

type MapStateToPropsType = {
    profile: ProfileType,
    status: string
    //isAuth:boolean

}
type MapDispatchToPropsType = {
    //setUserProfile: (profile: ProfileType) => void
    getUserProfile: (userId: string) => void,
    getStatus: (userId: string) => void
    updateStatus: (status: string) => void
}

type ProfileContainerType = MapStateToPropsType & MapDispatchToPropsType

class ProfileContainer extends React.Component<PropsType, StateType> {
    componentDidMount() {

        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '23835'
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
    status: state.profilePage.status
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