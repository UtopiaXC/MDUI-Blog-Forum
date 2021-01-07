package com.utopiaxc.mduiblog.bean;

public class BeanTopic {
    private String topic_id;
    private String topic_picture;
    private String topic_title;

    public BeanTopic() {
    }

    public BeanTopic(String topic_id, String topic_picture, String topic_title) {
        this.topic_id = topic_id;
        this.topic_picture = topic_picture;
        this.topic_title = topic_title;
    }

    public String getTopic_id() {
        return topic_id;
    }

    public void setTopic_id(String topic_id) {
        this.topic_id = topic_id;
    }

    public String getTopic_picture() {
        return topic_picture;
    }

    public void setTopic_picture(String topic_picture) {
        this.topic_picture = topic_picture;
    }

    public String getTopic_title() {
        return topic_title;
    }

    public void setTopic_title(String topic_title) {
        this.topic_title = topic_title;
    }
}
