import React from 'react'
import { connect } from 'react-redux'
import { Link, Route, Redirect } from 'react-router-dom'
import Home from './Home'
import Runs from './Runs'
import Header from './elements/Header'
import MyAccount from './MyAccount'
import ChangePass from './ChangePass'

const Restrito = props => {

    if(props.auth.isSigningIn){
        return <p>Loading...</p>
    }

    //se nao estiver logado ele vai pra login
    if (!props.auth.isAuth) {
        return <Redirect to='/login' />
    }
    return (
        <div>
            <Header />
            <Route exact path={`${props.match.path}/`} component={Home} />
            <Route exact path={`${props.match.path}/runs`} component={Runs} />
            <Route exact path={`${props.match.path}/my-account`} component={MyAccount} />
            <Route exact path={`${props.match.path}/change-pass`} component={ChangePass} />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}
export default connect(mapStateToProps)(Restrito)