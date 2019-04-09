import React from 'react'
import { connect } from 'react-redux'
import ActionCreators from './redux/actionCreators'
import {Link} from 'react-router-dom'
import {Menu} from 'semantic-ui-react'

const Header = props => {
    return (
        <Menu>
            <Menu.Item>Corridas Online</Menu.Item>
                <Menu.Item as={Link} to='/' >Home</Menu.Item>
                <Menu.Item as={Link} to='/admin' >Admin</Menu.Item>
                <Menu.Item as={Link} to='/restrito' >Restrito</Menu.Item>
                <Menu.Item as={Link} to='/login' >Login</Menu.Item>
            
        </Menu>
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