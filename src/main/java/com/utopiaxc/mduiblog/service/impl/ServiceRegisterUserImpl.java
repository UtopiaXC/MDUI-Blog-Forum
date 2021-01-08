package com.utopiaxc.mduiblog.service.impl;

import com.utopiaxc.mduiblog.bean.BeanRegisterUser;
import com.utopiaxc.mduiblog.dao.DaoRegisterUser;
import com.utopiaxc.mduiblog.dao.DaoSession;
import com.utopiaxc.mduiblog.dao.impl.DaoRegisterUserImpl;
import com.utopiaxc.mduiblog.dao.impl.DaoSessionImpl;
import com.utopiaxc.mduiblog.service.ServiceRegisterUser;
import com.utopiaxc.mduiblog.utils.Encryption;

import javax.servlet.http.HttpServletRequest;
import java.util.Vector;

public class ServiceRegisterUserImpl implements ServiceRegisterUser {
    DaoRegisterUser daoRegisterUser;
    public ServiceRegisterUserImpl()throws Exception{
        this.daoRegisterUser=new DaoRegisterUserImpl();
    }
    @Override
    public boolean is_register_success(HttpServletRequest request) {
        BeanRegisterUser beanRegisterUser=new BeanRegisterUser();
        beanRegisterUser.setUser_name(request.getParameter("username"));
        beanRegisterUser.setUser_email(request.getParameter("email"));
        beanRegisterUser.setUser_password(Encryption.md5("#*#*4636"+request.getParameter("password")+"*#*#"));
        return daoRegisterUser.do_register(beanRegisterUser);
    }

    @Override
    public BeanRegisterUser do_login(HttpServletRequest request) {
        BeanRegisterUser beanRegisterUser=new BeanRegisterUser();
        beanRegisterUser.setUser_name(request.getParameter("username"));
        beanRegisterUser.setUser_password(Encryption.md5("#*#*4636"+request.getParameter("password")+"*#*#"));
        return daoRegisterUser.do_login(beanRegisterUser);
    }

    @Override
    public Vector<BeanRegisterUser> get_random_users() {
        return daoRegisterUser.get_random_users();
    }

    @Override
    public BeanRegisterUser get_user_by_id(String article_user_id) {
        return daoRegisterUser.get_user_by_id(article_user_id);
    }

    @Override
    public Vector<BeanRegisterUser> get_all_users() {
        return daoRegisterUser.get_all_users();
    }

    @Override
    public BeanRegisterUser get_full_user_by_id(String user_id) {
        return daoRegisterUser.get_full_user_by_id(user_id);
    }

    @Override
    public boolean update_admin_username(String user_name) {
        return daoRegisterUser.update_admin_username(user_name);
    }

    @Override
    public boolean update_admin_password(String old_password, String password) {
        return daoRegisterUser.update_admin_password(old_password,password);
    }
}
