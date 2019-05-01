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

    removeRunRequest: ['id'],
    removeRunSuccess: ['id'],
    removeRunFailure: ['error'],

    createRunReset: null,
    createRunRequest: ['run'],
    createRunSuccess: ['run'],
    createRunFailure: ['error'],
    
    updateProfileReset: null,
    updateProfileRequest: ['user'],
    updateProfileSuccess: ['user'],
    updateProfileFailure: ['error'],

    createProfileReset: null,
    createProfileRequest: ['user'],
    createProfileSuccess: ['user'],
    createProfileFailure: ['error']
})

export default Creators