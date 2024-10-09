import { makeAutoObservable } from 'mobx';

class AuthStore {
    isAuthenticated = false;
    login = '';
    password = '';

    constructor() {
        makeAutoObservable(this);
    }

    authenticate(login, password) {
        console.log(login, password)
        this.login = login;
        this.password = password;
        this.isAuthenticated = true;
    }

    logout() {
        this.isAuthenticated = false;
        this.login = '';
        this.password = '';
    }

    setLogin(login) {
        this.login = login;
    }

    setPassword(password) {
        this.password = password;
    }
}

export const authStore = new AuthStore();
