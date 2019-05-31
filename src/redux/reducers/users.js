import { createReducer } from 'reduxsauce'
import { Types } from '../actionCreators'

export const INITIAL_STATE = {
    isLoading: false,
    data: [],
    saved: false,
    isSaving: false,
    user: {}
}

/** 
 * Reducer
*/
export const getUsersRequest = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isLoading: true,
    }
}

export const getUsersSuccess = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isLoading: false,
        data: action.users
    }
}

export const getUsersFailure = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isLoading: false
    }
}

export const getUserRequest = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isLoading: true,
    }
}

export const getUserSuccess = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isLoading: false,
        user: action.user
    }
}

export const getUserFailure = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isLoading: false
    }
}


export const removeUserRequest = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isSaving: true,
    }
}

export const removeUserSuccess = (state = INITIAL_STATE, action) => {
    const runs = [...state.data]
    const id = action.id
    const indexToDelete = runs.findIndex( run => run.id === id)
    runs.splice(indexToDelete, 1)
    return {
        ...state,
        isSaving: false,
        data: runs
    }
}

export const removeUserFailure = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isSaving: false,
    }
}

export const updateUserRequest = (state = INITIAL_STATE, action) => {
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
export const updateUserSuccess = (state = INITIAL_STATE, action) => {
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
export const updateUserFailure = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isSaving: false,
        error: true,
        errorMessage: action.error,
        saved: false
    }
}

export const updateUserReset = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isSaving: false,
        saved: false
    }
}


//mapeia as actions para os reducers
export const HANDLERS = {
    [Types.GET_USERS_REQUEST]: getUsersRequest,
    [Types.GET_USERS_SUCCESS]: getUsersSuccess,
    [Types.GET_USERS_FAILURE]: getUsersFailure,

    [Types.GET_USER_REQUEST]: getUserRequest,
    [Types.GET_USER_SUCCESS]: getUserSuccess,
    [Types.GET_USER_FAILURE]: getUserFailure,

    [Types.REMOVE_USER_REQUEST]: removeUserRequest,
    [Types.REMOVE_USER_SUCCESS]: removeUserSuccess,
    [Types.REMOVE_USER_FAILURE]: removeUserFailure,

    [Types.UPDATE_USER_REQUEST]: updateUserRequest,
    [Types.UPDATE_USER_SUCCESS]: updateUserSuccess,
    [Types.UPDATE_USER_FAILURE]: updateUserFailure,
    [Types.UPDATE_USER_RESET]: updateUserReset,

}

export default createReducer(INITIAL_STATE, HANDLERS)