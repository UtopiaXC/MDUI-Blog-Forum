package com.utopiaxc.mduiblog.bean;

public class BeanWebMessage {
    private String web_message_id;
    private String web_message_title;
    private String web_message_content;

    public BeanWebMessage() {
    }

    public BeanWebMessage(String web_message_id, String web_message_title, String web_message_content) {
        this.web_message_id = web_message_id;
        this.web_message_title = web_message_title;
        this.web_message_content = web_message_content;
    }

    public String getWeb_message_id() {
        return web_message_id;
    }

    public void setWeb_message_id(String web_message_id) {
        this.web_message_id = web_message_id;
    }

    public String getWeb_message_title() {
        return web_message_title;
    }

    public void setWeb_message_title(String web_message_title) {
        this.web_message_title = web_message_title;
    }

    public String getWeb_message_content() {
        return web_message_content;
    }

    public void setWeb_message_content(String web_message_content) {
        this.web_message_content = web_message_content;
    }
}
