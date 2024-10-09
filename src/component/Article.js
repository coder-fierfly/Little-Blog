import React from 'react';
import { observer } from 'mobx-react';
import { articleStore } from '../store/articleStore';
import { useParams, Link } from 'react-router-dom';

const Article = observer(() => {
    const { id } = useParams();
    const article = articleStore.articles.find(a => a.id === parseInt(id));

    if (!article) return <div>Article not found</div>;

    return (
        <div>
            <h2>{article.title}</h2>
            <p>{article.content}</p>
            <p>Likes: {article.likes}</p>
            <button onClick={() => articleStore.increaseLikes(parseInt(id))}>
                👍 Лайк
            </button>
            <Link to={`/edit/${article.id}`}>Изменить</Link>
        </div>
    );
});

export default Article;
