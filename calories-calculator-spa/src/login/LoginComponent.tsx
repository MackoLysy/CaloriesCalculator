import React, { Component } from 'react';
import './login.css';


export default class LoginComponent extends Component {
    state = {
        login: "",
        password: "",
    }
    getInitialState() {
        return { login: "", password: "" }
    }
    render() {
        return (
            <div className='wrapper'>
                <div className="content">
                    <div className="col-md-12 text-center">
                        <h3 className="h3 mb-3 mt-3">Logowanie</h3>
                        <input value={this.state.login} onChange={this.handleLogin} className="form-control" placeholder="login"></input>
                        <input value={this.state.password} className="form-control mb-3" placeholder="haslo"></input>
                        <button onClick={this.logIn} className="btn btn-lg btn-primary btn-block mb-4">Zaloguj</button>
                    </div>
                </div>
            </div>
        )
    }
    handleLogin(event: any) {
        console.log(event);
        // this.setState({ login: event.target.value })
    }
    async logIn() {

    }
}
