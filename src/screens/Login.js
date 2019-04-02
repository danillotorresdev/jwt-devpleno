import React, { Component } from 'react'
import ActionCreator from '../redux/actionCreators'
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'

class Login extends Component {
    state = {
        form: {
            email: '',
            passwd: ''
        }
    }
    handleChange = fieldname => event => {
        const form = {
            ...this.state.form,
        }
        form[fieldname] = event.target.value
        this.setState({ form })
    }
    login = () => {
        const { email, passwd } = this.state.form
        this.props.login(email, passwd)
    }
    render() {
        if(this.props.auth.isAuth){
            if(this.props.auth.user.role === 'admin'){
                return <Redirect to='/admin' />
            }
            return <Redirect to='/restrito' />
        }
        return (
            <div>
                <h1>Login {JSON.stringify(this.props)}</h1>
                <input type='text' value={this.state.form.email} onChange={this.handleChange('email')} />
                <input type='password' value={this.state.form.passwd} onChange={this.handleChange('passwd')} />
                <button onClick={this.login}>Logar</button>
                {this.props.auth.error &&
                    <p>Erro ao logar</p>
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
        login: (email, passwd) => dispatch(ActionCreator.signinRequest(email, passwd))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)