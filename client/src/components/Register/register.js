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
            <div class="container">
                <h2>ลงทะเบียน</h2>
                <div class="form-group">
                    <label for="usr">ID:</label>
                    <input type="text" class="form-control" id="usr" name="userName" 
                    autoComplete="username" onChange={this.onChangeUserName}/>
                </div>
                <div class="form-group">
                    <label for="pwd">Password:</label>
                    <input type="password" class="form-control" id="pwd" name="pass1" 
                    autoComplete="username" onChange={this.onChangePass1}/>
                </div>
                <div class="form-group">
                    <label for="cpwd">Comfirm Password:</label>
                    <input type="text" class="form-control" id="cpwd" name="pass2" 
                    autoComplete="username" onChange={this.onChangePass2} />
                </div>
                <div class="form-group">
                    <label for="email">E-mail:</label>
                    <input type="password" class="form-control" id="email" name="userEmail" 
                    autoComplete="username" onChange={this.onChangeUserEmail}/>
                </div>
                <button class="btn btn-success">ลงทะเบียน</button>
            </div>
        )
    }
}

export default Login;