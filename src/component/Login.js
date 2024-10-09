import React, { useEffect } from 'react';
import {observer} from 'mobx-react';
import {authStore} from '../store/authStore';
import { useNavigate } from 'react-router-dom';

const Login = observer(() => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        console.log(" authStore ")
        e.preventDefault();
        authStore.authenticate(authStore.login, authStore.password);
    };

    useEffect(() => {
        if (authStore.isAuthenticated) {
            navigate('/');
        }
    }, [authStore.isAuthenticated, navigate]);

    return (
        <div>
            <h2>Авторизация</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Логин"
                    value={authStore.login}
                    onChange={(e) => authStore.setLogin(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Пароль"
                    value={authStore.password}
                    onChange={(e) => authStore.setPassword(e.target.value)}
                />
                <button type="submit">Войти</button>
            </form>
        </div>
    );
});

export default Login;
