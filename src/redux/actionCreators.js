import { createActions } from 'reduxsauce'

export const {
    Types,
    Creators
} = createActions({
    signinRequest: ['email', 'passwd'],
    signinSuccess: ['user'],
    signinFailure: ['error'],

    authRequest: null,
    authSuccess: ['user'],
    authFailure: null,

    destroyAuthRequest: null,
    destroyAuthSuccess: null,

    getRunsRequest: ['admin'],
    getRunsSuccess: ['runs'],
    getRunsFailure: null,

    getUsersRequest: null,
    getUsersSuccess: ['users'],
    getUsersFailure: null,

    getUserRequest: ['id'],
    getUserSuccess: ['user'],
    getUserFailure: null,

    removeRunRequest: ['id'],
    removeRunSuccess: ['id'],
    removeRunFailure: ['error'],

    removeUserRequest: ['id'],
    removeUserSuccess: ['id'],
    removeUserFailure: ['error'],

    createRunReset: null,
    createRunRequest: ['run'],
    createRunSuccess: ['run'],
    createRunFailure: ['error'],
    
    updateProfileReset: null,
    updateProfileRequest: ['user'],
    updateProfileSuccess: ['user'],
    updateProfileFailure: ['error'],

    updateUserReset: null,
    updateUserRequest: ['user'],
    updateUserSuccess: ['user'],
    updateUserFailure: ['error'],

    createProfileReset: null,
    createProfileRequest: ['user'],
    createProfileSuccess: ['user'],
    createProfileFailure: ['error']
})

export default Creators