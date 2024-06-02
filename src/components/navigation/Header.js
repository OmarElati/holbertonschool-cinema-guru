import React from 'react';
import '../../routes/auth/auth.css';


const Header = ({
    userUsername,
    setIsLoggedIn
}) => {

    const logout = () => {
        localStorage.removeItem('accessToken')
        setIsLoggedIn(false)
    }
    return (
        <nav className="header-bar">
            <h1>Cinema Guru</h1>
            <span>
                <img alt="alt "src="https://picsum.photos/100/100" />
                <p>Welcome, {userUsername}!</p>
                <span onClick={logout}>
                    <p>Logout</p>
                </span>

            </span>
        </nav>
    );
}

export default Header;
