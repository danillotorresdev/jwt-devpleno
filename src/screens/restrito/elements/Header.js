import React from 'react'
import { connect } from 'react-redux'
import ActionCreators from '../../../redux/actionCreators'
import { Link } from 'react-router-dom'
import { Menu, Dropdown, Image } from 'semantic-ui-react'

const Header = props => {
    return (
        <Menu>
            <Menu.Item as={Link} to='/'> <Image src='/logo.png' size='small' /></Menu.Item>
            <Menu.Item as={Link} to='/restrito' >Home</Menu.Item>
            <Menu.Item as={Link} to='/restrito/runs' >Corridas</Menu.Item>
            <Menu.Menu position="right">
                <Dropdown item text={props.auth.user.name}>
                    <Dropdown.Menu>
    {props.auth.user.role === 'admin' && <Dropdown.Item as={Link} to='/admin/home' text='Modo: admin' /> }
                        <Dropdown.Item as={Link} to='/restrito/my-account' text='Minha conta' />
                        <Dropdown.Item as={Link} to='/restrito/change-pass' text='Alterar Senha' />
                        <Dropdown.Item onClick={props.logout} text='Sair' />
                    </Dropdown.Menu>
                </Dropdown>

            </Menu.Menu>

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
        singin: (email, passwd) => ActionCreators.signin_request(email, passwd),
        logout: () => dispatch(ActionCreators.destroyAuthRequest())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)