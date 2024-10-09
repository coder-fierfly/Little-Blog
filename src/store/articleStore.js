import { makeAutoObservable } from 'mobx';

class ArticleStore {
    articles = [{id: 1, title:"тото", content:"контент тото"},{id: 2, title:"тото2", content:"контент тото2"}];
    //{id: 1, title:"тото", content:"контент тото"},{id: 2, title:"тото2", content:"контент тото2"}
    currentArticle = null;

    constructor() {
        makeAutoObservable(this);
    }

    addArticle(title, content) {
        const newArticle = { id: Date.now(), title, content };
        this.articles.push(newArticle);
    }

    updateArticle(id, title, content) {
        const article = this.articles.find(article => article.id === id);
        if (article) {
            article.title = title;
            article.content = content;
        }
    }

    getArticle(id) {
        this.currentArticle = this.articles.find(article => article.id === id);
    }

    deleteArticle(id) {
        this.articles = this.articles.filter(article => article.id !== id);
    }
}

export const articleStore = new ArticleStore();
