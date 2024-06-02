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
    totalItemsCount: number
    currentPage: number

}

export const Users = ({
                          users,
                          currentPage,
                          totalItemsCount,
                          onPageChanged,
                          pageSize,
                          follow,
                          unFollow,
                          followingInProgress
                      }: PropsType) => {


    return (
        <div>
            <Paginator pageSize={pageSize}
                       totalItemsCount={totalItemsCount}
                       currentPage={currentPage}
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

