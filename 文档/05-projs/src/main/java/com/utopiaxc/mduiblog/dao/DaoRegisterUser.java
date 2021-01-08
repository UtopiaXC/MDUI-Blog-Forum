package com.utopiaxc.mduiblog.dao;

import com.utopiaxc.mduiblog.bean.BeanRegisterUser;

import javax.servlet.http.HttpServletRequest;
import java.util.Vector;

public interface DaoRegisterUser {
    boolean do_register(BeanRegisterUser beanRegisterUser);

    BeanRegisterUser do_login(BeanRegisterUser beanRegisterUser);

    Vector<BeanRegisterUser> get_random_users();

    BeanRegisterUser get_user_by_id(String article_user_id);

    Vector<BeanRegisterUser> get_all_users();

    BeanRegisterUser get_full_user_by_id(String user_id);

    boolean update_admin_username(String user_name);

    boolean update_admin_password(String old_password, String password);
}
