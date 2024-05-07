import React, {ComponentType} from 'react';
import {StateType} from '../../redux/redux-store';
import {Profile} from './Profile';
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

        let userId = this.props.match.params.userId

        console.log(this.props.authorizedUserId)
        if (!userId) {
            userId = this.props.authorizedUserId
           /* if (!userId){
                this.props.history.push('/login')
            }*/
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

let mapStateToProps = (state: StateType): MapStateToPropsType => {
    console.log(state)
    return {
        authorizedUserId: state.auth.id,
        isAuth: state.auth.isAuth,
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        //isAuth:state.auth.isAuth

    } as MapStateToPropsType
}


export default compose<ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps, {
        getUserProfile,
        getStatus,
        updateStatus
    }),
    withRouter,
)(ProfileContainer)