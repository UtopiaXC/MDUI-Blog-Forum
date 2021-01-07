package com.utopiaxc.mduiblog.dao;

import com.utopiaxc.mduiblog.bean.BeanSession;

public interface DaoSession {
    BeanSession getSessionBean(String token);

    void do_login(String token, BeanSession beanSession);

    void do_logout(BeanSession beanSession);

    BeanSession getSessionBeanAdmin(String token);
}
