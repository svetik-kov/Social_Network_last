import {addPostAC, deletePostAC, profileReducer} from 'redux/profile-reducer';


let state = {
    posts: [
        {id: 1, message: 'Hi! How are you?', likesCount: 3},
        {id: 2, message: 'It\'s my first post', likesCount: 44},
    ],
    newPostText: '',
    profile: {
        userId: 0,
        lookingForAJob: true,
        lookingForAJobDescription: '',
        fullName: '',
        contacts: {
            github: '',
            vk: '',
            facebook: '',
            instagram: '',
            twitter: '',
            website: '',
            youtube: '',
            mainLink: '',
        },
        photos: {
            small: '',
            large: '',
        }
    },
    status: ''
}
test('length new post should be incremented', () => {


    let action = addPostAC('hello friend')
    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(3)

});

test('message of  new post should be correct', () => {


    let action = addPostAC('hello friend')
    let newState = profileReducer(state, action)

    expect(newState.posts[2].message).toBe('hello friend')
});

test('after deleting length of messages  should be decremented', () => {


    let action = deletePostAC(1)
    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(1)

});