package com.utopiaxc.mduiblog.dao;

import com.utopiaxc.mduiblog.bean.BeanRegisterUser;

import javax.servlet.http.HttpServletRequest;

public interface DaoRegisterUser {
    boolean do_register(BeanRegisterUser beanRegisterUser);

    BeanRegisterUser do_login(BeanRegisterUser beanRegisterUser);
}
