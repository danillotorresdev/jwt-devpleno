import jwtDecode from 'jwt-decode'
import ActionCreators from '../actionCreators'
import { put, call } from 'redux-saga/effects'

export const login = ({ api }) => function* (action) {
    let token = ''
    const login = yield call(api.login, {
        email: action.email,
        passwd: action.passwd
    })

    //se veio um token, significa que estamos logados
    if (login.data.token) {
        token = login.data.token
        localStorage.setItem('token', token)

        //descompacta o token
        const user = jwtDecode(token)
        //quem é o usuario?
        localStorage.setItem('user', user)
        yield put(ActionCreators.signinSuccess(user))
    } else {
        yield put(ActionCreators.signinFailure(login.data.message))
    }

}

export const auth = ({ api }) => function* () {
    console.log('check auth')
    const token = localStorage.getItem('token')

    if (token) {
        try {
            const user = yield call(api.getUser, 'me')
            yield put(ActionCreators.authSuccess(user.data))
        }
        catch (err) {
            yield put(ActionCreators.authFailure('Invalid Token'))
        }
    }
    else {
        yield put(ActionCreators.authFailure('No token'))
    }
}

export const updateProfile = ({ api }) => function* (action) {
    const userToSave = {
        ...action.user
    }
    yield call(api.updateUser, userToSave)
    yield put(ActionCreators.updateProfileSuccess(userToSave))
}

export const createProfile = ({ api }) => function* (action) {
    const userToSave = {
        ...action.user
    }
    const user = yield call(api.createUser, userToSave)
    if (user && user.data && user.data.error) {
        yield put(ActionCreators.createProfileFailure(user.data.message))
    } else {
        yield put(ActionCreators.createProfileSuccess(userToSave))
        yield put(ActionCreators.signinRequest(userToSave.email, userToSave.passwd))
    }
}

export function* destroyAuth() {
    localStorage.removeItem('token')
    localStorage.removeItem('user')

    yield put(ActionCreators.destroyAuthSuccess())
}