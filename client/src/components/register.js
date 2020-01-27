import React, { useState } from 'react';

function Login(){
    let [account, setAccount] = useState({
        username: '',
        pass1: '',
        pass2: '',
        email: '' 
    });

    return(
        <div>
            <form method="post">
                <h2>Register</h2>
                username :
                <input type="text" name="username" /><br />
                password :
                <input type="password" name="pass1" /><br />
                re-password :
                <input type="password" name="pass2" /><br />
                e-mail:
                <input type="email" name="email" /><br /> 
                <input type="submit" onClick={()=>{
                    setAccount(
                        
                    )
                }} />           
            </form>
        </div>
    );
}

export default Login;