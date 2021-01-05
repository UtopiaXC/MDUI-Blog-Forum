package com.utopiaxc.mduiblog.bean;

public class BeanUserReport {
    private String user_report_id;
    private String user_report_user_id;
    private String user_report_user_to;
    private String user_report_reason;
    private String user_report_time;

    public BeanUserReport() {
    }

    public BeanUserReport(String user_report_id, String user_report_user_id, String user_report_user_to, String user_report_reason, String user_report_time) {
        this.user_report_id = user_report_id;
        this.user_report_user_id = user_report_user_id;
        this.user_report_user_to = user_report_user_to;
        this.user_report_reason = user_report_reason;
        this.user_report_time = user_report_time;
    }

    public String getUser_report_id() {
        return user_report_id;
    }

    public void setUser_report_id(String user_report_id) {
        this.user_report_id = user_report_id;
    }

    public String getUser_report_user_id() {
        return user_report_user_id;
    }

    public void setUser_report_user_id(String user_report_user_id) {
        this.user_report_user_id = user_report_user_id;
    }

    public String getUser_report_user_to() {
        return user_report_user_to;
    }

    public void setUser_report_user_to(String user_report_user_to) {
        this.user_report_user_to = user_report_user_to;
    }

    public String getUser_report_reason() {
        return user_report_reason;
    }

    public void setUser_report_reason(String user_report_reason) {
        this.user_report_reason = user_report_reason;
    }

    public String getUser_report_time() {
        return user_report_time;
    }

    public void setUser_report_time(String user_report_time) {
        this.user_report_time = user_report_time;
    }
}
