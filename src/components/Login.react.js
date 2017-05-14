import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
    constructor(args) {
        super();
        this.state = {username:'',password:''};
    }
    
    handleClick(event) {
      
      var username = this.state.username;
      var password = this.state.password;
      
      
        axios.get('http://phptest-jesuscardenas.c9users.io/user?email='+username+'&password='+password)
        .then(function (response) {
          console.log(response);
          alert(response.data.msj);
          if(response.data.estado == "ok") {
            var Router = require('react-router');
            Router.browserHistory.push('/somepath');
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    
    updateUsernameValue(evt) {
      this.setState({username: evt.target.value});
    }
    
    updatePasswordValue(evt) {
      this.setState({password: evt.target.value});
    }

    render() {
        return (
            <div className={'login-page'}>
              <div className={'form'}>
                <form className={'login-form'}>
                  <input type="text" placeholder="username" value={this.state.username} onChange={evt => this.updateUsernameValue(evt)}/>
                  <input type="password" placeholder="password" value={this.state.password} onChange={evt => this.updatePasswordValue(evt)}/>
                  <button onClick={ this.handleClick.bind(this) }>login</button>
                  <p className={'message'}>Not registered? <a href="#/register" onClick={ this.props.registerForm }>Create an account</a></p>
                </form>
              </div>
            </div>
        );
    }
}

export default Login;