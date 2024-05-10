import React from 'react';
import {UserType} from 'redux/users-reducer';
import {Paginator} from 'components/common/paginator/Paginator';
import {User} from 'components/Users/User';


type PropsType = {
    onPageChanged: (pageNumber: number) => void
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    toggleFollowingProgress: (followingInProgress: boolean, userId: number) => void
    followingInProgress: number[]
    users: UserType[],
    pageSize: number
    totalUsersCount: number
    currentPage: number

}

export const Users = ({
                          users,
                          currentPage,
                          totalUsersCount,
                          onPageChanged,
                          pageSize,
                          follow,
                          unFollow,
                          followingInProgress
                      }: PropsType) => {


    return (
        <div>
            <Paginator pageSize={pageSize} totalUsersCount={totalUsersCount} currentPage={currentPage}
                       onPageChanged={onPageChanged}/>
            <div>
                {users.map(u => (<User
                    key={u.id}
                    user={u}
                    follow={follow}
                    unFollow={unFollow}
                    followingInProgress={followingInProgress}/>))}
            </div>

        </div>
    );
};

