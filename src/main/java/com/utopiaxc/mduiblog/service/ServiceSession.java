package com.utopiaxc.mduiblog.service;

import com.utopiaxc.mduiblog.bean.BeanRegisterUser;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public interface ServiceSession {
    boolean is_login(HttpServletRequest request);

    void do_login(BeanRegisterUser beanRegisterUser,HttpServletResponse response,HttpServletRequest request);
}
