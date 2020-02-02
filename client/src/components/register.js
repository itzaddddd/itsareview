import React, {Component} from 'react';
import axios from 'axios';
class Login extends Component{
    constructor(props){
        super(props);
    
        this.state = {
            userName: '',
            pass1: '',
            pass2: '',
            userEmail: ''
        };

        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangePass1 = this.onChangePass1.bind(this);
        this.onChangePass2 = this.onChangePass2.bind(this);
        this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeUserName = e => {
        this.setState({
            userName: e.target.value
        });
    }

    onChangePass1 = e => {
        this.setState({
            pass1: e.target.value
        });
    }

    onChangePass2 = e => {
        this.setState({
            pass2: e.target.value
        });
    }

    onChangeUserEmail = e => {
        this.setState({
            userEmail: e.target.value
        });
    }

    onSubmit = e => {
        e.preventDefault();

        let data = {
            userName: this.state.userName,
            pass1: this.state.pass1,
            pass2: this.state.pass2,
            userEmail: this.state.userEmail,
        }

        axios.post('http://localhost:4000/user/register',data)
        .then(data => {
            console.log(data.data)
        })
        .catch(err => {
            console.log(err.message);
        });

        console.log("post state");

        this.setState({
            userName: '',
            pass1: '',
            pass2: '',
            userEmail: '',
        });
    } 

    render(){
        return(
            <div className="regis">
                <form method="post" onSubmit={this.onSubmit}>
                    <h2>Register</h2>
                    username :
                    <input type="text" name="userName" autoComplete="username" onChange={this.onChangeUserName}/><br />
                    password :
                    <input type="password" name="pass1" autoComplete="new-password" onChange={this.onChangePass1}/><br />
                    re-password :
                    <input type="password" name="pass2" autoComplete="new-password" onChange={this.onChangePass2}/><br />
                    e-mail:
                    <input type="email" name="userEmail" onChange={this.onChangeUserEmail}/><br /> 
                    <input type="submit"  />           
                </form>
            </div>
        )
    }
}

export default Login;