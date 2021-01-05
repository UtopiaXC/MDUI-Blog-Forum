package com.utopiaxc.mduiblog.dao;

import com.utopiaxc.mduiblog.bean.BeanSession;

public interface DaoSession {
    BeanSession getSessionBean(String token);
}
