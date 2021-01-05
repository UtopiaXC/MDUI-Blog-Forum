package com.utopiaxc.mduiblog.bean;

public class BeanArticle {
    private String article_id;
    private String article_user_id;
    private String article_topic_id;
    private String article_title;
    private String article_content;
    private String article_submit_time;
    private String article_edit_time;

    public BeanArticle() {
    }

    public BeanArticle(String article_id, String article_user_id, String article_topic_id, String article_title, String article_content, String article_submit_time, String article_edit_time) {
        this.article_id = article_id;
        this.article_user_id = article_user_id;
        this.article_topic_id = article_topic_id;
        this.article_title = article_title;
        this.article_content = article_content;
        this.article_submit_time = article_submit_time;
        this.article_edit_time = article_edit_time;
    }

    public String getArticle_id() {
        return article_id;
    }

    public void setArticle_id(String article_id) {
        this.article_id = article_id;
    }

    public String getArticle_user_id() {
        return article_user_id;
    }

    public void setArticle_user_id(String article_user_id) {
        this.article_user_id = article_user_id;
    }

    public String getArticle_topic_id() {
        return article_topic_id;
    }

    public void setArticle_topic_id(String article_topic_id) {
        this.article_topic_id = article_topic_id;
    }

    public String getArticle_title() {
        return article_title;
    }

    public void setArticle_title(String article_title) {
        this.article_title = article_title;
    }

    public String getArticle_content() {
        return article_content;
    }

    public void setArticle_content(String article_content) {
        this.article_content = article_content;
    }

    public String getArticle_submit_time() {
        return article_submit_time;
    }

    public void setArticle_submit_time(String article_submit_time) {
        this.article_submit_time = article_submit_time;
    }

    public String getArticle_edit_time() {
        return article_edit_time;
    }

    public void setArticle_edit_time(String article_edit_time) {
        this.article_edit_time = article_edit_time;
    }
}
