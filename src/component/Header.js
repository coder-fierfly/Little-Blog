import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {authStore} from '../store/authStore';
import "../style/Header.css";

const Header = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        authStore.logout();
        navigate('/authorization');
    };

    return (
        <header className='header'>
            <nav className="header-wrapper">
                <button className="header-nav-btn"> <Link className="header-nav" to="/">Статьи</Link></button>
                <button className="header-nav-btn"><Link className="header-nav" to="/new">Создать новую статью</Link></button>
                <button className="header-nav-btn" onClick={handleLogout}>Logout</button>
            </nav>
        </header>
    );
};

export default Header;
