import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authStore } from '../store/authStore';

const Header = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        authStore.logout();
        navigate('/authorization');
    };

    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Статьи</Link>
                    </li>
                    <li>
                        <Link to="/new">Создать новую статью</Link>
                    </li>
                    <li>
                        <button onClick={handleLogout}>Logout</button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
