import { takeLatest, all, put } from 'redux-saga/effects'
import { Types } from '../actionCreators'
import axios from 'axios'
import jwtDecode from 'jwt-decode'
import ActionCreators from '../actionCreators'

function* login(action) {
    let token = localStorage.getItem('token')

    const login = yield axios.post('http://localhost:3001/users/login', {
        email: action.email,
        passwd: action.passwd
    })
    //se veio um token, significa que estamos logados
    if (login.data.token) {
        token = login.data.token
        localStorage.setItem("token", token)

        //descompacta o token
        const user = jwtDecode(token)
        //quem é o usuario?
        localStorage.setItem('user', user)
        yield put(ActionCreators.signinSuccess(user))
    } else {
        yield put(ActionCreators.signinFailure(login.data.message))
    }

}

function* auth() {
    console.log('check auth')
    const token = localStorage.getItem('token')

    if (token) {
        try {
            const user = jwtDecode(token)
            yield put(ActionCreators.authSuccess(user))
        }
        catch (err) {
            yield put(ActionCreators.authFailure('Invalid Token'))
        }
    }
    else {
        yield put(ActionCreators.authFailure('No token'))
    }
}


export default function* rootSaga() {
    console.log('root Saga')
    yield all([
        takeLatest(Types.SIGNIN_REQUEST, login),
        takeLatest(Types.AUTH_REQUEST, auth),
        put(ActionCreators.authRequest('No token')),

    ])
}