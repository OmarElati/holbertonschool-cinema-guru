import React from 'react';
import "./auth.css";
import Submit from '../../components/general/Button';
import Input from '../../components/general/Input';

const Login = ({
    username,
    password,
    setUsername,
    setPassword
}) => {
    return (
        <div>
            <h2 className="auth-title">Sign in to your account</h2>

            <Input label="Username" value={username} setValue={setUsername} />
            <Input label="Password" value={password} setValue={setPassword} />

            <Submit label="Sign In" />
        </div>
    );
}

export default Login;
