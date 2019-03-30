import {createReducer} from 'reduxsauce'
import {Types} from '../actionCreators'

export const INITIAL_STATE ={
    isAuthing: false,
    isAuth : false,
    isSigningin: false,
    user: {},
    error: false,
    errorMessage: ''
}

export const signinRequest = (state = INITIAL_STATE, action) => {
    //Copia todo mundo fo state e faz um spreadOparator. 
    return {
        ...state,
        isSigningIn: true,
        error: false,
        errorMessage: ''
    }

}

export const signInSuccess = (state = INITIAL_STATE, action) => {
    //Copia todo mundo fo state e faz um spreadOparator. 
    return {
        ...state,
        isSigningIn: false,
        isAuth: true,
        user: action.user
    }

}

export const sigInFailure = (state = INITIAL_STATE, action) => {
    //Copia todo mundo fo state e faz um spreadOparator. 
    return {
        ...state,
        isSigningin: false,
        error: true,
        errorMessage: action.error
    }

}
//mapeia as actions para os reducers
export const HANDLERS = {
    [Types.SIGNIN_REQUEST]: signinRequest,
    [Types.SINGIN_SUCCESS]: signInSuccess,
    [Types.SINGIN_FAILURE]: sigInFailure
}

export default createReducer(INITIAL_STATE, HANDLERS)