import React from 'react';
import {observer} from 'mobx-react';
import {articleStore} from '../store/articleStore';
import "../style/ArticleList.css"
import {Link, useNavigate} from 'react-router-dom';

const ArticleList = observer(() => {
    const navigate = useNavigate(); // Инициализация навигации

    return (
        <div className="list-wrapper">
            <h2>Статьи</h2>
            <ul>
                {articleStore.articles.map((article) => (
                    <li key={article.id} onClick={() => navigate(`/article/${article.id}`)}>
                        <Link to={`/article/${article.id}`}>
                            <h3>{article.title}</h3>
                        </Link>
                        <p>{article.content.length > 100
                            ? `${article.content.slice(0, 100)}...`
                            : article.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
});

export default ArticleList;