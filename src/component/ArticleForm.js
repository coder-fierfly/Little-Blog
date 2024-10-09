import React, { useState } from 'react';
import { observer } from 'mobx-react';
import { articleStore } from '../store/articleStore';
import { useParams, useNavigate } from 'react-router-dom';

const ArticleForm = observer(() => {
    const { id } = useParams();
    const navigate = useNavigate();
    const existingArticle = articleStore.articles.find(a => a.id === parseInt(id));

    const [title, setTitle] = useState(existingArticle?.title || '');
    const [content, setContent] = useState(existingArticle?.content || '');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (id) {
            articleStore.updateArticle(parseInt(id), title, content);
        } else {
            articleStore.addArticle(title, content);
        }
        navigate('/');
    };

    return (
        <div>
            <h2>{id ? 'Редактировать статью' : 'Создать статью'}</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Заголовок"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    placeholder="Содержание"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
                <button type="submit">{id ? 'Обновление' : 'Создать'}</button>
            </form>
        </div>
    );
});

export default ArticleForm;
