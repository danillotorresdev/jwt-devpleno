import { takeLatest, all, put } from 'redux-saga/effects'
import { Types } from '../actionCreators'
import axios from 'axios'
import jwtDecode from 'jwt-decode'
import ActionCreators from '../actionCreators'

import { getRuns, createRun } from './runs'

import {auth, login, destroyAuth} from './auth'


export default function* rootSaga() {
    console.log('root Saga')
    yield all([
        takeLatest(Types.SIGNIN_REQUEST, login),
        takeLatest(Types.AUTH_REQUEST, auth),
        takeLatest(Types.GET_RUNS_REQUEST, getRuns),
        takeLatest(Types.CREATE_RUN_REQUEST, createRun),
        takeLatest(Types.DESTROY_AUTH_REQUEST, destroyAuth),

        put(ActionCreators.authRequest('No token'))
    ])
}