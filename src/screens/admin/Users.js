import React, { Component } from 'react'
import ActionCreators from '../../redux/actionCreators'
import { connect } from 'react-redux'
import { Table, Button, Segment, Label } from 'semantic-ui-react'

import Duration from '../elements/Duration'
import Distance from '../elements/Distance'
import { Link } from 'react-router-dom'

import DateStr from '../elements/DateStr'

class Users extends Component {

    componentDidMount() {
        this.props.load()
        console.log(this.props.auth)

    }
    renderUser = (user) => {
        return (
            <Table.Row key={user.id}>
                <Table.Cell>
                    {user.name} <br />
                </Table.Cell>
                <Table.Cell>
                    {user.email}
                </Table.Cell>
                <Table.Cell>
                    {user.role}
                </Table.Cell>
                <Table.Cell>
                    <Button basic color='blue' as={Link} to={`/admin/users/${user.id}/edit`} >Editar</Button>
                    <Button basic color='red' onClick={() => this.props.remove(user.id)}>Remover</Button>
                </Table.Cell>

            </Table.Row>
        )
    }
    render() {
        return (
            <div>
                <h1>Usuários</h1>
                <Button as={Link} to='/restrito/create-run'>Nova Corrida</Button>
                {this.props.users.isLoading && <p>Carregando ...</p>}
                {!this.props.users.isLoading && this.props.users.data.length === 0 && <Segment color='blue'>Nenhum usuário cadastrado no momento</Segment>}
                {!this.props.users.isLoading && this.props.users.data.length > 0 &&
                    <Table celled>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Nome</Table.HeaderCell>
                                <Table.HeaderCell>E-mail</Table.HeaderCell>
                                <Table.HeaderCell>Tipo</Table.HeaderCell>
                                <Table.HeaderCell>Ações</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {this.props.users.data.map(this.renderUser)}
                        </Table.Body>
                    </Table>
                }
            </div>

        )
    }

}
const mapStateToProps = state => {
    return {
        runs: state.runs,
        auth: state.auth,
        users: state.users
    }
}
const mapDispatchToProps = dispatch => {
    return {
        load: () => dispatch(ActionCreators.getUsersRequest()),
        remove: id => dispatch(ActionCreators.removeUserRequest(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Users) 