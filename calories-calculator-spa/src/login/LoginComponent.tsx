import React, { Component } from 'react';
import './login.scss';
import { authService } from '../_services/auth.service';

export default class LoginComponent extends Component<{}, { login: string, password: string }> {
    constructor(params: any) {
        super(params);
        this.state = { login: '', password: '' }
        this.handleLogin = this.handleLogin.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.logIn = this.logIn.bind(this);
    }
    render() {
        return (
            <div className='wrapper'>
                <div className="content">
                    <div className="col-md-12 text-center">
                        <h3 className="h3 mb-3 mt-3">Logowanie</h3>
                        <input value={this.state.login} onChange={this.handleLogin} className="form-control" placeholder="login"></input>
                        <input value={this.state.password} onChange={this.handlePassword} className="form-control mb-3" placeholder="haslo" type="password"></input>
                        <button onClick={this.logIn} className="btn btn-lg btn-primary btn-block mb-4">Zaloguj</button>
                    </div>
                </div>
            </div>
        )
    }
    handleLogin(event: any) {
        this.setState({ login: event.target.value })
    }
    handlePassword(event: any) {
        this.setState({ password: event.target.value })
    }
    logIn() {
        authService.logIn("admin", "admin");
    }
}
