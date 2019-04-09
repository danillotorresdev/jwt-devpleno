import React from 'react'
import { connect } from 'react-redux'
import { Link, Route, Redirect } from 'react-router-dom'
import Home from './Home'
import Runs from './Runs'
import Header from './elements/Header'

const Restrito = props => {
    //se nao estiver logado ele vai pra login
    if (!props.auth.isAuth) {
        return <Redirect to='/login' />
    }
    return (
        <div>
            <Header />
            <Route exact path={`${props.match.path}/`} component={Home} />
            <Route exact path={`${props.match.path}/runs`} component={Runs} />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}
export default connect(mapStateToProps)(Restrito)