/*
 * Author:UtopiaXC
 * Created Time:2020/12/21-12:08
 * Created By Idea 2020.3
 * Usage:API的函数集
 * */
package com.utopiaxc.mduiblog.utils;

import com.alibaba.fastjson.JSONObject;
import com.utopiaxc.mduiblog.bean.BeanRegisterUser;
import com.utopiaxc.mduiblog.service.ServiceRegisterUser;
import com.utopiaxc.mduiblog.service.ServiceSession;
import com.utopiaxc.mduiblog.service.impl.ServiceRegisterUserImpl;
import com.utopiaxc.mduiblog.service.impl.ServiceSessionImpl;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class ApiUtil {

    public static JSONObject login_check(HttpServletRequest request) {
        //连接Service层
        ServiceSession serviceSession= null;
        try {
            serviceSession = new ServiceSessionImpl();
        } catch (Exception e) {
            //返回的数据
            JSONObject data=new JSONObject();
            data.put("is_succeed","false");
            data.put("error_cause",e.toString());
            return data;
        }

        //返回的数据
        JSONObject data=new JSONObject();
        //获得并返回登录检查数据
        if (serviceSession.is_login(request))
            data.put("is_succeed","true");
        else
            data.put("is_succeed","false");
        return data;
    }

    public static JSONObject register(HttpServletRequest request) {
        ServiceRegisterUser serviceRegisterUser=null;
        try{
            serviceRegisterUser=new ServiceRegisterUserImpl();
        }catch (Exception e){
            //返回的数据
            JSONObject data=new JSONObject();
            data.put("is_succeed","false");
            data.put("error_cause",e.toString());
            return data;
        }

        //返回的数据
        JSONObject data=new JSONObject();
        //获得并返回登录检查数据
        if (serviceRegisterUser.is_register_success(request))
            data.put("is_succeed","true");
        else {
            data.put("is_succeed", "false");
        }
        return data;
    }

    public static JSONObject login(HttpServletRequest request, HttpServletResponse response) throws Exception{
        //连接Service层
        ServiceRegisterUser serviceRegisterUser=new ServiceRegisterUserImpl();
        ServiceSession serviceSession=new ServiceSessionImpl();

        BeanRegisterUser beanRegisterUser=serviceRegisterUser.do_login(request);
        if (beanRegisterUser!=null){
            serviceSession.do_login(beanRegisterUser,response,request);
            JSONObject data=new JSONObject();
            data.put("is_succeed","true");
            return data;
        }else{
            JSONObject data=new JSONObject();
            data.put("is_succeed","false");
            return data;
        }

    }
}
