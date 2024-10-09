import React from 'react';
import { observer } from 'mobx-react';
import { articleStore } from '../store/articleStore';
import { Link } from 'react-router-dom';

const ArticleList = observer(() => (
    <div>
        <h2>Статьи</h2>
        <ul>
            {articleStore.articles.map((article) => (
                <li key={article.id}>
                    <Link to={`/article/${article.id}`}>{article.title}</Link>
                </li>
            ))}
        </ul>
    </div>
));

export default ArticleList;
