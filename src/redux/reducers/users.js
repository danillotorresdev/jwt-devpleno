import { createReducer } from 'reduxsauce'
import { Types } from '../actionCreators'

export const INITIAL_STATE = {
    isLoading: false,
    data: [],
    saved: false,
    isSaving: false
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


//mapeia as actions para os reducers
export const HANDLERS = {
    [Types.GET_USERS_REQUEST]: getUsersRequest,
    [Types.GET_USERS_SUCCESS]: getUsersSuccess,
    [Types.GET_USERS_FAILURE]: getUsersFailure,

    [Types.REMOVE_USER_REQUEST]: removeUserRequest,
    [Types.REMOVE_USER_SUCCESS]: removeUserSuccess,
    [Types.REMOVE_USER_FAILURE]: removeUserFailure,

}

export default createReducer(INITIAL_STATE, HANDLERS)