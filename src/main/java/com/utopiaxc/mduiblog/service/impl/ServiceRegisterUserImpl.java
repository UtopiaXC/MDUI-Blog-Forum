package com.utopiaxc.mduiblog.service.impl;

import com.utopiaxc.mduiblog.bean.BeanRegisterUser;
import com.utopiaxc.mduiblog.dao.DaoRegisterUser;
import com.utopiaxc.mduiblog.dao.DaoSession;
import com.utopiaxc.mduiblog.dao.impl.DaoRegisterUserImpl;
import com.utopiaxc.mduiblog.dao.impl.DaoSessionImpl;
import com.utopiaxc.mduiblog.service.ServiceRegisterUser;
import com.utopiaxc.mduiblog.utils.Encryption;

import javax.servlet.http.HttpServletRequest;

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
}
