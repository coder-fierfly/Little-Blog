import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import {observer} from 'mobx-react';
import {authStore} from './store/authStore';
import Authorization from './component/Authorization';
import ArticleList from './component/ArticleList';
import Article from './component/Article';
import ArticleChanging from './component/ArticleChanging';
import './App.css';
import Header from "./component/Header";

const App = observer(() => {
    {console.log(authStore.isAuthenticated)}
    return (
        <div className="App">
            <Router>
                {authStore.isAuthenticated && <Header />}
                <>
                    <Routes>
                        <Route path="/authorization" element={<Authorization />} />

                        {authStore.isAuthenticated ? (
                            <>
                                <Route path="/" element={<ArticleList />} />
                                <Route path="/article/:id" element={<Article />} />
                                <Route path="/new" element={<ArticleChanging />} />
                                <Route path="/edit/:id" element={<ArticleChanging />} />
                            </>
                        ) : (
                            <Route path="*" element={<Navigate to="/authorization" />} />
                        )}
                    </Routes>
                </>
            </Router>
        </div>
    );
});

export default App;
