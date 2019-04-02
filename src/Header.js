import React from 'react'
import { connect } from 'react-redux'
import ActionCreators from './redux/actionCreators'
import logo from './logo.svg'
import {Link} from 'react-router-dom'

const Header = props => {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>welcome to React</h1>
            <p>
                <Link to='/' >Home</Link>
                <Link to='/admin' >Admin</Link>
                <Link to='/restrito' >Restrito</Link>
                <Link to='/login' >Login</Link>
            </p>
        </header>
    )
}
const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}
const mapDispatchToProps = dispatch => {
    return {
        singin: (email, passwd) => ActionCreators.signin_request(email, passwd)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)