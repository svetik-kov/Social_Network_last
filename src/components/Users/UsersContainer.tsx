import React from 'react';
import {connect} from 'react-redux';
import {StateType} from '../../redux/redux-store';
import {
    follow,
    getUsers, InitialStateType,
    setCurrentPage,
    toggleFollowingProgress, unFollow,
} from '../../redux/users-reducer';


import {Users} from './Users';
import axios from 'axios';
import {Preloader} from '../common/Preloader';
import { usersAPI} from '../../api/api';

export type UsersContainerType = InitialStateType & MapDispatchToPropsType

type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setCurrentPage: (currentPage: number) => void
    toggleFollowingProgress:(followingInProgress: boolean,userId:number)=>void
    getUsers:(pageSize: number, currentPage: number)=>void


}

class UsersContainer extends React.Component<UsersContainerType, StateType> {

    componentDidMount() {
this.props.getUsers(this.props.pageSize,this.props.currentPage)
      /*  this.props.toggleIsFetching(true)
        usersAPI.getUsers(this.props.pageSize,this.props.currentPage)
            .then((data) => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
            })*/
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(this.props.pageSize,pageNumber)

        /*this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
              usersAPI.getUsers(this.props.pageSize,pageNumber)
            .then((data) => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
            })*/
    }

    render() {


        return <>

            {this.props.isFetching? <Preloader/> : null}
            <Users
                onPageChanged={this.onPageChanged}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                unFollow={this.props.unFollow}
                follow={this.props.follow}
                //toggleFollowingProgress={this.props.toggleFollowingProgress}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

const mapStateToProps = (state: StateType): InitialStateType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress:state.usersPage.followingInProgress
    }
};
/*const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unFollow: (userId: number) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users: UserType[]) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
        toggleIsFetching: (isFetching: boolean) => {
            dispatch(toggleIsFetchingAC(isFetching))
        }
    }
}*/

export default connect(mapStateToProps, {
    follow,
    unFollow,
    setCurrentPage,
    toggleFollowingProgress,
    getUsers})(UsersContainer)
