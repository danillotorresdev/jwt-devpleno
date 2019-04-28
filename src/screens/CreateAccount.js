import React, { Component } from 'react'
import ActionCreators from '../redux/actionCreators'
import { connect } from 'react-redux'
import { Button, Segment, Form } from 'semantic-ui-react'
import {Redirect} from 'react-router-dom'
import timezones from 'moment-timezone/data/meta/latest.json'

class CreateAccount extends Component {
    state = {
        passwd: '',
        passwd2: '',
        name: '',
        email: '',
        unit: 'metric',
        timezone: 'America/Sao_Paulo',
        error: ''
    }

    componentDidMount() {
        this.props.reset()
    }

    handleChange = fieldname => event => {
        this.setState({
            [fieldname]: event.target.value
        })
    }
    handleSave = () => {
        if (this.state.passwd !== this.state.passwd2) {
            this.setState({
                error: 'equal'
            })
        } else if (this.state.passwd.length < 6) {
            this.setState({
                error: 'length'
            })
        } else {
            this.setState({
                error: ''
            })
            this.props.save({
                name: this.state.name,
                email: this.state.email,
                passwd: this.state.passwd,
                unit: this.state.unit,
                timezone: this.state.timezone
            })
        }
    }
    render() {
        if(this.props.auth.isAuth){
            return <Redirect to='/restrito' />
        }
        return (
            <div>
                <h1>Criar conta</h1>
                {
                    this.props.auth.error &&
                    <Segment color='red'>{this.props.auth.errorMessage}</Segment>
                }
                {
                    this.state.error &&
                    <Segment color='red'>Ops! Confirmação de senha errada</Segment>
                }
                {
                    this.props.auth.saved &&
                    <Segment color='green'>Conta criada com Sucesso! :D</Segment>
                }
                {
                    !this.props.auth.saved &&
                    <Form>
                        <Form.Field>
                            <label>Nome:</label>
                            <input type='text' value={this.state.name} onChange={this.handleChange('name')} />
                        </Form.Field>
                        <Form.Field>
                            <label>Email:</label>
                            <input type='email' value={this.state.email} onChange={this.handleChange('email')} />
                        </Form.Field>
                        <Form.Field>
                            <label>Nova Senha:</label>
                            <input type='password' value={this.state.passwd} onChange={this.handleChange('passwd')} />
                        </Form.Field>
                        <Form.Field>
                            <label>Confirmaçāo de Senha:</label>
                            <input type='password' value={this.state.passwd2} onChange={this.handleChange('passwd2')} />
                        </Form.Field>
                        <select value={this.state.unit} onChange={this.handleChange('unit')}>
                            <option value='metric'>Métrico (Km)</option>
                            <option value='imperial'>Imperial (Mi)</option>
                        </select>
                        <select value={this.state.timezone} onChange={this.handleChange('timezone')}>
                            {
                                Object
                                    .keys(timezones.zones)
                                    .map(tz => {
                                        return <option key={tz} value={tz}>{tz}</option>
                                    })
                            }
                        </select>
                        <Button onClick={this.handleSave}>Criar conta</Button>
                    </Form>
                }


            </div>

        )
    }

}
const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}
const mapDispatchToProps = dispatch => {
    return {
        save: (user) => dispatch(ActionCreators.createProfileRequest(user)),
        reset: () => dispatch(ActionCreators.createProfileReset())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateAccount) 