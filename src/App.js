import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import {observer} from 'mobx-react';
import {authStore} from './store/authStore';
import Login from './component/Login';
import ArticleList from './component/ArticleList';
import Article from './component/Article';
import ArticleForm from './component/ArticleForm';
import './App.css';
import Header from "./component/Header";

const App = observer(() => {
    {console.log(!authStore.isAuthenticated)}
    return (
        <div className="App">

            <Router>
                {authStore.isAuthenticated && <Header />}
                <div>
                    <Routes>
                        {!authStore.isAuthenticated ?
                            <Route path="*" element={<Navigate to="/authorization" />} /> :
                            <Route path="*" element={<Navigate to="/" />} /> }
                        <Route path="/authorization" element={<Login/>}/>
                        <Route path="/" element={<ArticleList/>}/>
                        <Route path="/article/:id" element={<Article/>}/>
                        <Route path="/new" element={<ArticleForm/>}/>
                        <Route path="/edit/:id" element={<ArticleForm/>}/>
                    </Routes>
                </div>
            </Router>
        </div>
    );
});

export default App;
