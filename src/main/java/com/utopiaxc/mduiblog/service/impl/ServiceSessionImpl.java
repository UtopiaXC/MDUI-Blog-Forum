package com.utopiaxc.mduiblog.service.impl;

import com.utopiaxc.mduiblog.bean.BeanSession;
import com.utopiaxc.mduiblog.dao.DaoSession;
import com.utopiaxc.mduiblog.dao.impl.DaoSessionImpl;
import com.utopiaxc.mduiblog.service.ServiceSession;
import com.utopiaxc.mduiblog.utils.CookieUtils;

import javax.servlet.http.HttpServletRequest;

public class ServiceSessionImpl implements ServiceSession {
    DaoSession daoSession;
    public ServiceSessionImpl()throws Exception{
        this.daoSession=new DaoSessionImpl();
    }
    @Override
    public boolean isLogin(HttpServletRequest request) {

        if (CookieUtils.getCookieValue(request,"token")==null){
            return false;
        }
        BeanSession beanSession=daoSession.getSessionBean(CookieUtils.getCookieValue(request,"token"));
        return beanSession != null;
    }
}
