import React from 'react';
import { LOGIN } from '../../constants/apiEndPoints';
import { makeRequestToAuth } from '../../utils/MakeRequest';
import './loginRegisterPage.css';
const LoginRegisterPage = () => {

    const [userName, setUserName] = React.useState<string>('');
    const [password, setPassword] = React.useState<string>('');

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleLogin = async () => {
        const data = { '"username"': 'aganya', '"password"': password };
        const jwt = await makeRequestToAuth({ ...LOGIN, data:data});
        // console.log(jwt);
    };

    const handleRegister = () => {
        setPassword('');
    };

    return (
        <div className="login-box">
            <h1>Login To the APP!</h1>
            <div className='login-input'>
                <span>Username</span>
                <input type="text" placeholder='Enter your username' onChange={handleEmailChange} />
            </div>
            <div className='login-input'>
                <span>Password</span>
                <input type="password" placeholder='Enter your password' onChange={handlePasswordChange} />
            </div>

            <div className='login-buttons'>
                <button className='login-button' onClick={()=>handleLogin()}>Login</button>
                <button className='register-button' onClick={()=> handleRegister()}>Register</button>
            </div>
        </div>
    );
};

export default LoginRegisterPage;