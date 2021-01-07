package com.utopiaxc.mduiblog.bean;

public class BeanArticleReport {
    private String article_report_id;
    private String article_report_article_id;
    private String article_report_user_id;
    private String article_report_reason;
    private String article_report_time;

    public BeanArticleReport() {
    }

    public BeanArticleReport(String article_report_id, String article_report_article_id, String article_report_user_id, String article_report_reason, String article_report_time) {
        this.article_report_id = article_report_id;
        this.article_report_article_id = article_report_article_id;
        this.article_report_user_id = article_report_user_id;
        this.article_report_reason = article_report_reason;
        this.article_report_time = article_report_time;
    }

    public String getArticle_report_id() {
        return article_report_id;
    }

    public void setArticle_report_id(String article_report_id) {
        this.article_report_id = article_report_id;
    }

    public String getArticle_report_article_id() {
        return article_report_article_id;
    }

    public void setArticle_report_article_id(String article_report_article_id) {
        this.article_report_article_id = article_report_article_id;
    }

    public String getArticle_report_user_id() {
        return article_report_user_id;
    }

    public void setArticle_report_user_id(String article_report_user_id) {
        this.article_report_user_id = article_report_user_id;
    }

    public String getArticle_report_reason() {
        return article_report_reason;
    }

    public void setArticle_report_reason(String article_report_reason) {
        this.article_report_reason = article_report_reason;
    }

    public String getArticle_report_time() {
        return article_report_time;
    }

    public void setArticle_report_time(String article_report_time) {
        this.article_report_time = article_report_time;
    }
}
