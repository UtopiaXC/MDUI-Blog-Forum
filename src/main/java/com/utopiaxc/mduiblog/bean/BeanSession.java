package com.utopiaxc.mduiblog.bean;

public class BeanSession {
    private String session_id;
    private String session_user_id;
    private String session_token;
    private String session_ip;
    private String session_stime;
    private String session_etime;

    public BeanSession() {
    }

    public BeanSession(String session_id, String session_user_id, String session_token, String session_ip, String session_stime, String session_etime) {
        this.session_id = session_id;
        this.session_user_id = session_user_id;
        this.session_token = session_token;
        this.session_ip = session_ip;
        this.session_stime = session_stime;
        this.session_etime = session_etime;
    }

    public String getSession_id() {
        return session_id;
    }

    public void setSession_id(String session_id) {
        this.session_id = session_id;
    }

    public String getSession_user_id() {
        return session_user_id;
    }

    public void setSession_user_id(String session_user_id) {
        this.session_user_id = session_user_id;
    }

    public String getSession_token() {
        return session_token;
    }

    public void setSession_token(String session_token) {
        this.session_token = session_token;
    }

    public String getSession_ip() {
        return session_ip;
    }

    public void setSession_ip(String session_ip) {
        this.session_ip = session_ip;
    }

    public String getSession_stime() {
        return session_stime;
    }

    public void setSession_stime(String session_stime) {
        this.session_stime = session_stime;
    }

    public String getSession_etime() {
        return session_etime;
    }

    public void setSession_etime(String session_etime) {
        this.session_etime = session_etime;
    }
}
