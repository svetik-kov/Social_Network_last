import React from 'react';
import {StateType} from '../../redux/redux-store';
import {Profile} from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {InitialStateType, ProfileType, setUserProfile} from '../../redux/profile-reducer';
import {RouteComponentProps, withRouter} from 'react-router-dom';

type PathParamsType={
    userId:string
}
type PropsType=RouteComponentProps<PathParamsType> & ProfileContainerType

type MapStateToPropsType = {
    profile: ProfileType

}
type MapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType) => void
}

type ProfileContainerType = MapStateToPropsType & MapDispatchToPropsType

class ProfileContainer extends React.Component<PropsType, StateType> {
    componentDidMount() {

        let userId=this.props.match.params.userId
        if (!userId){
            userId='2'
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/ ${userId}` )
            .then((response) => {
                this.props.setUserProfile(response.data)
                console.log(response.data)
            })
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>

            </div>
        )
    }

}

let mapStateToProps = (state: StateType):MapStateToPropsType=> ({
    profile: state.profilePage.profile

})
let WithUrlDataProfileContainer=withRouter(ProfileContainer)
export default connect(mapStateToProps, {setUserProfile})(WithUrlDataProfileContainer)