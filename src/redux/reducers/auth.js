import { createReducer } from 'reduxsauce'
import { Types } from '../actionCreators'

export const INITIAL_STATE = {
    isAuthing: false,
    isAuth: false,
    isSigningIn: false,
    isSaving: false,
    saved: false,
    user: {},
    error: false,
    errorMessage: ''

}

/** 
 * Reducer
*/
export const signinRequest = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isSigningIn: true,
        error: false,
        errorMessage: ''
    }
}

/** 
 * Reducer
*/
export const signinSuccess = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isSigningIn: false,
        isAuth: true,
        error: false,
        user: action.user
    }
}

/** 
 * Reducer
*/
export const signinFailure = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isSigningIn: false,
        error: true,
        errorMessage: action.error
    }
}

/** 
 * Reducer
*/
export const authRequest = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isSigningIn: true,
        errorMessage: ''
    }
}

/** 
 * Reducer
*/
export const authSuccess = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isSigningIn: false,
        isAuth: true,
        error: false,
        user: action.user
    }
}

export const destroyAuthSuccess = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isSigningIn: false,
        isAuth: false,
        error: false,
        user: {}
    }
}

/** 
 * Reducer
*/
export const authFailure = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isSigningIn: false,
        isAuth: false
    }
}


/** 
 * Reducer
*/
export const updateProfileRequest = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isSaving: true,
        error: false,
        errorMessage: '',
        saved: false
    }
}

/** 
 * Reducer
*/
export const updateProfileSuccess = (state = INITIAL_STATE, action) => {
    //criando novo usuario e inserindo dados novos
    //toda veez que salvar vai devolver essa informaçao atualizada para o store
    const newUser = {
        ...state.user
    }
    Object.keys(action.user).forEach(key => {
        newUser[key] = action.user[key]
    })
    return {
        ...state,
        isSaving: false,
        user: newUser,
        saved: true
    }
}

/** 
 * Reducer
*/
export const updateProfileFailure = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isSaving: false,
        error: true,
        errorMessage: action.error,
        saved: false
    }
}

export const updateProfileReset = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isSaving: false,
        saved: false
    }
}

export const createProfileRequest = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isSaving: true,
        error: false,
        errorMessage: '',
        saved: false
    }
}

/** 
 * Reducer
*/
export const createProfileSuccess = (state = INITIAL_STATE, action) => {
    //criando novo usuario e inserindo dados novos
    //toda veez que salvar vai devolver essa informaçao atualizada para o store
    const newUser = {
        ...state.user
    }
    Object.keys(action.user).forEach(key => {
        newUser[key] = action.user[key]
    })
    return {
        ...state,
        isSaving: false,
        user: newUser,
        saved: true
    }
}

/** 
 * Reducer
*/
export const createProfileFailure = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isSaving: false,
        error: true,
        errorMessage: action.error,
        saved: false
    }
}
export const createProfileReset = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isSaving: false,
        saved: false
    }
}

//mapeia as actions para os reducers
export const HANDLERS = {
    [Types.SIGNIN_REQUEST]: signinRequest,
    [Types.SIGNIN_SUCCESS]: signinSuccess,
    [Types.SIGNIN_FAILURE]: signinFailure,
    [Types.AUTH_REQUEST]: authRequest,
    [Types.AUTH_SUCCESS]: authSuccess,
    [Types.AUTH_FAILURE]: authFailure,

    [Types.DESTROY_AUTH_SUCCESS]: destroyAuthSuccess,

    [Types.UPDATE_PROFILE_REQUEST]: updateProfileRequest,
    [Types.UPDATE_PROFILE_SUCCESS]: updateProfileSuccess,
    [Types.UPDATE_PROFILE_FAILURE]: updateProfileFailure,
    [Types.UPDATE_PROFILE_RESET]: updateProfileReset,

    [Types.CREATE_PROFILE_REQUEST]: createProfileRequest,
    [Types.CREATE_PROFILE_SUCCESS]: createProfileSuccess,
    [Types.CREATE_PROFILE_FAILURE]: createProfileFailure,
    [Types.CREATE_PROFILE_RESET]: createProfileReset,
}

export default createReducer(INITIAL_STATE, HANDLERS)