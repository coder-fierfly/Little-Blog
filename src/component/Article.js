import React from 'react';
import {observer} from 'mobx-react';
import {articleStore} from '../store/articleStore';
import {useParams, Link} from 'react-router-dom';
import '../style/Article.css';
import '../App.css';

const Article = observer(() => {
    const {id} = useParams();
    const article = articleStore.articles.find(a => a.id === parseInt(id));

    if (!article) return <div>Article not found</div>;

    return (
        <div className='article-wrapper'>
            <div className='title-edit-wrapper'>
                <h2>{article.title}</h2>
                <Link to={`/edit/${article.id}`} className="edit-link">✏️ </Link> {/* Добавляем значок */}
            </div>
            <p className='content'>{article.content}</p>
            <p className='likes'>Likes: {article.likes}</p>
            <button className='btn' onClick={() => articleStore.increaseLikes(parseInt(id))}>
                👍 Лайк
            </button>
        </div>
    );
});

export default Article;
