import React from 'react'
import { connect } from 'react-redux'
import ActionCreators from '../../../redux/actionCreators'
import { Link } from 'react-router-dom'
import { Menu, Dropdown } from 'semantic-ui-react'

const Header = props => {
    return (
        <Menu>
            <Menu.Item>Corridas Online <b>Restrito</b></Menu.Item>
            <Menu.Item as={Link} to='/restrito' >Home</Menu.Item>
            <Menu.Item as={Link} to='/restrito/runs' >Corridas</Menu.Item>
            <Menu.Menu position="right">
                <Dropdown item text={props.auth.user.name}>
                    <Dropdown.Menu>
                        <Dropdown.Item text='Minha conta' />
                        <Dropdown.Item text='Alterar Senha'  />
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