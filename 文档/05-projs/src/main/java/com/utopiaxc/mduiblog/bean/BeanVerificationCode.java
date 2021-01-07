package com.utopiaxc.mduiblog.bean;

public class BeanVerificationCode {
    private String verification_code_id;
    private String verification_code_user_id;
    private String verification_code;
    private String verification_etime;
    private String verification_used;

    public BeanVerificationCode() {
    }

    public BeanVerificationCode(String verification_code_id, String verification_code_user_id, String verification_code, String verification_etime, String verification_used) {
        this.verification_code_id = verification_code_id;
        this.verification_code_user_id = verification_code_user_id;
        this.verification_code = verification_code;
        this.verification_etime = verification_etime;
        this.verification_used = verification_used;
    }

    public String getVerification_code_id() {
        return verification_code_id;
    }

    public void setVerification_code_id(String verification_code_id) {
        this.verification_code_id = verification_code_id;
    }

    public String getVerification_code_user_id() {
        return verification_code_user_id;
    }

    public void setVerification_code_user_id(String verification_code_user_id) {
        this.verification_code_user_id = verification_code_user_id;
    }

    public String getVerification_code() {
        return verification_code;
    }

    public void setVerification_code(String verification_code) {
        this.verification_code = verification_code;
    }

    public String getVerification_etime() {
        return verification_etime;
    }

    public void setVerification_etime(String verification_etime) {
        this.verification_etime = verification_etime;
    }

    public String getVerification_used() {
        return verification_used;
    }

    public void setVerification_used(String verification_used) {
        this.verification_used = verification_used;
    }
}
