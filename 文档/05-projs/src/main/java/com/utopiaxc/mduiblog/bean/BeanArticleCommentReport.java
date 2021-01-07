package com.utopiaxc.mduiblog.bean;

public class BeanArticleCommentReport {
    private String article_comment_report_id;
    private String article_comment_report_comment_id;
    private String article_comment_report_user_id;
    private String article_comment_report_reason;
    private String article_comment_report_time;

    public BeanArticleCommentReport() {
    }

    public BeanArticleCommentReport(String article_comment_report_id, String article_comment_report_comment_id, String article_comment_report_user_id, String article_comment_report_reason, String article_comment_report_time) {
        this.article_comment_report_id = article_comment_report_id;
        this.article_comment_report_comment_id = article_comment_report_comment_id;
        this.article_comment_report_user_id = article_comment_report_user_id;
        this.article_comment_report_reason = article_comment_report_reason;
        this.article_comment_report_time = article_comment_report_time;
    }

    public String getArticle_comment_report_id() {
        return article_comment_report_id;
    }

    public void setArticle_comment_report_id(String article_comment_report_id) {
        this.article_comment_report_id = article_comment_report_id;
    }

    public String getArticle_comment_report_comment_id() {
        return article_comment_report_comment_id;
    }

    public void setArticle_comment_report_comment_id(String article_comment_report_comment_id) {
        this.article_comment_report_comment_id = article_comment_report_comment_id;
    }

    public String getArticle_comment_report_user_id() {
        return article_comment_report_user_id;
    }

    public void setArticle_comment_report_user_id(String article_comment_report_user_id) {
        this.article_comment_report_user_id = article_comment_report_user_id;
    }

    public String getArticle_comment_report_reason() {
        return article_comment_report_reason;
    }

    public void setArticle_comment_report_reason(String article_comment_report_reason) {
        this.article_comment_report_reason = article_comment_report_reason;
    }

    public String getArticle_comment_report_time() {
        return article_comment_report_time;
    }

    public void setArticle_comment_report_time(String article_comment_report_time) {
        this.article_comment_report_time = article_comment_report_time;
    }
}
