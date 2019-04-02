import { takeLatest, all, put } from 'redux-saga/effects'
import { Types } from '../actionCreators'
import axios from 'axios'
import jwtDecode from 'jwt-decode'
import ActionCreator from '../actionCreators'

function* login(action) {
    let token = localStorage.getItem('token')
    
    const login = yield axios.post('http://localhost:3001/users/login', {
        email: action.email,
        passwd: action.passwd
    })
    //se veio um token, significa que estamos logados
    if(login.data.token){
        token = login.data.token
        localStorage.setItem("token", token)

        //descompacta o token
        const user = jwtDecode(token)
        //quem é o usuario?
        localStorage.setItem('user', user)
        yield put(ActionCreator.signinSuccess(user))
    }else{
        yield put(ActionCreator.signinFailure(login.data.message))
    }

}

export default function* rootSaga() {
    console.log('root Saga')
    all([
        yield takeLatest(Types.SIGNIN_REQUEST, login)
    ])
}