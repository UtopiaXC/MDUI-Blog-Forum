package com.utopiaxc.mduiblog.bean;

public class BeanRegisterUser {
    private String user_id;
    private String user_name;
    private String user_email;
    private String user_password;
    private String user_group;
    private String user_banned;
    private String user_register_time;
    private String user_slogan;
    private String user_birthday;
    private String user_link;
    private String user_region;
    private String user_organization;
    private String user_description;

    public BeanRegisterUser() {
    }

    public BeanRegisterUser(String user_id, String user_name, String user_email, String user_password, String user_group, String user_banned, String user_register_time, String user_slogan, String user_birthday, String user_link, String user_region, String user_organization, String user_description) {
        this.user_id = user_id;
        this.user_name = user_name;
        this.user_email = user_email;
        this.user_password = user_password;
        this.user_group = user_group;
        this.user_banned = user_banned;
        this.user_register_time = user_register_time;
        this.user_slogan = user_slogan;
        this.user_birthday = user_birthday;
        this.user_link = user_link;
        this.user_region = user_region;
        this.user_organization = user_organization;
        this.user_description = user_description;
    }

    public String getUser_id() {
        return user_id;
    }

    public void setUser_id(String user_id) {
        this.user_id = user_id;
    }

    public String getUser_name() {
        return user_name;
    }

    public void setUser_name(String user_name) {
        this.user_name = user_name;
    }

    public String getUser_email() {
        return user_email;
    }

    public void setUser_email(String user_email) {
        this.user_email = user_email;
    }

    public String getUser_password() {
        return user_password;
    }

    public void setUser_password(String user_password) {
        this.user_password = user_password;
    }

    public String getUser_group() {
        return user_group;
    }

    public void setUser_group(String user_group) {
        this.user_group = user_group;
    }

    public String getUser_banned() {
        return user_banned;
    }

    public void setUser_banned(String user_banned) {
        this.user_banned = user_banned;
    }

    public String getUser_register_time() {
        return user_register_time;
    }

    public void setUser_register_time(String user_register_time) {
        this.user_register_time = user_register_time;
    }

    public String getUser_slogan() {
        return user_slogan;
    }

    public void setUser_slogan(String user_slogan) {
        this.user_slogan = user_slogan;
    }

    public String getUser_birthday() {
        return user_birthday;
    }

    public void setUser_birthday(String user_birthday) {
        this.user_birthday = user_birthday;
    }

    public String getUser_link() {
        return user_link;
    }

    public void setUser_link(String user_link) {
        this.user_link = user_link;
    }

    public String getUser_region() {
        return user_region;
    }

    public void setUser_region(String user_region) {
        this.user_region = user_region;
    }

    public String getUser_organization() {
        return user_organization;
    }

    public void setUser_organization(String user_organization) {
        this.user_organization = user_organization;
    }

    public String getUser_description() {
        return user_description;
    }

    public void setUser_description(String user_description) {
        this.user_description = user_description;
    }
}
