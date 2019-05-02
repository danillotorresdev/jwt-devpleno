import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Header from './elements/Header'
import Runs from './Runs'
import Users from './Users'

const Home = props => <h1>Home Admin</h1>

const Admin = props => {
    //se nao estiver logado ele vai pra login
    if (!props.auth.isAuth) {
        return <Redirect to='/login' />
    }
    if (props.auth.user.role !== "admin") {
        return <Redirect to="/restrito" />
    }
    return (
        <div>
            <Header />
            <Route exact path={`${props.match.path}/`} component={Home} />
            <Route exact path={`${props.match.path}/users`} component={Users} />
            <Route exact path={`${props.match.path}/runs`} component={Runs} />
        </div>
    )
}
const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}
export default connect(mapStateToProps)(Admin)