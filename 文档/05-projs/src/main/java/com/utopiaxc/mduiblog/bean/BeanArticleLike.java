package com.utopiaxc.mduiblog.bean;

public class BeanArticleLike {
    private String article_like_id;
    private String article_like_article_id;
    private String article_like_user_id;
    private String article_like_time;

    public BeanArticleLike() {
    }

    public BeanArticleLike(String article_like_id, String article_like_article_id, String article_like_user_id, String article_like_time) {
        this.article_like_id = article_like_id;
        this.article_like_article_id = article_like_article_id;
        this.article_like_user_id = article_like_user_id;
        this.article_like_time = article_like_time;
    }

    public String getArticle_like_id() {
        return article_like_id;
    }

    public void setArticle_like_id(String article_like_id) {
        this.article_like_id = article_like_id;
    }

    public String getArticle_like_article_id() {
        return article_like_article_id;
    }

    public void setArticle_like_article_id(String article_like_article_id) {
        this.article_like_article_id = article_like_article_id;
    }

    public String getArticle_like_user_id() {
        return article_like_user_id;
    }

    public void setArticle_like_user_id(String article_like_user_id) {
        this.article_like_user_id = article_like_user_id;
    }

    public String getArticle_like_time() {
        return article_like_time;
    }

    public void setArticle_like_time(String article_like_time) {
        this.article_like_time = article_like_time;
    }
}
