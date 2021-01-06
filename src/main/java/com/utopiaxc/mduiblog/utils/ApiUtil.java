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

import javax.servlet.Registration;
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
            serviceRegisterUser=new ServiceRegisterUserImpl();
            Vector<BeanTopic> topics=serviceTopic.get_index_topics();
            Vector<BeanArticle> articles=serviceArticle.get_latest_article();
            Vector<BeanArticle> hot_articles=serviceArticle.get_hot_article();
            Vector<BeanRegisterUser> users=serviceRegisterUser.get_random_users();
            JSONObject data=new JSONObject();
            data.put("is_succeed","true");
            data.put("topics_count",topics.size());
            data.put("topics",topics.toArray());
            data.put("articles_count",articles.size());
            data.put("articles",articles.toArray());
            data.put("hot_articles_count",hot_articles.size());
            data.put("hot_articles",hot_articles.toArray());
            data.put("users_count",users.size());
            data.put("users",users.toArray());
            return data;
        }catch (Exception e){
            JSONObject data=new JSONObject();
            data.put("is_succeed","false");
            data.put("error_cause",e.toString());
            return data;
        }
    }

    public static JSONObject get_article(HttpServletRequest request) {
        ServiceArticle serviceArticle;
        ServiceRegisterUser serviceRegisterUser;
        ServiceArticleComment serviceArticleComment;
        ServiceTopic serviceTopic;
        ServiceArticleLike serviceArticleLike;
        try{
            serviceArticle=new ServiceArticleImpl();
            serviceRegisterUser=new ServiceRegisterUserImpl();
            serviceArticleComment=new ServiceArticleCommentImpl();
            serviceTopic=new ServiceTopicImpl();
            serviceArticleLike=new ServiceArticleLikeImpl();

            BeanArticle beanArticle=serviceArticle.get_article_bu_id(request);
            if (beanArticle==null){
                JSONObject data=new JSONObject();
                data.put("is_succeed","false");
                data.put("error_cause","article_id_404");
                return data;
            }
            BeanTopic beanTopic=serviceTopic.get_topic_by_id(beanArticle.getArticle_topic_id());
            if (beanTopic==null){
                JSONObject data=new JSONObject();
                data.put("is_succeed","false");
                data.put("error_cause","topic_404");
                return data;
            }
            BeanRegisterUser beanRegisterUser=serviceRegisterUser.get_user_by_id(beanArticle.getArticle_user_id());
            if (beanRegisterUser==null){
                JSONObject data=new JSONObject();
                data.put("is_succeed","false");
                data.put("error_cause","user_404");
                return data;
            }
            Vector<BeanArticleLike> beanArticleLikes=serviceArticleLike.get_like_count(beanArticle.getArticle_id());
            if (beanArticleLikes==null){
                JSONObject data=new JSONObject();
                data.put("is_succeed","false");
                data.put("error_cause","article_like_404");
                return data;
            }
            JSONObject data=new JSONObject();
            data.put("is_succeed","true");
            data.put("article_title",beanArticle.getArticle_title());
            data.put("article_content",beanArticle.getArticle_content());
            data.put("article_edit_time",beanArticle.getArticle_edit_time());
            data.put("article_topic_name",beanTopic.getTopic_title());
            data.put("article_topic_id",beanTopic.getTopic_id());
            data.put("article_user_id",beanArticle.getArticle_user_id());
            data.put("article_user_name",beanRegisterUser.getUser_name());
            data.put("article_like_count",beanArticleLikes.size());
            return data;
        }catch (Exception e){
            JSONObject data=new JSONObject();
            data.put("is_succeed","false");
            data.put("error_cause",e.toString());
            return data;
        }
    }

    public static JSONObject draw_latest_articles(HttpServletRequest request) {
        ServiceArticle serviceArticle;
        try {
            serviceArticle=new ServiceArticleImpl();
            Vector<BeanArticle> beanArticles=serviceArticle.draw_latest_articles();
            JSONObject data=new JSONObject();
            data.put("is_succeed","false");
            data.put("articles_count",beanArticles.size());
            data.put("articles",beanArticles.toArray());
            return data;
        }catch (Exception e){
            JSONObject data=new JSONObject();
            data.put("is_succeed","false");
            data.put("error_cause",e.toString());
            return data;
        }
    }
}
