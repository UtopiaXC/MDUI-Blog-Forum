package com.utopiaxc.mduiblog.service;

import com.utopiaxc.mduiblog.bean.BeanRegisterUser;

import javax.servlet.http.HttpServletRequest;
import java.util.Vector;

public interface ServiceRegisterUser {
    boolean is_register_success(HttpServletRequest request);

    BeanRegisterUser do_login(HttpServletRequest request);

    Vector<BeanRegisterUser> get_random_users();

    BeanRegisterUser get_user_by_id(String article_user_id);

    Vector<BeanRegisterUser> get_all_users();

    BeanRegisterUser get_full_user_by_id(String user_id);
}
