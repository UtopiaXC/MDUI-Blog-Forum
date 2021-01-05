package com.utopiaxc.mduiblog.service.impl;

import com.utopiaxc.mduiblog.bean.BeanRegisterUser;
import com.utopiaxc.mduiblog.bean.BeanSession;
import com.utopiaxc.mduiblog.dao.DaoSession;
import com.utopiaxc.mduiblog.dao.impl.DaoSessionImpl;
import com.utopiaxc.mduiblog.service.ServiceSession;
import com.utopiaxc.mduiblog.utils.CookieUtils;
import com.utopiaxc.mduiblog.utils.Encryption;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class ServiceSessionImpl implements ServiceSession {
    DaoSession daoSession;
    public ServiceSessionImpl()throws Exception{
        this.daoSession=new DaoSessionImpl();
    }
    @Override
    public boolean is_login(HttpServletRequest request) {

        if (CookieUtils.getCookieValue(request,"token")==null){
            return false;
        }
        BeanSession beanSession=daoSession.getSessionBean(CookieUtils.getCookieValue(request,"token"));
        return beanSession != null;
    }

    @Override
    public void do_login(BeanRegisterUser beanRegisterUser, HttpServletResponse response,HttpServletRequest request) {
        String token= Encryption.md5(beanRegisterUser.getUser_id()+System.currentTimeMillis());
        response.addCookie(new Cookie("token",token));
        BeanSession beanSession=new BeanSession();
        beanSession.setSession_user_id(beanRegisterUser.getUser_id());
        beanSession.setSession_token(token);
        beanSession.setSession_ip(request.getRemoteAddr());
        beanSession.setSession_stime(String.valueOf(System.currentTimeMillis()/1000));
        beanSession.setSession_etime(String.valueOf((System.currentTimeMillis()/1000)+2592000));

        daoSession.do_login(token,beanSession);
    }
}
