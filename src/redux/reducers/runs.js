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
export const getRunsRequest = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isLoading: true,
    }
}

export const getRunsSuccess = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isLoading: false,
        data: action.runs
    }
}

export const getRunsFailure = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isLoading: false
    }
}

/** 
 * Reducer
*/
export const createRunRequest = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isSaving: true,
    }
}

export const createRunSuccess = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isSaving: false,
        saved: true
    }
}

export const createRunFailure = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isSaving: false,
        saved: false
    }
}
export const createRunReset = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isSaving: false,
        saved: false
    }
}

export const removeRunRequest = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isSaving: true,
    }
}

export const removeRunSuccess = (state = INITIAL_STATE, action) => {
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

export const removeRunFailure = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isSaving: false,
    }
}



//mapeia as actions para os reducers
export const HANDLERS = {
    [Types.GET_RUNS_REQUEST]: getRunsRequest,
    [Types.GET_RUNS_SUCCESS]: getRunsSuccess,
    [Types.GET_RUNS_FAILURE]: getRunsFailure,

    [Types.CREATE_RUN_REQUEST]: createRunRequest,
    [Types.CREATE_RUN_SUCCESS]: createRunSuccess,
    [Types.CREATE_RUN_FAILURE]: createRunFailure,
    [Types.CREATE_RUN_RESET]: createRunReset,

    [Types.REMOVE_RUN_REQUEST]: removeRunRequest,
    [Types.REMOVE_RUN_SUCCESS]: removeRunSuccess,
    [Types.REMOVE_RUN_FAILURE]: removeRunFailure,

}

export default createReducer(INITIAL_STATE, HANDLERS)
