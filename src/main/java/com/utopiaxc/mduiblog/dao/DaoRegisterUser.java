package com.utopiaxc.mduiblog.dao;

import com.utopiaxc.mduiblog.bean.BeanRegisterUser;

import javax.servlet.http.HttpServletRequest;
import java.util.Vector;

public interface DaoRegisterUser {
    boolean do_register(BeanRegisterUser beanRegisterUser);

    BeanRegisterUser do_login(BeanRegisterUser beanRegisterUser);

    Vector<BeanRegisterUser> get_random_users();

    BeanRegisterUser get_user_by_id(String article_user_id);
}
