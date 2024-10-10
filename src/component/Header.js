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
                <Link className=" header-nav-btn header-nav" to="/">Статьи</Link>
                <Link className=" header-nav-btn header-nav" to="/new">Создать новую статью</Link>
                <button className="header-nav-btn" onClick={handleLogout}>Выйти</button>
            </nav>
        </header>
    );
};

export default Header;

