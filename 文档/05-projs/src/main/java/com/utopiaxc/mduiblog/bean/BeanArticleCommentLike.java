package com.utopiaxc.mduiblog.bean;

public class BeanArticleCommentLike {
    private String article_comment_like_id;
    private String article_comment_like_comment_id;
    private String article_comment_like_user_id;
    private String article_comment_like_time;

    public BeanArticleCommentLike() {
    }

    public BeanArticleCommentLike(String article_comment_like_id, String article_comment_like_comment_id, String article_comment_like_user_id, String article_comment_like_time) {
        this.article_comment_like_id = article_comment_like_id;
        this.article_comment_like_comment_id = article_comment_like_comment_id;
        this.article_comment_like_user_id = article_comment_like_user_id;
        this.article_comment_like_time = article_comment_like_time;
    }

    public String getArticle_comment_like_id() {
        return article_comment_like_id;
    }

    public void setArticle_comment_like_id(String article_comment_like_id) {
        this.article_comment_like_id = article_comment_like_id;
    }

    public String getArticle_comment_like_comment_id() {
        return article_comment_like_comment_id;
    }

    public void setArticle_comment_like_comment_id(String article_comment_like_comment_id) {
        this.article_comment_like_comment_id = article_comment_like_comment_id;
    }

    public String getArticle_comment_like_user_id() {
        return article_comment_like_user_id;
    }

    public void setArticle_comment_like_user_id(String article_comment_like_user_id) {
        this.article_comment_like_user_id = article_comment_like_user_id;
    }

    public String getArticle_comment_like_time() {
        return article_comment_like_time;
    }

    public void setArticle_comment_like_time(String article_comment_like_time) {
        this.article_comment_like_time = article_comment_like_time;
    }
}
