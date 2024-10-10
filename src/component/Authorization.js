import React, {useEffect} from 'react';
import {observer} from 'mobx-react';
import {authStore} from '../store/authStore';
import {useNavigate} from 'react-router-dom';
import "../style/Auth.css";
import '../App.css';

const Authorization = observer(() => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!authStore.login || !authStore.password) {
            alert('Пожалуйста, введите логин и пароль');
            return;
        }
        authStore.authenticate(authStore.login, authStore.password);
    };

    useEffect(() => {
        if (authStore.isAuthenticated) {
            navigate('/');
        }
    }, [authStore.isAuthenticated, navigate]);

    return (
        <div className='auth-group'>
            <h2 className='auth-label'>Войти</h2>
            <form onSubmit={handleSubmit}>
                <div className='log_group'><p className='log-pass-label'>Логин</p>
                    <input
                        type="text"
                        placeholder="Логин"
                        value={authStore.login}
                        onChange={(e) => authStore.setLogin(e.target.value)}
                    />
                </div>
                <div className='log_group'><p className='log-pass-label'>Пароль</p>
                    <input
                        type="password"
                        placeholder="Пароль"
                        value={authStore.password}
                        onChange={(e) => authStore.setPassword(e.target.value)}
                    />
                </div>
                <div className='enter-btn-wrapper'>
                    <button className='btn enter-btn' type="submit"  >Войти</button>
                </div>
            </form>
        </div>
    );
});

export default Authorization;
