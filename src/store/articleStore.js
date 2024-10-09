import { makeAutoObservable } from 'mobx';

class ArticleStore {
    articles = [{id: 1, title:"Adding vector graphics to the web", content:"Vector graphics are very useful in many circumstances — they have small file sizes and are highly scalable, so they don't pixelate when zoomed in or blown up to a large size.", likes: 0},
        {id: 2, title:"Introducing workers", content:"In this final article in our \"Asynchronous JavaScript\" module, we'll introduce workers, which enable you to run some tasks in a separate thread of execution.", likes: 0}];

    constructor() {
        makeAutoObservable(this);
    }

    addArticle(title, content) {
        const newArticle = { id: Date.now(), title, content, likes: 0 };
        this.articles.push(newArticle);
    }

    updateArticle(id, title, content) {
        const article = this.articles.find(article => article.id === id);
        if (article) {
            article.title = title;
            article.content = content;
        }
    }

    increaseLikes(id) {
        const article = this.articles.find(article => article.id === id);
        if (article) {
            article.likes += 1;
        }
    }
}

export const articleStore = new ArticleStore();
