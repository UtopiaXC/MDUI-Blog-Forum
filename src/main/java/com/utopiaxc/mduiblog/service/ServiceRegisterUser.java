package com.utopiaxc.mduiblog.service;

import com.utopiaxc.mduiblog.bean.BeanRegisterUser;

import javax.servlet.http.HttpServletRequest;

public interface ServiceRegisterUser {
    boolean is_register_success(HttpServletRequest request);

    BeanRegisterUser do_login(HttpServletRequest request);
}
