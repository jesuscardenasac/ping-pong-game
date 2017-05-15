import React, { Component } from 'react';
import axios from 'axios';

class Register extends Component {
  
    constructor(args) {
        super();
        this.state = {name:'',password:'',email:''};
    }
    
    handleClick(event) {
      
      var name = this.state.name;
      var password = this.state.password;
      var email = this.state.email;
      
      
        axios.post('http://ping-pong-game-backend-jesuscardenas.c9users.io/user?name='+name+'&email='+email+'&password='+password)
        .then(function (response) {
          if(response.statusText == "OK") {
            alert("usuario creado correctamente");
          } else {
            alert("error intente mas tarde");
          }
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    
    updateNameValue(evt) {
      this.setState({name: evt.target.value});
    }
    
    updatePasswordValue(evt) {
      this.setState({password: evt.target.value});
    }
    
    updateEmailValue(evt) {
      this.setState({email: evt.target.value});
    }

    render() {
        return (
                <div className={'login-page'}>
                  <div className={'form'}>
                    <div className={'register-form'}>
                      <input type="text" placeholder="name" value={this.state.name} onChange={evt => this.updateNameValue(evt)}/>
                      <input type="password" placeholder="password" value={this.state.password} onChange={evt => this.updatePasswordValue(evt)}/>
                      <input type="text" placeholder="email address" value={this.state.email} onChange={evt => this.updateEmailValue(evt)}/>
                      <button onClick={ this.handleClick.bind(this) }>create</button>
                      <p className="message">Already registered? <a href="#/login">Sign In</a></p>
                    </div>
                  </div>
                </div>
        );
    }
}

export default Register;