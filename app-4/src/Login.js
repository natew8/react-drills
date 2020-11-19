import React, { Component } from 'react'

class Login extends Component {
    constructor() {
        super()
        this.state = {
            userName: '',
            password: ''
        }
    }

    handlerUser(value) {
        this.setState({
            userName: value
        })
    }

    handlerPassword(value) {
        this.setState({
            password: value
        })
    }

    alertInfo() {
        alert(`Username: ${this.state.userName}   Password: ${this.state.password}`)
    }

    render() {
        return (
            <div className='App'>
                <input type='text' onChange={e => this.handlerUser(e.target.value)}></input>
                <input type='text' onChange={e => this.handlerPassword(e.target.value)}></input>
                <button onClick={e => this.alertInfo()}>Login</button>
            </div >
        )
    }
}

export default Login;
