package com.utopiaxc.mduiblog.service;

import com.utopiaxc.mduiblog.bean.BeanRegisterUser;
import com.utopiaxc.mduiblog.bean.BeanSession;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public interface ServiceSession {
    boolean is_login(HttpServletRequest request);

    void do_login(BeanRegisterUser beanRegisterUser,HttpServletResponse response,HttpServletRequest request);

    void do_logout(HttpServletRequest request);

    BeanSession get_logged_user(HttpServletRequest request);

    boolean is_login_admin(HttpServletRequest request);
}
