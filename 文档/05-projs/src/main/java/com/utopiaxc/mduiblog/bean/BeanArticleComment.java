package com.utopiaxc.mduiblog.bean;

public class BeanArticleComment {
    private String article_comment_id;
    private String article_comment_article_id;
    private String article_comment_user_id;
    private String article_comment_father_user_id;
    private String article_comment_time;
    private String article_comment_content;

    public BeanArticleComment() {
    }

    public BeanArticleComment(String article_comment_id, String article_comment_article_id, String article_comment_user_id, String article_comment_father_user_id, String article_comment_time,String article_comment_content) {
        this.article_comment_id = article_comment_id;
        this.article_comment_article_id = article_comment_article_id;
        this.article_comment_user_id = article_comment_user_id;
        this.article_comment_father_user_id = article_comment_father_user_id;
        this.article_comment_time = article_comment_time;
        this.article_comment_content=article_comment_content;
    }

    public String getArticle_comment_id() {
        return article_comment_id;
    }

    public void setArticle_comment_id(String article_comment_id) {
        this.article_comment_id = article_comment_id;
    }

    public String getArticle_comment_article_id() {
        return article_comment_article_id;
    }

    public void setArticle_comment_article_id(String article_comment_article_id) {
        this.article_comment_article_id = article_comment_article_id;
    }

    public String getArticle_comment_user_id() {
        return article_comment_user_id;
    }

    public void setArticle_comment_user_id(String article_comment_user_id) {
        this.article_comment_user_id = article_comment_user_id;
    }

    public String getArticle_comment_father_user_id() {
        return article_comment_father_user_id;
    }

    public void setArticle_comment_father_user_id(String article_comment_father_user_id) {
        this.article_comment_father_user_id = article_comment_father_user_id;
    }

    public String getArticle_comment_time() {
        return article_comment_time;
    }

    public void setArticle_comment_time(String article_comment_time) {
        this.article_comment_time = article_comment_time;
    }

    public String getArticle_comment_content() {
        return article_comment_content;
    }

    public void setArticle_comment_content(String article_comment_content) {
        this.article_comment_content = article_comment_content;
    }
}
