import React from 'react';
import {StateType} from '../../redux/redux-store';
import {Profile} from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {InitialStateType, ProfileType, setUserProfile} from '../../redux/profile-reducer';


type MapStateToPropsType = {
    profile: ProfileType

}
type MapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType) => void
}

type ProfileContainerType = MapStateToPropsType & MapDispatchToPropsType

class ProfileContainer extends React.Component<ProfileContainerType, StateType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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
export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)