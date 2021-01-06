/*
 * Author:UtopiaXC
 * Created Time:2020/12/21-12:08
 * Created By Idea 2020.3
 * Usage:API的函数集
 * */
package com.utopiaxc.mduiblog.utils;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.utopiaxc.mduiblog.bean.*;
import com.utopiaxc.mduiblog.service.*;
import com.utopiaxc.mduiblog.service.impl.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Random;
import java.util.Vector;

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
        ServiceRegisterUser serviceRegisterUser=null;
        ServiceSession serviceSession=null;
        try {
            serviceRegisterUser=new ServiceRegisterUserImpl();
            serviceSession=new ServiceSessionImpl();
        }catch (Exception e){
            //返回的数据
            JSONObject data=new JSONObject();
            data.put("is_succeed","false");
            data.put("error_cause",e.toString());
            return data;
        }


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

    public static JSONObject logout(HttpServletRequest request) {
        //连接Service层
        ServiceSession serviceSession=null;
        try {
            serviceSession=new ServiceSessionImpl();
        }catch (Exception e){
            JSONObject data=new JSONObject();
            data.put("is_succeed","false");
            data.put("error_cause",e.toString());
            return data;
        }
        serviceSession.do_logout(request);
        JSONObject data=new JSONObject();
        data.put("is_succeed","true");
        return data;
    }

    public static JSONObject get_topics() {
        //连接Service层
        ServiceTopic serviceTopic=null;
        try {
            serviceTopic=new ServiceTopicImpl();
        }catch (Exception e){
            JSONObject data=new JSONObject();
            data.put("is_succeed","false");
            data.put("error_cause",e.toString());
            return data;
        }

        Vector<BeanTopic> topics=serviceTopic.get_topics();
        JSONObject data=new JSONObject();
        data.put("is_succeed","true");
        data.put("topics",topics.toArray());
        data.put("topics_count",topics.size());
        return data;
    }

    public static JSONObject add_article(HttpServletRequest request) {
        ServiceSession serviceSession;
        ServiceTopic serviceTopic;
        ServiceArticle serviceArticle;
        try {
            JSONObject data=new JSONObject();
            serviceArticle=new ServiceArticleImpl();
            serviceSession=new ServiceSessionImpl();
            serviceTopic=new ServiceTopicImpl();
            BeanSession beanSession=serviceSession.get_logged_user(request);
            if (beanSession==null){
                data.put("is_succeed","false");
                data.put("error_cause","您未登录");
                return data;
            }
            BeanTopic beanTopic=serviceTopic.get_topic(request.getParameter("article_topic_name"));
            if (beanTopic==null){
                data.put("is_succeed","false");
                data.put("error_cause","错误的话题");
                return data;
            }
            BeanArticle beanArticle=new BeanArticle();
            beanArticle.setArticle_content(request.getParameter("article_content"));
            beanArticle.setArticle_title(request.getParameter("article_title"));
            beanArticle.setArticle_topic_id(beanTopic.getTopic_id());
            beanArticle.setArticle_user_id(beanSession.getSession_user_id());
            beanArticle=serviceArticle.add_article(beanArticle);
            if (beanArticle==null){
                data.put("is_succeed","false");
                data.put("error_cause","服务器错误");
                return data;
            }
            data.put("is_succeed","true");
            data.put("article_id",beanArticle.getArticle_id());
            return data;
        }catch (Exception e){
            JSONObject data=new JSONObject();
            data.put("is_succeed","false");
            data.put("error_cause",e.toString());
            return data;
        }
    }

    public static JSONObject get_web_message() {
        ServiceWebMessage serviceWebMessage;
        try {
            serviceWebMessage=new ServiceWebMessageImpl();
        }catch (Exception e){
            JSONObject data=new JSONObject();
            data.put("is_succeed","false");
            data.put("error_cause",e.toString());
            return data;
        }
        Vector<BeanWebMessage> beanWebMessages=serviceWebMessage.get_web_messages();

        JSONObject data=new JSONObject();
        data.put("is_succeed","true");
        data.put("web_messages_count",beanWebMessages.size());
        data.put("web_messages",beanWebMessages.toArray());
        return data;
    }

    public static JSONObject admin_check(HttpServletRequest request) {
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
        if (serviceSession.is_login_admin(request))
            data.put("is_succeed","true");
        else
            data.put("is_succeed","false");
        return data;
    }

    public static JSONObject get_index(HttpServletRequest request) {
        ServiceArticle serviceArticle;
        ServiceTopic serviceTopic;
        ServiceRegisterUser serviceRegisterUser;
        try{
            serviceArticle=new ServiceArticleImpl();
            serviceTopic=new ServiceTopicImpl();
            serviceTopic=new ServiceTopicImpl();
            Vector<BeanTopic> topics=serviceTopic.get_index_topics();







            JSONObject data=new JSONObject();
            data.put("is_succeed","true");
            data.put("topics_count",topics.size());
            data.put("topics",topics.toArray());




            return data;
        }catch (Exception e){
            JSONObject data=new JSONObject();
            data.put("is_succeed","false");
            data.put("error_cause",e.toString());
            return data;
        }
    }
}
