import React, {Component} from 'react';
import axios from 'axios';
import "./register.css";
class Register extends Component{
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
        
        console.log(this.state.userName,"\n",this.state.pass1,"\n",this.state.pass2,"\n",this.state.userEmail);
        
        axios.post('http://localhost:4000/user/register',{
                userName: this.state.userName,
                userEmail: this.state.userEmail,
                pass1: this.state.pass1,
                pass2: this.state.pass2
            })
        .then(
            response => {
                console.log('res : ',response);
            }
        )
        .catch(
            err => {
                console.log('err : ',err);
            }
        );
            
        this.setState({
            userName: '',
            pass1: '',
            pass2: '',
            userEmail: '',
        });
       
    } 

    render(){
        return(
            <form className="RegisterForm" onSubmit={this.onSubmit}>
                <div className="container">
                    <h2>ลงทะเบียน</h2>
                    <div className="form-group">
                        <label htmlFor="usr">Username:</label>
                        <input type="text" className="form-control" id="usr" name="userName" 
                        autoComplete="username" onChange={this.onChangeUserName}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="pwd">Password:</label>
                        <input type="password" className="form-control" id="pwd" name="pass1" 
                        autoComplete="password" onChange={this.onChangePass1}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="cpwd">Comfirm Password:</label>
                        <input type="password" className="form-control" id="cpwd" name="pass2" 
                        autoComplete="password" onChange={this.onChangePass2} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">E-mail:</label>
                        <input type="text" className="form-control" id="email" name="userEmail" 
                         onChange={this.onChangeUserEmail}/>
                    </div>
                    <button className="btn btn-success">ลงทะเบียน</button>
                </div>
            </form>
        )
    }
}

export default Register;