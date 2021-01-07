package com.utopiaxc.mduiblog.bean;

public class BeanUserSubscription {
    private String user_subscription_id;
    private String user_subscription_from;
    private String user_subscription_to;

    public BeanUserSubscription() {
    }

    public BeanUserSubscription(String user_subscription_id, String user_subscription_from, String user_subscription_to) {
        this.user_subscription_id = user_subscription_id;
        this.user_subscription_from = user_subscription_from;
        this.user_subscription_to = user_subscription_to;
    }

    public String getUser_subscription_id() {
        return user_subscription_id;
    }

    public void setUser_subscription_id(String user_subscription_id) {
        this.user_subscription_id = user_subscription_id;
    }

    public String getUser_subscription_from() {
        return user_subscription_from;
    }

    public void setUser_subscription_from(String user_subscription_from) {
        this.user_subscription_from = user_subscription_from;
    }

    public String getUser_subscription_to() {
        return user_subscription_to;
    }

    public void setUser_subscription_to(String user_subscription_to) {
        this.user_subscription_to = user_subscription_to;
    }
}
